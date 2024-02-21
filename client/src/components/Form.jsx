const KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function Form() {
  const [amount, setAmount] = useState(1);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitForm = async (value) => {
    setAmount(parseInt(value.amount));
    const { name, email, message } = value;

    let responseData;
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/payment/checkout",{ amount, name, email, message}
      );
      responseData = response.data.order;
      // console.log(responseData);
    } 
    catch (error) {
      console.error("An error occurred while calling the CHECKOUT API:", error);
    }

    let options = {
      key: KEY,
      amount: responseData.amount,
      currency: "INR",
      name: "Buy me a tea",
      description: "Test Transaction",
      image: "https://res.cloudinary.com/dd8zpyf5j/image/upload/v1708490224/peluwamrcmpjwlvjqcpt.jpg",
      order_id: responseData.id,
      callback_url: "http://localhost:8000/api/v1/payment/paymentverification",
      prefill: {
        name: `${name}`, //Customer's name
        email: `${email}`,
        contact: "", //Customer's phone number
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#07273B",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  const handleIncrement = () => {
    setAmount(amount + 1);
  };

  const handleDecrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <>
      <div className="p-3 border rounded-md border-[#65696F] bg-[#181C22]">
        <h3 className="text-[23px] font-medium text-primary">
          Show your love to Ashwinee
        </h3>
        <hr className="my-5 h-0.5 border-t-0 bg-[#2A2E34] opacity-100 dark:opacity-50" />
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col gap-4"
        >
          {/* Amount  */}
          <div className="flex flex-col gap-y-3 md:flex-row justify-between items-center">
            <div className="text-[17px] font-medium text-primary">
              <span>❤️</span> ₹1 each
            </div>
            <div>
              <button
                type="button"
                onClick={handleDecrement}
                className="bg-[#07273b] p-3 rounded-full w-[50px] h-[50px] text-primary text-[15px] font-bold mr-2"
              >
                -
              </button>
              <label htmlFor="amount"></label>
              <input
                type="number"
                name="amount"
                id="amount"
                value={amount}
                {...register("amount", { required: true })}
                className="w-[70px] py-3 px-2 border rounded-md border-[#65696F] bg-transparent text-primary text-center"
              />
              {errors.amount && <span className="text-rose-600">Enter</span>}
              <button
                type="button"
                onClick={handleIncrement}
                className="bg-[#07273b] p-3 rounded-full w-[50px] h-[50px] text-primary text-[15px] font-bold ml-2"
              >
                +
              </button>
            </div>
          </div>
          {/* Name  */}
          <div>
            <label htmlFor="name"></label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name*"
              {...register("name", { required: true })}
              className="w-full border rounded-md border-[#65696F] bg-transparent text-primary py-2 px-3 outline-none"
            />
            {errors.name && (
              <span className="text-rose-600">Enter Your Name</span>
            )}
          </div>
          {/* Email  */}
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email*"
              {...register("email", { required: true })}
              className="w-full border rounded-md border-[#65696F] bg-transparent text-primary py-2 px-3 outline-none"
            />
            {errors.email && (
              <span className="text-rose-600">Enter Your Email</span>
            )}
          </div>
          {/* Message  */}
          <div>
            <textarea
              name="message"
              id="message"
              cols="40"
              rows="4"
              placeholder="Message*"
              {...register("message", { required: true })}
              className="w-full border rounded-md border-[#65696F] bg-transparent text-primary py-2 px-3 outline-none resize-none"
            />
            {errors.message && (
              <span className="text-rose-600">Enter Message</span>
            )}
          </div>
          <button className="bg-[#A0C9FF] rounded-md py-2 font-medium text-[#292929]">
            Contribute ₹{amount}
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
