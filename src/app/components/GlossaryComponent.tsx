import React from 'react';

// Define the structure of a glossary term
interface GlossaryTerm {
  term: string;
  definition: string;
}

// Glossary terms from the Jekyll site
const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Agile',
    definition: 'Do just enough design to start delivering value. Iteritive and continious improvement of software/product.'
  },
  {
    term: 'Ansible',
    definition: 'An open-source software provisioning, configuration management, and application-deployment tool.'
  },
  {
    term: 'API',
    definition: 'Application Program Interface is the computer to computer information hub. It is used by third parties or mobile Applications to provide data, but not visual information.'
  },
  {
    term: 'AWS',
    definition: 'Amazon Web Services, a public cloud provider. Infrastructure as a service.'
  },
  {
    term: 'Blockers',
    definition: 'An issue identified by an Agile team that is halting or slowing down progress.'
  },
  {
    term: 'Capital Expense',
    definition: 'CapEx, the money a project/company spends to buy, maintain or improve it\'s fixed assets, such as buildings, vehicles and hardware.'
  },
  {
    term: 'CI/CD',
    definition: 'Continuous Integration and Continuous Delivery/Deployment. A method to frequently deliver apps to customers by introducing automation into the stages of app development.'
  },
  {
    term: 'Computer Process',
    definition: 'A program or function that provides results (outputs) based on data (inputs).'
  },
  {
    term: 'Configuration Management',
    definition: 'Used to apply configuration to platforms, servers and software.'
  },
  {
    term: 'Containerization',
    definition: 'A lightweight alternative to full machine virtualization that involves encapsulating an application in a container with its own operating environment.'
  },
  {
    term: 'Containers',
    definition: 'A process running on a server, in a jail from a predefined disk image/file structure.'
  },
  {
    term: 'Continuous Integration',
    definition: 'A pipeline where automated tests check commited code, providing a fast feedback loop to uncover errors.'
  },
  {
    term: 'CPU',
    definition: 'Central Processing Unit. This provides the computer the power to run programs, code and tasks.'
  },
  {
    term: 'Data Centre',
    definition: 'A dedicated space that is climate controlled and secure, for housing and operating servers and other infrastructure.'
  },
  {
    term: 'Database',
    definition: 'A service that saves, holds and returns data. From a spreadsheet, to a full on Database with data analytics stored functions and reports.'
  },
  {
    term: 'dDOS',
    definition: 'Distributed Denial Of Service. Where a group of computers send traffic malicously to your website with the aim of distrupting service.'
  },
  {
    term: 'Dependencies',
    definition: 'Reuseable stock or library code, that are installed alongside the main developer\'s code for the application to work.'
  },
  {
    term: 'Development',
    definition: 'Creation and improvement of software running in a Software System.'
  },
  {
    term: 'DevOps',
    definition: 'A term used in Agile. 1. A role that uses a mix of Infrastructure and Development Skills, often creating automated workflows and IaC. 2. A term that describes a way of teams working together.'
  },
  {
    term: 'Docker',
    definition: 'A further step into application isolation where an independant image can run on a server. Often used with microservices.'
  },
  {
    term: 'ECS',
    definition: 'Amazon Webservices Managed docker service. Enable the management of running docker containers.'
  },
  {
    term: 'ESB',
    definition: 'Enterprise Service Bus is a common Data Access Layer used to link dispersed IT systems together within an organisation.'
  },
  {
    term: 'Firewall',
    definition: 'A network device that controls access between network components.'
  },
  {
    term: 'Git',
    definition: 'A distributed version-control system for tracking changes in source code during software development.'
  },
  {
    term: 'Hybrid private and public cloud',
    definition: 'A mix of private and public cloud, usually seen during migrations and for sensitive data reasons.'
  },
  {
    term: 'Hypervisor',
    definition: 'A system that runs on a server to enable virtual machines to run.'
  },
  {
    term: 'Infrastructure',
    definition: 'Refers to Servers, Routers, Network Switches, Firewall and other foundational components of a software system. Can be purchased on a Pay as You Use from Cloud Providers.'
  },
  {
    term: 'Infrastructure as Code (IaC)',
    definition: 'Where code is written that can create or destroy infrastructure and computer environments.'
  },
  {
    term: 'Jenkins',
    definition: 'An open-source automation server that enables developers to build, test, and deploy their software.'
  },
  {
    term: 'Kanban',
    definition: 'An inventory and scheduling system. Used in software development, like SCRUM, however the tasks are not timeboxed, but subjected to other measures and limits.'
  },
  {
    term: 'KPI',
    definition: 'Key Performance Indicators enable decisions to be made through metrics about your business, app and service.'
  },
  {
    term: 'Kubernetes',
    definition: 'An open-source platform designed to automate deploying, scaling, and operating application containers.'
  },
  {
    term: 'Lambda',
    definition: 'Serverless offering of AWS. They are small quick tasks running from a predefined Docker container.'
  },
  {
    term: 'Memory',
    definition: 'Where computers temporarily store data.'
  },
  {
    term: 'Memory (Non-Volatile)',
    definition: 'Is able to store data for long periods of time, like tape or disks.'
  },
  {
    term: 'Memory (RAM)',
    definition: 'Random access memory, programs and data stored while the computer is on.'
  },
  {
    term: 'Memory (ROM)',
    definition: 'Read-only memory, programs and data stored while computer is off. Usually contains bootstrap code.'
  },
  {
    term: 'Microservices',
    definition: 'A small and deployable software program, part of a Software System.'
  },
  {
    term: 'MVP',
    definition: 'Minimum Viable Product is a small scale product or service that is used to demonstrate a demand for that product or service.'
  },
  {
    term: 'Network',
    definition: 'The connections between servers. This enables communication between software system components as well as the internet.'
  },
  {
    term: 'Network Switch',
    definition: 'A physical device (is virtual in Cloud Environments), to marshall network traffic and communications between software system components.'
  },
  {
    term: 'Operation Expenses',
    definition: 'OpEx, the ongoing costs running a product, business or system.'
  },
  {
    term: 'Pair Programming',
    definition: 'Where two people working together on a task improves efficiency. E.g building a wardrobe.'
  },
  {
    term: 'Pipeline',
    definition: 'A defined process that links tasks together, usually on a continuous integration server.'
  },
  {
    term: 'Platform',
    definition: 'Managed IaC to simplify the deployment of Software Systems.'
  },
  {
    term: 'Router',
    definition: 'A network device that links networks together.'
  },
  {
    term: 'Scaling',
    definition: 'To grow or shrink the servers delivering a service.'
  },
  {
    term: 'SCRUM',
    definition: 'A framework for organising tasks. Tasks are scheduled into a timeboxed period known as a Sprint.'
  },
  {
    term: 'Serverless',
    definition: 'A paradyme where code is run on servers maintained by the cloud provider. They can be cheap to start with, but cost can escalate for larger more frequent workloads.'
  },
  {
    term: 'Servers',
    definition: 'Compute power of a Software System. Where computers and CPUs are employed to carry out the work.'
  },
  {
    term: 'Software System',
    definition: 'A collection of software, hardware and virtual hardware that makes up a system for running software.'
  },
  {
    term: 'Source Control',
    definition: 'Where code is stored, in a way that every change and version is also kept. Useful for auditing and finding bugs due to changes.'
  },
  {
    term: 'Terraform',
    definition: 'An open-source infrastructure as code software tool that provides a consistent CLI workflow to manage hundreds of cloud services.'
  },
  {
    term: 'Test Driven Development',
    definition: 'TDD - A programming practice where the tests are written first. A test ensures that given a set of inputs, a program or function produces the correct output.'
  },
  {
    term: 'Virtualisation',
    definition: 'Enabling the resources of a computer to run more than one logical computer in an isolated way on the same computer, whilst they are not aware of each other.'
  }
];

export default function GlossaryComponent() {
  return (
    <div>
      <div className="w-[83%] mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">DevOps Glossary</h2>
          <p className="mb-6">A collection of common terms and definitions used in DevOps and cloud computing.</p>

          <div className="text-left">
            <div className="grid grid-cols-1 gap-4">
              {glossaryTerms.sort((a, b) => a.term.localeCompare(b.term)).map((item, index) => (
                <div key={index} className="border-b pb-4">
                  <h3 className="text-xl font-semibold text-blue-700" id={item.term.replace(/\s+/g, '-').replace(/[()]/g, '').toLowerCase()}>{item.term}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.definition }}></p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="italic">This glossary is regularly updated with new terms and definitions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
