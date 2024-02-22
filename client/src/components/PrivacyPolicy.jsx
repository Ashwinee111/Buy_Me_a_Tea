import Footer from "./Footer"

function PrivacyPolicy() {
  return (
      <div className="w-[100%] md:w-[50%] border rounded border-transparent overflow-hidden m-auto text-primary">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Privacy Policy
          </h1>

          <p className="mb-4">
            Thank you for using Buy Me a Tea, which operates similarly to
            platforms like Buy Me a Coffee. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit our website. Please read this Privacy Policy carefully. If you
            do not agree with the terms of this privacy policy, please do not
            access the site.
          </p>

          {/* Information We Collect */}
          <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>

          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">
              <span className="font-semibold">Personal Information:</span> We do
              not collect personally identifiable information about you unless
              you voluntarily submit it to us. The types of personal information
              we may collect include your name and email address, which you
              provide voluntarily when you sign up for our services or contact
              us.
            </li>
            <li>
              <span className="font-semibold">Payment Information:</span> When
              you make a payment through our website, you may need to provide
              payment information such as credit card details. However, we do
              not store your payment information on our servers. We utilize
              Razorpay, a third-party payment processor, to handle payment
              transactions securely. Please review Razorpay's privacy policy for
              information on how they handle your payment information.
            </li>
          </ul>

          {/* How We Use your Information */}
          <h2 className="text-2xl font-bold mb-2">
            How We Use your Information
          </h2>

          <p className="mb-4">
            We may use the information we collect from you to:
          </p>

          <ul className="list-disc list-inside mb-4">
            <li>Provide, maintain, and improve our services;</li>
            <li>
              Respond to your inquiries and send you administrative
              communications;
            </li>
            <li>Personalize and tailor your experience on our website;</li>
            <li>
              Process transactions and send you related information, including
              confirmations and invoices;
            </li>
            <li>
              Communicate with you about promotions, upcoming events, and other
              news about our services.
            </li>
          </ul>

          {/* How We Disclose Your Information */}
          <h2 className="text-2xl font-bold mb-2">
            How We Disclose Your Information
          </h2>

          <ul className="list-disc list-inside mb-4">
            <li>
              We may disclose your information to third-party service providers
              who assist us in operating our website and providing services to
              you. These third-party service providers are obligated to maintain
              the confidentiality of your information.
            </li>
            <li>
              We may also disclose your information if required by law, such as
              to comply with a subpoena or similar legal process.
            </li>
          </ul>

          {/* Third-Party Links */}
          <h2 className="text-2xl font-bold mb-2">Third-Party Links</h2>

          <ul className="list-disc list-inside mb-4">
            <li>
              Our website may contain links to third-party websites. We have no
              control over the privacy practices or the content of any of our
              business partners, advertisers, sponsors, or other websites to
              which we provide links. As such, we are not responsible for the
              content or the privacy policies of those third-party websites. You
              should check the applicable third-party privacy policy and terms
              of use when visiting any other websites.
            </li>
          </ul>

          {/* Security */}
          <h2 className="text-2xl font-bold mb-2">Security</h2>

          <ul className="list-disc list-inside mb-4">
            <li>
              We are committed to ensuring that your information is secure. We
              implement reasonable measures and follow industry best practices
              to protect your personal information from unauthorized access,
              disclosure, alteration, or destruction.
            </li>
          </ul>

          {/* Children's Privacy */}
          <h2 className="text-2xl font-bold mb-2">Children's Privacy</h2>

          <ul className="list-disc list-inside mb-4">
            <li>
              Our services are not directed to individuals under the age of 13,
              and we do not knowingly collect personal information from children
              under 13. If you are a parent or guardian and believe that your
              child has provided us with personal information, please contact
              us, and we will take steps to delete such information from our
              systems.
            </li>
          </ul>

          {/* Changes to This Privacy Policy */}
          <h2 className="text-2xl font-bold mb-2">
            Changes to This Privacy Policy
          </h2>

          <ul className="list-disc list-inside mb-4">
            <li>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page. You are advised to review this Privacy Policy
              periodically for any changes.
            </li>
          </ul>

          {/* Contact Us */}
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>

          <ul className="list-disc list-inside mb-4">
            <li>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at <span className="text-[#3C3FDE]">ashwineek449@gmail.com.</span>
            </li>
          </ul>

          <p className="mb-4">
            By using our website, you consent to our Privacy Policy and agree to
            its terms.
          </p>

          {/* Footer */}
          <Footer />
        </div>
      </div>
  );
}
export default PrivacyPolicy;
