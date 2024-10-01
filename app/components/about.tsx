"use client";
import { Element } from "react-scroll";
import mixpanel from "mixpanel-browser";

export const About = ({
  email,
  bio,
}: {
  email: string;
  bio: {
    intro: string;
    experience: string;
    values: string;
    closing: string;
  };
}) => {
  const handleEmailClick = () => {
    mixpanel.track("EMAIL_CLICK");
    window.location.href = `mailto:${email}`;
  };

  return (
    <Element name="about">
      <div className="px-4">
        <p className="whitespace-pre-line text-slate-500">
          {`
          ${bio.intro}

          ${bio.experience}

          ${bio.values}

          ${bio.closing}`}
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
