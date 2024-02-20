const instance = require("../config/razorpay");
const crypto = require("crypto");
const Payment = require("../models/Payment.models");

// <-- ODER CREATE -->
exports.checkout = async (req, res) => {
  try {
    // Extract necessary data from request body
    const { name, email, amount, message } = req.body;

    // Set options for creating the order with Razorpay
    const options = {
      amount: Number(amount * 100),
      currency: "INR",
    };

    // Create an order with Razorpay API
    const order = await instance.orders.create(options);

    // Save payment details including order ID to the database
    await Payment.create({
      name,
      email,
      amount,
      message,
      razorpay_order_id: order.id,
    });

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
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      // If signature matches, update the payment details in the database
      const updatedPayment = await Payment.findOneAndUpdate(
        { razorpay_order_id: razorpay_order_id },
        { razorpay_payment_id, razorpay_signature },
        { new: true } // { new: true } Return the updated document
      );

      if (updatedPayment) {
        // If the payment was updated successfully, redirect to the home page
        return res.redirect("http://localhost:5173/");
      } 
      else {
        // If payment document was not found, return an error
        return res.status(404).json({ success: false, message: "Payment not found" });
      }
    } 
    else {
      // If signature doesn't match, return payment verification failure
      return res.status(200).json({ success: false, message: "Payment Verification Failed" });
    }
  } 
  catch (error) {
    // If any error occurs during payment verification or database update, return 500 status
    return res.status(500).json({
      success: false,
      message: "An error occurred during payment verification",
      error: error.message
    });
  }
};

// <-- GET ALL PAYMENT  -->
exports.getAllPayments = async (req, res) =>{
  try {
    // Find all payments in the database
    const payments = await Payment.find();

    // If payments are found, send them as a response
    if (payments) {
      return res.status(200).json({
        success: true,
        message: "Payments found successfully",
        payments: payments
      });
    } 
    else {
      // If no payments are found, return an appropriate message
      return res.status(404).json({
        success: false,
        message: "No payments found"
      });
    }
  } 
  catch (error) {
    // If any error occurs during the process, return a 500 status with the error message
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching payments",
      error: error.message
    });
  }
}
