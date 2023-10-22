"use client";

import mixpanel from "mixpanel-browser";
import Link from "next/link";
import { useState } from "react";

interface IProject {
  id: string;
  title: string;
  description: string;
  link: string;
  sourcecode: string;
  info: {
    skills: string[];
  };
}

interface ProjectProps {
  data: IProject[];
}

export const Project = ({ data }: ProjectProps) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <ul className="">
        {data.slice(0, showMore ? 10 : 3).map((item) => (
          <Link key={item.id} href={item.link}>
            <li className="px-4 py-6 space-y-8 my-8 rounded-md border border-transparent hover:border-slate-800/50 hover:bg-slate-500/5 hover:drop-shadow-md transition duration-300">
              <h1 className="text-gray-300">{item.title}</h1>
              <p className="text-sm text-slate-500">{item.description}</p>
              <SkillTags skills={item.info.skills} />
            </li>
          </Link>
        ))}
      </ul>
      <p
        className="px-4 cursor-pointer underline decoration-transparent underline-offset-4 hover:decoration-sky-500"
        onClick={() => {
          setShowMore(!showMore);
          mixpanel.track("SHOW_MORE_PROJECTS");
        }}
      >
        {showMore ? "Show less" : "Show more"}
      </p>
    </>
  );
};

const SkillTags = ({ skills }: { skills: string[] }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <li
          key={skill}
          className="px-2 py-1 bg-teal-400/10 rounded-full text-teal-300 text-sm"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
};
