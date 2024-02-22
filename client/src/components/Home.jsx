import Form from "./Form";
import Profile from "../assets/myProfile.png";
import Tea from "../assets/tea.png";
import Donate from "../assets/donate.gif";
import { TfiLinkedin } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import { RiDiscordLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
import { endPoints } from "../api";

function Home() {
  const { GET_ALLPAYMENT } = endPoints;
  const [paymentDetails, setPaymentDetails] = useState([]);

  const getPaymentDetails = async () => {
    const response = await axios.get( GET_ALLPAYMENT );
    const responseValue = response.data.payments;
    setPaymentDetails(responseValue);
  };

  useEffect(() => {
    getPaymentDetails();
  }, []);

  return (
    <div className="p-2">
      <div className="w-[100%] md:w-[50%] border rounded border-transparent overflow-hidden m-auto">
        {/* Top Banner  */}
        <div className="flex bg-[#07273b] justify-center items-center h-52 ">
          <img
            src={Tea}
            alt="banner"
            className="h-[90px] rotate-6 mt-[-20px]"
          />
          <h3 className="text-[38px] font-secondary font-semibold text-primary">
            Buy me a tea...
          </h3>
        </div>
        {/* Profile  */}
        <div className="text-center">
          <img
            src={Profile}
            alt="profilr_logo"
            className="aspect-square w-[100px] rounded-full object-cover mx-auto mt-[-50px]"
          />
          <h3 className="text-[24px] font-medium text-primary mt-1">
            Ashwinee Kumar Sethi
          </h3>
          <p className="text-[16px] font-medium text-[#a2a8b4] mt-1">
            Software Engineer
          </p>
          <h4 className="text-[17px] font-normal text-primary mt-1 md:w-[50%] m-auto">
            Become proficient web developer through a hands-on project-centered
            approach
          </h4>
        </div>
        <hr className="my-5 h-0.5 border-t-0 bg-[#2A2E34] opacity-100 dark:opacity-50" />
        {/* About &  Contribute */}
        <div className="flex flex-col 2xl:flex-row gap-6">
          {/* Left side  */}
          <div className="w-full 2xl:w-[50%] flex flex-col gap-y-3">
            <div className="p-3 border rounded-md border-[#65696F]">
              <p className="text-[23px] font-medium text-primary">About</p>
              <p className="text-[17px] font-normal text-primary mt-1">
                Hey 👋 there! if you like my work or my project. you can now
                show your support - thank you so much!
              </p>
              <p className="text-[17px] font-normal text-primary mt-3">
                <span className="text-[20px] font-semibold mr-1">@</span>
                ashwineek449@gmail.com
              </p>
              <div className="flex gap-x-3 mt-4">
                <a
                  to="https://www.linkedin.com/in/ashwinee111/"
                  className="text-[24px] text-primary"
                >
                  <TfiLinkedin />
                </a>
                <a
                  to="https://github.com/Ashwinee111"
                  className="text-[24px] text-primary"
                >
                  <PiGithubLogoFill />
                </a>
                <a
                  to="https://twitter.com/Ashwinee_111"
                  className="text-[24px] text-primary"
                >
                  <FaXTwitter />
                </a>
                <a
                  to="https://discord.com/"
                  className="text-[24px] text-primary"
                >
                  <RiDiscordLine />
                </a>
              </div>
            </div>
            <div className="p-3 border rounded-md border-[#65696F]">
              <p className="text-[23px] font-medium text-primary">
                Recent supporters
              </p>
              {/* Supporters User  */}
              {paymentDetails.length > 0 ? (
                paymentDetails.map((paymentDetail) => (
                  <div
                    className="flex rounded-xl gap-3 mt-5 bg-[#1D2025] p-2"
                    key={paymentDetail._id}
                  >
                    <div className="grid place-items-center">
                      <img
                        className="aspect-square w-[50px] rounded-full object-cover"
                        src={Donate}
                        alt="user_image"
                      />
                    </div>
                    <div className="text-center md:text-left w-full">
                      <div>
                        <div className="text-[16px] font-medium text-primary">
                          {paymentDetail.name}{" "}
                          <span>₹{paymentDetail.amount}</span>
                        </div>
                        <div className="text-[15px] font-normal text-[#9CA3AF]">
                          {paymentDetail.message}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-[16px] font-medium text-[#9CA3AF] mt-2">
                  No one supported yet!
                </div>
              )}
            </div>
          </div>
          {/* Right side  */}
          <div className="w-full 2xl:w-[50%]">
            <Form />
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
export default Home;
