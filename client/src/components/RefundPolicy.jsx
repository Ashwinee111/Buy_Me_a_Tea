import Footer from "./Footer";

function RefundPolicy() {
  return (
    <div className="w-[100%] md:w-[50%] border rounded border-transparent overflow-hidden m-auto text-primary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Refund & Cancellation Policy
        </h1>

        <p className="mb-4 text-[17px]">
          Once a donation or contribution is made through Buy Me a Tea, it
          cannot be canceled or reversed. Users should carefully consider their
          decision to donate before completing a transaction.
        </p>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
export default RefundPolicy;
