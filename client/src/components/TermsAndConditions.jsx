import Footer from "./Footer";

function TermsAndConditions() {
  return (
    <div className="w-[100%] md:w-[50%] border rounded border-transparent overflow-hidden m-auto text-primary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Terms and Conditions Policy
        </h1>

        {/* Use of the Website */}
        <h2 className="text-2xl font-bold mb-2">Use of the Website</h2>

        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            You must be at least 16 years old or have reached the age of
            majority in your jurisdiction to use this Website.
          </li>
          <li>
            You agree to use the Website only for lawful purposes and in
            accordance with these Terms and Conditions. You are prohibited from
            using the Website in any way that could damage, disable, overburden,
            or impair the Website or interfere with any other party's use and
            enjoyment of the Website.
          </li>
        </ul>

        {/* Donations and Contributions */}
        <h2 className="text-2xl font-bold mb-2">Donations and Contributions</h2>

        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            Buy Me a Tea provides a platform for users to support creators,
            artists, or individuals by making donations or contributions. By
            making a donation or contribution through the Website, you agree to
            abide by the Refund & Cancellation Policy outlined separately.
          </li>
          <li className="mb-2">
            You agree that you will not use the Website to make any unlawful,
            fraudulent, or unauthorized donations or contributions.
          </li>
        </ul>

        {/* Intellectual Property */}
        <h2 className="text-2xl font-bold mb-2">Intellectual Property</h2>

        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            The Website and its original content, features, and functionality
            are owned by Buy Me a Tea and are protected by international
            copyright, trademark, patent, trade secret, and other intellectual
            property or proprietary rights laws.
          </li>
        </ul>

        {/* Limitation of Liability */}
        <h2 className="text-2xl font-bold mb-2">Limitation of Liability</h2>

        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            In no event shall Buy Me a Tea, nor its directors, employees,
            partners, agents, suppliers, or affiliates, be liable for any
            indirect, incidental, special, consequential, or punitive damages,
            including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses, resulting from your access to or use of
            or inability to access or use the Website.
          </li>
        </ul>

        {/* Changes to Terms and Conditions */}
        <h2 className="text-2xl font-bold mb-2">
          Changes to Terms and Conditions
        </h2>

        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            Buy Me a Tea reserves the right to modify or replace these Terms and
            Conditions at any time without prior notice. Any changes to these
            Terms and Conditions will be effective immediately upon posting on
            this page. Your continued use of the Website after any such changes
            constitutes your acceptance of the new Terms and Conditions.
          </li>
        </ul>

        {/* Contact Us */}
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>

        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            If you have any questions about these Terms and Conditions, please
            contact us at{" "}
            <span className="text-[#3C3FDE]">ashwineek449@gmail.com.</span>.
          </li>
        </ul>

        <p className="mb-4">
          By using the Website, you acknowledge that you have read, understood,
          and agree to be bound by these Terms and Conditions. If you do not
          agree to these Terms and Conditions, you may not access or use the
          Website.
        </p>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
export default TermsAndConditions;
