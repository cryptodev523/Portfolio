"use client";

import { AiOutlinePhone } from "react-icons/ai";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { BiMapPin } from "react-icons/bi";

export const Contact = () => {
  const phoneNumber = "+1-972-994-6939";
  const emailAddress = "contact@jordans.dev";
  const address = "Rowlett, TX, USA";

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="p-4 space-y-8">
      <div
        className="flex gap-4 items-center cursor-pointer hover:text-sky-500 transition duration-300"
        onClick={handlePhoneClick}
      >
        <AiOutlinePhone color={"#3d405b"} size={40} /> {phoneNumber}
      </div>
      <div
        className="flex gap-4 items-center cursor-pointer hover:text-sky-500 transition duration-300"
        onClick={handleEmailClick}
      >
        <FaEnvelope color={"#3d405b"} size={40} /> {emailAddress}
      </div>

      <div className="flex gap-4 items-center">
        <BiMapPin color={"#3d405b"} size={40} />
        {address}
      </div>
    </div>
  );
};
