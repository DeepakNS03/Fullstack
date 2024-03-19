import React from 'react';
import Header from '../../components/header';

const Privacy = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="font-bold text-4xl text-center mb-6">Privacy Policy</h1>
        <div className="text-base leading-relaxed text-gray-800">
          <p className="mb-4">
          ZenYoga is committed to protecting the privacy and security of your personal information. This privacy policy outlines the types of personal information we collect, how we use it, and the steps we take to safeguard your information.          </p>
          <h2 className="font-bold text-2xl mt-6 mb-2">1. Information We Collect</h2>
          <p className="mb-4">
          We may collect the following types of personal information from users of our website:

          Name
          Email address
          Contact information
          Payment information (if applicable)
          Demographic information
          Other information voluntarily provided by users          </p>

          <h2 className="font-bold text-2xl mt-6 mb-2">2. How We Use Your Information</h2>
          <p className="mb-4">
          We may use the personal information we collect for the following purposes:

          To provide and personalize our services
          To process transactions
          To communicate with users
          To send promotional emails and newsletters
          To improve our website and services
          To comply with legal and regulatory requirements          </p>

          <h2 className="font-bold text-2xl mt-6 mb-2">3. Data Security</h2>
          <p className="mb-4">
          We take appropriate measures to protect the security of your personal information and prevent unauthorized access, disclosure, alteration, or destruction of data. However, no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee the absolute security of your data.          </p>

          <h2 className="font-bold text-2xl mt-6 mb-2">4. Third-Party Links</h2>
          <p className="mb-4">
          Our website may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of these sites before providing any personal information.         </p>

          <h2 className="font-bold text-2xl mt-6 mb-2">5. Children's Privacy</h2>
          <p className="mb-4">
          Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe that we have inadvertently collected personal information from a child under 13, please contact us immediately, and we will take steps to remove such information from our servers.          </p>

          <h2 className="font-bold text-2xl mt-6 mb-2">6. Changes to This Privacy Policy</h2>
          <p className="mb-4">
          We reserve the right to update or modify this privacy policy at any time. Any changes will be effective immediately upon posting the updated policy on this page. We encourage you to review this privacy policy periodically for changes. </p>

          <h2 className="font-bold text-2xl mt-6 mb-2">7. Contact Us</h2>
          <p className="mb-4">
          If you have any questions or concerns about our privacy practices or this privacy policy, please contact us at zenyoga@gmail.com        </p>

          
        </div>
      </div>
    </div>
  );
}

export default Privacy;
