'use client';
import AccordionItem from './AccordionItem';
import ExportedImage from 'next-image-export-optimizer';

export default function DeploysComponent() {
  const faqItems = [
    {
      question: "What is continuous deployment?",
      answer: "Continuous deployment is a software development practice where code changes are automatically built, tested, and deployed to production without manual intervention. This approach enables faster release cycles and reduces the risk of deployment errors."
    },
    {
      question: "How do I set up a CI/CD pipeline?",
      answer: "Setting up a CI/CD pipeline typically involves selecting a CI/CD tool (like Jenkins, GitHub Actions, or GitLab CI), configuring build steps, setting up automated tests, and defining deployment targets. The specific steps will vary based on your project and infrastructure."
    },
    {
      question: "What's the difference between continuous integration, continuous delivery, and continuous deployment?",
      answer: "Continuous Integration (CI) involves regularly merging code changes into a shared repository with automated builds and tests. Continuous Delivery extends CI by ensuring code is always in a deployable state but requires manual approval for deployment. Continuous Deployment goes further by automatically deploying every change that passes all tests without human intervention."
    },
    {
      question: "How do I manage database migrations during deployment?",
      answer: "Database migrations should be versioned and automated as part of your deployment process. Tools like Flyway, Liquibase, or framework-specific migration tools can help manage schema changes. Always ensure migrations are backward compatible and consider using techniques like blue-green deployments to minimize downtime."
    },
    {
      question: "What are some best practices for secure deployments?",
      answer: "Secure deployments involve scanning code for vulnerabilities, using least privilege principles, encrypting sensitive data, implementing proper authentication and authorization, using secure communication channels, regularly updating dependencies, and having a robust secrets management solution."
    }
  ];

  return (
    <div>
      <div className="w-[83%] mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Deployments</h2>

          <div className="text-left">
            <h3 className="text-xl font-semibold mb-2">Local Software Development</h3>
            <p className="mb-4">
              <ExportedImage
                src="/img/live-deployment-docker.png"
                alt="Software Deployment"
                width={400}
                height={300}
                className="float-right ml-4 mb-4"
              />
              Local software development is the foundation of creating robust applications. Developers work in their own environments, using tools like IDEs, version control systems, and local servers to build and test code. This process can include &quot;vibe coding&quot; - those where developers &quot;Pair&quot; with a LLM to produce code. Modern development workflows typically involve feature branches, code reviews, and automated testing with a CI/CD pipeline to ensure quality before code is merged into the main codebase.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-6">Deploying to Servers</h3>
            <p className="mb-4">
              Once code is ready, it needs to be deployed to make it available to users. Deployment can target various environments such as dedicated servers, Virtual Private Servers (VPS), or container orchestration platforms like Kubernetes, AWS ECS or Docker Swarm. The deployment process typically involves building the application into a deployable artefact, transferring files to the target environment, configuring the runtime and dependencies, and starting the application. Modern deployment strategies like blue-green deployments, canary releases, and feature flags help minimize downtime and risk when releasing new features.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-6">Managing Dependencies</h3>
            <p className="mb-4">
              Applications rarely exist in isolation and often depend on various libraries, frameworks, and runtime environments. Managing these dependencies is crucial for successful deployments. For Python applications, virtual environments (venv) or tools like Poetry and uv help isolate dependencies for each project. PHP applications might use Composer for dependency management. Other ecosystems have their own tools: npm or Yarn for JavaScript, Maven or Gradle for Java, and so on. Properly managing dependencies ensures that your application runs consistently across different environments and reduces &quot;it works on my machine&quot; problems.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-6">Handling Application Secrets</h3>
            <p className="mb-4">
              Most applications require secrets such as API keys, database credentials, and encryption keys to function properly. These secrets should never be hardcoded or committed to version control. Instead, use environment variables, secret management tools like HashiCorp Vault or AWS Secrets Manager, or configuration files that are excluded from version control. During deployment, these secrets need to be securely injected into the application environment. Proper secret rotation and access control policies are also essential for maintaining security throughout the application lifecycle.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-8">Frequently Asked Questions</h3>
            <div className="mt-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-10 p-6 bg-indigo-100 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Need help with your deployment strategy?</h3>
            <p className="mb-4">Let&apos;s discuss how I can help you implement efficient and secure deployment processes for your projects.</p>
            <a
              href="https://linkedin.com/in/neilmillard"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
