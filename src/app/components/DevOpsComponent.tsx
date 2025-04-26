import ExportedImage from 'next-image-export-optimizer';
import SocialLinks from "@/app/components/SocialLinks";

export default function DevOpsComponent() {
    return <div>
        <div className="w-[83%] mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">DevOps</h2>
            <div className="flex flex-col md:flex-row">
              <div className="md:pr-4">
                <p className="mb-4">
                  <ExportedImage
                    src="/img/devops.png"
                    alt="DevOps Diagram"
                    width={400}
                    height={300}
                    className="float-right ml-4 mb-4"
                  />
                  DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.
                </p>
                <p className="mb-4">DevOps is complementary with Agile software development; several DevOps aspects came from the Agile methodology.</p>
                <h3 className="text-xl font-semibold mb-2 mt-6">Key DevOps Practices</h3>
                <ul className="list-disc list-inside text-left mb-4">
                  <li>Continuous Integration and Continuous Delivery (CI/CD)</li>
                  <li>Infrastructure as Code (IaC)</li>
                  <li>Microservices Architecture</li>
                  <li>Monitoring and Logging</li>
                  <li>Communication and Collaboration</li>
                </ul>
                <p className="mb-4">As a DevOps consultant, I help organizations implement these practices to improve their software delivery process, reduce time to market, and increase the quality of their products.</p>
                <p className="mb-4">I offer training, consulting, and implementation services to help your team adopt DevOps practices and tools. Contact me to learn more about how I can help your organization.</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">DevOps Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-semibold">Jenkins</h4>
                  <p className="text-sm">CI/CD Automation</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-semibold">Docker</h4>
                  <p className="text-sm">Containerization</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-semibold">Kubernetes</h4>
                  <p className="text-sm">Container Orchestration</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-semibold">Terraform</h4>
                  <p className="text-sm">Infrastructure as Code</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-semibold">Ansible</h4>
                  <p className="text-sm">Configuration Management</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-semibold">Git</h4>
                  <p className="text-sm">Version Control</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-semibold">Prometheus</h4>
                  <p className="text-sm">Monitoring & Observability</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-semibold">HashiCorp Vault</h4>
                  <p className="text-sm">Secrets Management</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Public Cloud</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-semibold">AWS</h4>
                  <p className="text-sm">Amazon Web Services</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-semibold">GCP</h4>
                  <p className="text-sm">Google Cloud Platform</p>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-semibold">Azure</h4>
                  <p className="text-sm">Microsoft Azure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
}
