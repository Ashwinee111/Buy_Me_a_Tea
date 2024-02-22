import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date();

  return (
    <div>
      <hr className="my-5 h-0.5 border-t-0 bg-[#2A2E34] opacity-100 dark:opacity-50" />
      <footer>
        <div className="text-center text-[17px] font-medium text-primary">
          &#169; {currentYear.getFullYear()} Ashwinee
        </div>
        <div className="flex gap-5 mt-2 justify-center flex-wrap">
          <Link to="/" className="text-[16px] font-medium text-[#a2a8b4]">
            Home
          </Link>
          <Link
            to="/privacypolicy"
            className="text-[16px] font-medium text-[#a2a8b4]"
          >
            Privacy Policy
          </Link>
          <Link
            to="/termsandconditions"
            className="text-[16px] font-medium text-[#a2a8b4]"
          >
            Terms and Conditions
          </Link>
          <Link
            to="/refundpolicy"
            className="text-[16px] font-medium text-[#a2a8b4]"
          >
            Refund & Cancellation Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
