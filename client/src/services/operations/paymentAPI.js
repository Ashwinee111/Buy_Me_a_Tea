import { apiConnector } from "../apiConnector";
import { paymentUrl } from "../apiLinks";

const { CHECKOUT_API, PAYMENTVERIFICATION_API } = paymentUrl;


export function checkout(amount) {
    return async () => {
        try {
            const response = await apiConnector("POST", CHECKOUT_API, {amount})
            console.log(response);

            if (!response.data.success) {
                throw new Error(response.data.message);
            }
        } 
        catch (error) {
            console.log(error);
        }
    }
}