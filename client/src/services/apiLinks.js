const BASE_URL = import.meta.env.VITE_API_URL 

export const paymentUrl = {
    CHECKOUT_API : BASE_URL + "/payment/checkout",
    PAYMENTVERIFICATION_API : BASE_URL + "/payment/paymentverification"
}