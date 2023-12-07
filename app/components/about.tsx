"use client";
import { Element } from "react-scroll";
import mixpanel from "mixpanel-browser";
import { email } from "../utils/config";

export const About = () => {
  const handleEmailClick = () => {
    mixpanel.track("EMAIL_CLICK");
    window.location.href = `mailto:${email}`;
  };

  return (
    <Element name="about">
      <div className="px-4">
        <p className="whitespace-pre-line text-slate-500">
          {`
        Hi there! 🌞 I'm Jordan, a Software Engineer based in Rowlett, TX.
        
        I've been building web & mobile apps since 2013. I started my career as a software engineer intern at First Data Corporation. I originally focused on building web apps with PHP, but I've since moved on to React.js, Next.js, React Native and Node.js. 
        With the booming market for blockchain technology, I've been working in web3 industry since 2020. 
        
        As a Software Engineer, I value professionalism, reliability, and timely delivery. I am committed to providing exceptional service to my clients and building long-term relationships based on trust and mutual success. With a strong commitment to continuous learning and staying updated with industry trends, I strive to deliver innovative solutions that drive tangible results.
        
        If you're interested in working together, please reach out to me on`}{" "}
          <span
            className="cursor-pointer text-slate-200 hover:text-sky-500 transition duration-300"
            onClick={handleEmailClick}
          >
            {email}
          </span>
          .
        </p>
      </div>
    </Element>
  );
};
