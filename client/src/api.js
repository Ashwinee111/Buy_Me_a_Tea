const BASE_URL = import.meta.env.VITE_API_URL;

export const endPoints = {
    CHECKOUT: BASE_URL + "/payment/checkout",
    PAYMENT_VERIFICATION: BASE_URL + "/payment/paymentverification",
    GET_ALLPAYMENT: BASE_URL + "/payment/getAllPayments",
};
