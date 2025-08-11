export default function Privacy() {
  return (
    <div className="w-[83%] mx-auto p-8 bg-white rounded-2xl shadow-md mt-10 mb-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-6 text-center">Last updated: January 11, 2025</p>

      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4 mt-8">1. Information We Collect</h2>
        <p className="mb-4">
          We collect information you provide directly to us, such as when you contact us through our website or LinkedIn profile. This may include your name, email address, and any messages you send.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Respond to your inquiries and provide customer support</li>
          <li>Communicate with you about our services</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8">3. Information Sharing</h2>
        <p className="mb-4">
          We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">4. Data Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">5. Cookies and Tracking</h2>
        <p className="mb-4">
          Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">6. Third-Party Links</h2>
        <p className="mb-4">
          Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">7. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">8. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">9. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this privacy policy, please contact us at{' '}
          <a href="https://linkedin.com/in/neilmillard" className="text-blue-600 hover:text-blue-800 underline">
            LinkedIn
          </a>.
        </p>
      </div>
    </div>
  );
}
