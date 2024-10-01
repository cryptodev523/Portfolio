"use client";

import { AiOutlinePhone } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { BiMapPin } from "react-icons/bi";
import mixpanel from "mixpanel-browser";

export const Contact = ({
  data,
}: {
  data: {
    phone: string;
    address: string;
    email: string;
  };
}) => {
  const handlePhoneClick = () => {
    mixpanel.track("PHONE_CLICK");
    window.location.href = `tel:${data.phone}`;
  };

  const handleEmailClick = () => {
    mixpanel.track("EMAIL_CLICK");
    window.location.href = `mailto:${data.email}`;
  };

  return (
    <div className="p-4 space-y-8">
      <div
        className="flex gap-4 items-center cursor-pointer hover:text-sky-500 transition duration-300"
        onClick={handlePhoneClick}
      >
        <AiOutlinePhone color={"#3d405b"} size={40} /> {data.phone}
      </div>
      <div
        className="flex gap-4 items-center cursor-pointer hover:text-sky-500 transition duration-300"
        onClick={handleEmailClick}
      >
        <FaEnvelope color={"#3d405b"} size={40} /> {data.email}
      </div>

      <div className="flex gap-4 items-center">
        <BiMapPin color={"#3d405b"} size={40} />
        {data.address}
      </div>
    </div>
  );
};
