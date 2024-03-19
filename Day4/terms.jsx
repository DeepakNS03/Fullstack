import React from 'react';
import Header from '../../components/header';

const Terms = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="font-bold text-4xl text-center mb-6">Terms and Conditions of Use</h1>
        <div className="text-base leading-relaxed text-gray-800">
          <p className="mb-4">
            Welcome to ZenYoga website. By accessing this website, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms and conditions carefully before using our website.
          </p>

          <h2 className="font-bold text-2xl mt-6 mb-2">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using this website, you agree to be bound by these terms and conditions, our Privacy Policy, and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>

          <h2 className="font-bold text-2xl mt-6 mb-2">2. Use of Website</h2>
          <p className="mb-4">
            You must be at least 18 years old to use this website. You agree to use this website only for lawful purposes and in accordance with these terms and conditions. You agree not to use this website in any way that may cause damage to the website or impair the availability or accessibility of the website.
          </p>

          <h2 className="font-bold text-2xl mt-6 mb-2">3. Registration and Membershi</h2>
          <p className="mb-4">
          Certain areas of the website may require registration or membership. By registering or becoming a member, you agree to provide accurate and complete information.
          You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device.
          You agree to accept responsibility for all activities that occur under your account or password.          </p>

          <h2 className="font-bold text-2xl mt-6 mb-2">4. Payment Terms</h2>
          <p className="mb-4">
          Payment for services or products offered on this website must be made in accordance with the payment terms specified.
          All fees are non-refundable unless otherwise stated in our refund policy.          </p>
          
          <h2 className="font-bold text-2xl mt-6 mb-2">5. Intellectual Property Rights</h2>
          <p className="mb-4">
          All content, trademarks, logos, and other intellectual property displayed on this website are the property of ZenYoga or its licensors and are protected by copyright and other intellectual property laws.
          You may not reproduce, modify, distribute, or republish any content from this website without our prior written consent.          </p>
          
          <h2 className="font-bold text-2xl mt-6 mb-2">6. Disclaimers</h2>
          <p className="mb-4">
          The information provided on this website is for general informational purposes only and should not be considered as medical advice or a substitute for professional medical treatment or diagnosis.
          We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website.          </p>
          
          <h2 className="font-bold text-2xl mt-6 mb-2">7. Limitation of Liability</h2>
          <p className="mb-4">
          We shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of this website or the information, products, or services provided on this website.          </p>
          
          <h2 className="font-bold text-2xl mt-6 mb-2">8. Governing Law</h2>
          <p className="mb-4">
          These terms and conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.          </p>
          
          <h2 className="font-bold text-2xl mt-6 mb-2">9. Changes to Terms and Conditions</h2>
          <p className="mb-4">
          We reserve the right to modify these terms and conditions at any time without prior notice. By continuing to use this website after such changes are made, you agree to be bound by the revised terms and conditions.          </p>
          
          <br/>
         
          <p>If you have any questions or concerns about these terms and conditions, please contact us at zenyoga@gmail.com.</p>
        </div>
      </div>
    </div>
  );
}

export default Terms;
