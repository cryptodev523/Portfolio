"use client";

import Link from "next/link";
import { formatDate } from "../utils/format";
import { useState } from "react";
import { RiCheckFill } from "react-icons/ri";
import { useHover } from "@uidotdev/usehooks";
import mixpanel from "mixpanel-browser";
import { Element } from "react-scroll";

interface IExperience {
  id: string;
  company: string;
  start_date: string;
  end_date: string;
  location: string;
  role: string;
  link: string;
  info: {
    skills: string[];
    description: string[];
  };
}

interface ExperienceProps {
  data: IExperience[];
}

const skills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "React Native",
  "Redux",
  "Node.js",
  "Tailwind CSS",
  "Styled-Components",
  "SASS",
  "HTML/CSS",
  "Firebase",
  "Heroku",
  "Vercel",
  "Git/GitHub",
];

const learningSkills = [
  "Ruby",
  "Rust",
  "Python",
  "Django",
  "Redis",
  "Stripe",
  "Socket.io",
  "Websocket",
  "WebRTC",
  "Google/AWS",
  "Google Map",
  "Mapbox",
];

export const Experience = ({ data }: ExperienceProps) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Element name="experience">
      <ul className="">
        {data.slice(0, showMore ? 5 : 3).map((item) => (
          <Link key={item.id} href={item?.link ?? ""}>
            <li className="my-4 px-4 py-6 rounded-md border border-transparent hover:border-slate-800/50 hover:bg-slate-500/5 hover:drop-shadow-md transition duration-300">
              <div className="flex justify-between">
                <p className="flex">{item.role + " · " + item.company}</p>
                <p className="text-slate-600 uppercase text-sm font-medium">
                  {formatDate(item.start_date) +
                    " — " +
                    formatDate(item.end_date)}
                </p>
              </div>
              <div className="font-bold text-cyan-500 mb-2">
                {item.location}
              </div>
              <ul className="list-disc list-inside">
                {item.info.description.map((desc) => (
                  <li key={desc} className="font-light text-slate-400">
                    {desc}
                  </li>
                ))}
              </ul>
            </li>
          </Link>
        ))}
      </ul>
      <p
        className="px-4 cursor-pointer underline decoration-transparent underline-offset-4 hover:decoration-sky-500"
        onClick={() => {
          setShowMore(!showMore);
          mixpanel.track("SHOW_MORE_EXPERIENCE");
        }}
      >
        {showMore ? "Show less" : "Show more"}
      </p>
      <SkillBoard title="Languages and Tools:" skills={skills} />
      <SkillBoard title="Currently learning:" skills={learningSkills} />
    </Element>
  );
};

const SkillBoard = ({ title, skills }: { title: string; skills: string[] }) => {
  const [ref, hovering] = useHover();

  return (
    <div
      className="p-4 hover:border-slate-800/50 hover:bg-slate-500/10 hover:drop-shadow-md transition duration-300 my-4 cursor-default"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <h1
        className={`mb-4 ${
          hovering ? "text-sky-600" : "text-white"
        } transition duration-300`}
      >
        {title}
      </h1>
      <ul className="grid grid-cols-3 gap-2 text-slate-400 font-light">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2">
            <RiCheckFill />
            <p>{skill}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
