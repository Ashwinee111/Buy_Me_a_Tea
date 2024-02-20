const express = require("express");
const router = express.Router();

const { checkout, paymentVerification, getAllPayments  } = require("../controllers/Payment.controllers");

router.post("/checkout", checkout);
router.post("/paymentverification", paymentVerification);
router.get("/getAllPayments", getAllPayments);

module.exports = router;
