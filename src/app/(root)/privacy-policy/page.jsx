// pages/privacy-policy.js
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-4">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your personal information when you use our
          README Generator web app.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          1. Information We Collect
        </h2>
        <p className="text-gray-600 mb-4">
          We may collect the following types of information when you use our
          app:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>
            Personal Information: Name, email address, and other details you
            provide during sign-up.
          </li>
          <li>
            Usage Data: Information about how you interact with the app, such as
            pages visited and features used.
          </li>
          <li>
            Cookies: We use cookies to enhance your experience and analyze app
            usage.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-600 mb-4">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>To provide and improve our services.</li>
          <li>
            To communicate with you, including sending updates and
            notifications.
          </li>
          <li>To analyze app usage and improve user experience.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          3. Data Security
        </h2>
        <p className="text-gray-600 mb-4">
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure, including encrypting user
          passwords using secure encryption algorithms. However, no method of
          transmission over the internet or electronic storage is 100% secure.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          4. Sharing Your Information
        </h2>
        <p className="text-gray-600 mb-4">
          We do not sell, trade, or otherwise transfer your personal information
          to third parties without your consent, except as required by law or to
          protect our rights.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          5. Your Rights
        </h2>
        <p className="text-gray-600 mb-4">You have the right to:</p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Access, update, or delete your personal information.</li>
          <li>Opt-out of receiving promotional communications.</li>
          <li>Request a copy of the data we hold about you.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          6. Changes to This Privacy Policy
        </h2>
        <p className="text-gray-600 mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and we will notify you of significant changes
          through the app or email.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          7. Contact Us
        </h2>
        <p className="text-gray-600 mb-4">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <p className="text-gray-600">
          Email:{" "}
          <a
            href="mailto:hridoysaha969@gmail.com"
            className="text-blue-500 hover:underline"
          >
            hridoysaha969@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
