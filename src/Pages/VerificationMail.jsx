import React from "react";
import gmailIcon from '../images/gmail-icon.png';
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const VerificationMail = ({ email }) => {
  return (
    <>
    <Navbar />
      <div className="w-full min-h-screen flex justify-center items-center ">
        <div className="max-w-md mx-auto p-6 bg-white  rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-5">Please verify your email...</h2>
            <img src={gmailIcon} alt="Gmail Icon" className="w-16 mx-auto mb-4" />
            <p className="text-gray-600">Please verify your email address. We've sent a confirmation email to:</p>
            <p className="text-black font-bold mb-4 mt-2">kumar.rahul17102000@gmail.com</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-8">Click the confirmation link in that email to begin using Dribbble.</p>
            <p className="text-gray-600">Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <span className="custom-text-color">resend the confirmation email.</span></p>

            <p className="text-gray-600 mt-8">Wrong email address? <a href="#" className="custom-text-color">Change it.</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VerificationMail;
