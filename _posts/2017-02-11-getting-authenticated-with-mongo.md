---
layout: post
status: publish
published: true
title: Getting authenticated with Mongo
author:
  display_name: neil
  login: neil
  email: neil@neilmillard.com
  url: ''
author_login: neil
author_email: neil@neilmillard.com
categories:
- Development
tags: [mongodb,x509,ca,authentication]
comments: true
---
The challenge this week was to find out why the authentication appeared to be broken on the automated mongodb build.
Several weeks ago I had written a [puppet](www.puppet.com) module to build a mongodb cluster using a number of arguments,
like number of nodes, nodenames, certificates, etc.
Despite having certificates generated from a CA (Certificate Authority), and the certificate with the client to log on,
this user could do anything. and ```.auth()``` was not needed.
```bash
mongo admin --ssl --sslCAFile /etc/mongodb/ssl/mongoCA.pem \  
    --sslPEMKeyFile /etc/mongodb/ssl/mongo1.pem \
    -u mongoReadony -p mongotest --host mongo1
```
In the ```/etc/mongod.conf``` file, ```security clusterAuthMode: x509``` was set, but ```security.authorization:``` was ```disabled```
It was assumed that specifying net.ssl.mode was enough and the security.authorization setting would be ignored.
Sorry, false assumption.

The whole required section looks like this.
```
net.port: 27017
net.ssl.mode: preferSSL
net.ssl.PEMKeyFile: /etc/mongodb/ssl/mongo1.pem
net.ssl.CAFile: /etc/mongodb/ssl/mongoCA.crt
net.ssl.clusterFile: /etc/mongodb/ssl/mongo1.pem
security.authorization: enabled
security.clusterAuthMode: x509
```

The article [Deploy a MongoDB 3.0 Replica Set With X.509 Authentication and Self-Signed Certificates](https://blog.cloudandheat.com/index.php/en/2015/04/19/deploy-a-mongodb-3-0-replica-set-with-x-509-authentication-and-self-signed-certificates/) help a lot.

Now with authentication on, the automation stopped working. Lack of cluster permissions. Two issues here,
1. As of v3.2.10, once replication is enabled, [users cannot be created with an O, OU and DC combination](https://docs.mongodb.com/v3.2/tutorial/configure-x509-client-authentication/) that matches the [Replica node accounts](https://docs.mongodb.com/v3.2/core/security-x.509/)
2. [userAdminAnyDatabase](https://docs.mongodb.com/v3.2/tutorial/enable-authentication/#create-the-user-administrator), is not enough permission to manage a cluster such as ```rs.initiate()```

To address the first issue, another OU was chosen for the user certificates and the script updated to create the standard users.

The second issue was rectified by specifying an Admin user in the build script that had clusterAdmin permissions.
```bash
ADMINUSER_CN='<%= @adminuser_cn %>'
# get user subject from certificate
useroutput=$( /usr/bin/openssl x509 -in ${PKI_PATH}/${ADMINUSER_CN}.combo.pem -inform PEM -subject -nameopt RFC2253 )
if [[ ${useroutput} =~ ^subject=.(.*?),CN= ]]; then
	USER_KEY_SUBJ=${BASH_REMATCH[1]}
fi
_tls_name="${USER_KEY_SUBJ},CN=${ADMINUSER_CN}"

/usr/bin/mongo localhost:27017/admin --quiet --eval \
  "printjson(
    db.getSiblingDB("\$external").runCommand(
    { 
      createUser: "${_tls_name}",
      roles: [
                   { role: "readWrite", db: 'test' },
                   { role: "userAdminAnyDatabase", db: "admin" },
                   { role: "clusterAdmin", db:"admin"}
                 ],
              writeConcern: { w: "majority" , wtimeout: 5000 }
          }
    );
  )"
```
Then the script can log in as this user with
```bash
X509OPT=" --ssl --sslPEMKeyFile ${PKI_PATH}/${ADMINUSER_CN}.combo.pem --sslCAFile ${PKI_PATH}/<%= @ejbca %>-ca.crt${PEMKey}"
```
```bash
RS_AUTH="db.getSiblingDB(\"\$external\").auth({mechanism: \"MONGODB-X509\",user: \"${USER_KEY_SUBJ},CN=${ADMINUSER_CN}\"});"
```
```bash
/usr/bin/mongo ${RSMASTER}:27017/admin --quiet ${X509OPT} --eval "${RS_AUTH}printjson(rs.status())" 
```
to further configure the replica set.and rs.initiate().
