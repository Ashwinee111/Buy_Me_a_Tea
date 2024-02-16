const express = require("express");
const router = express.Router();

const { checkout, paymentVerification } = require("../controllers/Payment.controllers");

router.post("/checkout", checkout);
router.post("/paymentverification", paymentVerification);

module.exports = router;
