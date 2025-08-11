'use client';
import AccordionItem from './AccordionItem';

export default function DeploysComponent() {
  const faqItems = [
    {
      question: "Is this service only for large teams, or is it suitable for independent developers?",
      answer: "Our service is specifically designed with independent developers in mind. We understand the unique challenges and resource constraints you face, and our solutions are tailored to provide maximum impact with minimal overhead, allowing you to compete effectively with larger teams."
    },
    {
      question: "How long does it take to see results after implementing your service?",
      answer: "The time to see results can vary depending on the complexity of your existing setup. However, many of our clients report significant improvements in deployment speed and reliability within the first few days of integration. Our goal is to get you up and running quickly, with noticeable benefits almost immediately."
    },
    {
      question: "What kind of technical support do you offer?",
      answer: "We provide comprehensive technical support to ensure your success. This includes initial setup assistance, ongoing troubleshooting, and expert guidance on optimizing your deployment pipelines. Our support team is comprised of experienced developers who understand your needs."
    },
    {
      question: "Can your service integrate with my existing tools and platforms (e.g., GitHub, AWS, Vercel)?",
      answer: "Yes, our Continuous Deployment service is built for flexibility and integrates seamlessly with a wide range of popular development tools, version control systems, cloud providers, and platforms commonly used by independent developers. During your free consultation, we can discuss your specific tech stack and how we can best integrate."
    },
    {
      question: "What if I'm not familiar with Continuous Deployment concepts?",
      answer: "No problem at all! Our service is designed to be user-friendly, even for those new to continuous deployment. We provide clear documentation, intuitive interfaces, and personalized support to guide you through every step. Our free consultation is also a great opportunity to learn more and get your questions answered."
    }
  ];

  const testimonials = [
    {
      quote: "Before this service, deployments were a constant source of anxiety. Now, I push code and it just works. My productivity has skyrocketed!",
      author: "Alex R., Indie Game Developer"
    },
    {
      quote: "As a solo developer, every minute counts. This CD service has freed up so much of my time, allowing me to focus on building amazing features instead of wrestling with servers.",
      author: "Sarah L., Mobile App Creator"
    },
    {
      quote: "The security features are a game-changer. I can deploy with confidence, knowing my applications are protected against vulnerabilities.",
      author: "Mark T., SaaS Founder"
    },
    {
      quote: "I used to dread updates, but now with automated deployments, I can release new versions multiple times a day without breaking a sweat.",
      author: "Jessica P., Web Application Developer"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="w-[83%] mx-auto p-8 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-2xl shadow-lg mt-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Deploy Your Code with Confidence: Secure, Seamless, and Stress-Free!</h1>
        <p className="text-xl mb-6">Discover how our Continuous Deployment service helps independent software developers achieve rapid, reliable deployments without the headaches of manual processes or security vulnerabilities.</p>
        <a
          href="#offer"
          className="inline-block px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
        >
          Get Started Now
        </a>
        <div className="mt-6">
          <p className="text-sm opacity-90">Trusted by developers using Lovable, Cursor, V0, and more</p>
        </div>
      </div>

      {/* Problem Statement Section */}
      <div className="w-[83%] mx-auto p-8 bg-white rounded-2xl shadow-md mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-600">Are You Tired of Deployment Nightmares and Wasted Hours?</h2>
        <p className="text-lg mb-6">
          As an independent software developer, you pour your heart and soul into crafting innovative applications. But what happens when it&apos;s time to share your creations with the world? The deployment process, often overlooked, can quickly become a labyrinth of frustration, eating into your valuable time and stifling your creativity. Are you struggling with:
        </p>
        <ul className="space-y-4 mb-6 text-lg">
          <li className="flex items-start">
            <span className="text-red-500 font-bold mr-2">•</span>
            <span><strong>Manual Deployment Headaches:</strong> Wasting countless hours on repetitive, error-prone manual deployments, pulling you away from what you do best – coding?</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 font-bold mr-2">•</span>
            <span><strong>Inconsistent Environments:</strong> Battling with inconsistent development, staging, and production environments, leading to unexpected bugs and deployment failures?</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 font-bold mr-2">•</span>
            <span><strong>Security Vulnerability Worries:</strong> Constantly fretting over potential security gaps in your deployment pipeline, leaving your applications and users exposed?</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 font-bold mr-2">•</span>
            <span><strong>Slow Release Cycles:</strong> Frustrated by the glacial pace of releasing new features and updates, hindering your ability to respond quickly to market demands?</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 font-bold mr-2">•</span>
            <span><strong>Lack of a Clear Deployment Strategy:</strong> Feeling overwhelmed by the complexity of setting up a robust and efficient continuous deployment pipeline?</span>
          </li>
        </ul>
        <p className="text-lg text-gray-700">
          These frustrations aren&apos;t just minor inconveniences; they&apos;re significant roadblocks that can derail your projects, erode your confidence, and ultimately impact your success. You&apos;re losing valuable time, risking security breaches, and missing opportunities to innovate. It&apos;s time for a change.
        </p>
      </div>

      {/* Solution Introduction Section */}
      <div className="w-[83%] mx-auto p-8 bg-green-50 rounded-2xl shadow-md mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">The Seamless Solution: Your Path to Effortless, Secure Deployments</h2>
        <p className="text-lg mb-6">
          Imagine a world where your code changes are automatically built, tested, and deployed to production without manual intervention. Our Continuous Deployment service transforms this vision into your reality. We leverage cutting-edge automation and robust security protocols to streamline your release cycles, allowing you to focus on innovation rather than infrastructure. Unlike generic deployment tools, our service is tailored specifically for independent software developers, understanding the unique challenges you face with vibe coding apps and LLMs.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-green-700">Key Benefits:</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-green-600 mb-2">⚡ Accelerate Release Cycles</h4>
            <p>Deploy new features and updates in minutes, not hours or days.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-green-600 mb-2">🛡️ Enhance Security Posture</h4>
            <p>Benefit from built-in security checks and best practices to protect your applications.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-green-600 mb-2">⚖️ Ensure Consistency</h4>
            <p>Eliminate environment inconsistencies with automated, repeatable deployments.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-green-600 mb-2">🎯 Reduce Errors</h4>
            <p>Minimize human error with automated testing and deployment processes.</p>
          </div>
          <div className="bg-white p-4 rounded-lg md:col-span-2">
            <h4 className="font-bold text-green-600 mb-2">⏰ Reclaim Your Time</h4>
            <p>Free up valuable time previously spent on manual deployments, allowing you to focus on development.</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="w-[83%] mx-auto p-8 bg-white rounded-2xl shadow-md mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center">How Our Continuous Deployment Service Delivers Results</h2>
        <p className="text-lg mb-8 text-center">
          Our service simplifies the complex world of software deployment into a clear, efficient, and automated process. Here&apos;s how we ensure your code goes from commit to production seamlessly and securely:
        </p>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 font-bold">1</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Code Integration & Version Control</h3>
              <p>First, you integrate your existing code repository (e.g., GitHub, GitLab, Bitbucket) with our platform. Our system automatically detects new code commits, triggering the start of the deployment pipeline.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 font-bold">2</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Automated Build & Testing</h3>
              <p>Once a new commit is detected, our service automatically builds your application and executes a comprehensive suite of automated tests (unit, integration, and end-to-end) to identify issues early.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 font-bold">3</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Secure Environment Provisioning</h3>
              <p>We provision and configure secure, isolated environments for your application, including servers, databases, and network configurations, all optimized for performance and security.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 font-bold">4</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Automated Deployment to Production</h3>
              <p>Upon successful completion of all tests, your application is automatically deployed using advanced strategies like blue-green deployments or canary releases to minimize downtime.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-600 font-bold">5</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Continuous Monitoring & Feedback</h3>
              <p>After deployment, our service provides continuous monitoring of your application&apos;s performance with instant alerts on any anomalies, ensuring optimal performance and stability.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="#offer"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            See How It Works for You
          </a>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="w-[83%] mx-auto p-8 bg-blue-50 rounded-2xl shadow-md mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Trusted by Independent Developers Worldwide</h2>
        <p className="text-lg mb-8 text-center">
          Don&apos;t just take our word for it. Independent software developers like you are already experiencing the transformative power of our Continuous Deployment service.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="font-semibold text-blue-600">- {testimonial.author}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Our Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-2xl font-bold text-blue-600">1000+</div>
              <div className="text-sm text-gray-600">Independent Developers Served</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">99.9%</div>
              <div className="text-sm text-gray-600">Deployment Success Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">75%</div>
              <div className="text-sm text-gray-600">Reduction in Deployment Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600">50%</div>
              <div className="text-sm text-gray-600">Decrease in Post-Deployment Bugs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Offer Section */}
      <div id="offer" className="w-[83%] mx-auto p-8 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl shadow-lg mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Start Deploying with Confidence Today: Claim Your Free Consultation!</h2>
        <p className="text-lg mb-6 text-center">
          Ready to transform your deployment process from a source of stress to a seamless, automated workflow? We&apos;re offering a free, no-obligation consultation to discuss your current deployment challenges and demonstrate how our service can be tailored to your specific projects.
        </p>

        <div className="bg-black bg-opacity-20 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">What&apos;s Included in Your Free Consultation:</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              <span>Personalized Needs Assessment: A deep dive into your current development and deployment workflows</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              <span>Customized Solution Overview: Discover how our service can integrate with your existing tools and tech stack</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              <span>Live Demo: See our Continuous Deployment pipeline in action with features relevant to you</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              <span>Q&A Session: Get all your questions answered by our deployment experts</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Claim Your Free Consultation Now
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-[83%] mx-auto p-8 bg-white rounded-2xl shadow-md mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Questions, Answered</h2>
        <p className="text-lg mb-6 text-center">
          We understand you might have questions about how our Continuous Deployment service can benefit your specific needs as an independent developer.
        </p>
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

      {/* Final CTA Section */}
      <div className="w-[83%] mx-auto p-8 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-2xl shadow-lg mt-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Don&apos;t Miss Out on Effortless Deployments and Accelerated Growth!</h2>
        <p className="text-lg mb-6">
          The future of your software development hinges on efficient and secure deployment. Don&apos;t let manual processes, security vulnerabilities, or slow release cycles hold you back any longer. The opportunity to transform your workflow, reclaim your time, and focus on what you love – building incredible software – is right here, right now.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
        >
          Get Started Today
        </a>
      </div>

    </div>
  );
}
