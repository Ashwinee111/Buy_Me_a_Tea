const instance = require("../config/razorpay");
const crypto = require("crypto");
const Payment = require("../models/Payment.models")

// <-- ODER CREATE -->
exports.checkout = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
    };

    const order = await instance.orders.create(options);

    return res.status(200).json({
      success: true,
      message: "Your order has been created successfully",
      order,
    });
  } 
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error has occurred while creating your order",
    });
  }
};

// <-- PAYMENT VERIFICATION -->
exports.paymentVerification = async (req, res) => {
  try {
    // console.log(req.body);

    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {

      await Payment.create({razorpay_payment_id, razorpay_order_id, razorpay_signature})

      return res.status(200)
      .json({ success: true, message: "Payment Verified Successful" });
    }
    else{
      return res.status(200)
      .json({ success: false, message: "Payment Verified Failed" });
    }

  } 
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error has occurred while your Payment verification",
    });
  }
};
