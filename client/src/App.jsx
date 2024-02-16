const KEY = import.meta.env.VITE_RAZORPAY_KEY_ID
import { useState } from "react";
import axios from "axios";

function App() {
  const [amount, setAmount] = useState();

  function handelChange(e) {
    setAmount(e.target.value);
  }

  const handelSubmit = async () => {
    let data;
    try {
      const response = await axios.post("http://localhost:8000/api/v1/payment/checkout",{ amount });
      data = response.data.order;
    } 
    catch (error) {
      console.error("Error occurred while submitting:", error);
    }

      let options = {
        "key": KEY,
        "amount": data.amount,
        "currency": "INR",
        "name": "Buy me a tea",
        "description": "Test Transaction",
        "image": "https://static.vecteezy.com/system/resources/previews/005/171/120/non_2x/coffee-cup-with-coffee-beans-illustration-free-vector.jpg",
        "order_id": data.id,
        "callback_url": "http://localhost:8000/api/v1/payment/paymentverification",
        "prefill": {
            "name": "Gaurav Kumar", //your customer's name
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000" //Provide the customer's phone number for better conversion rates
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "red"
        }
    };
    const razor = new window.Razorpay(options)
    razor.open()
  };

  return (
    <div>
      <input type="text" onChange={handelChange} /> <br />
      <button onClick={handelSubmit}>Get Started</button>
    </div>
  );
}
export default App;
