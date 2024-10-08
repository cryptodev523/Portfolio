"use client";
import { useRouter } from "next/navigation";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
  RiStackOverflowFill,
  RiDiscordFill,
  RiTelegramFill,
} from "react-icons/ri";
import { AiOutlineDownload } from "react-icons/ai";
import mixpanel from "mixpanel-browser";
import { useEffect } from "react";
import { Link } from "react-scroll";
import NextLink from "next/link";
import { ndotFont } from "../fonts";
const { Zoom, Fade } = require("react-reveal");

const socialIcons = {
  linkedin: RiLinkedinBoxFill,
  twitter: RiTwitterXFill,
  github: RiGithubFill,
  stackoverflow: RiStackOverflowFill,
  discord: RiDiscordFill,
  telegram: RiTelegramFill,
};

export const Header = ({
  cvLink,
  socialInfo,
}: {
  cvLink: string;
  socialInfo: {
    type: string;
    url: string;
    trackId: string;
  }[];
}) => {
  useEffect(() => {
    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN as string);
  }, []);
  const { push } = useRouter();
  return (
    <div className="flex flex-col h-full px-4 mb-8">
      <div className="space-y-4 mb-8">
        <Zoom top cascade>
          <h1
            className={`text-5xl font-bold text-slate-300 ${ndotFont.className}`}
          >
            Jordan Jones
          </h1>
        </Zoom>
        <Fade cascade right>
          <h2 className="text-xl text-amber-600">Software Engineer</h2>
        </Fade>
        <p className="text-slate-500">
          I build web & mobile apps with React.js, Next.js, React Native and
          Node.js
        </p>
      </div>
      <nav className="nav hidden lg:block mb-8">
        <ul className="mt-16 w-max">
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="group flex items-center py-3 cursor-pointer"
              onClick={() => mixpanel.track("NAV_CLICK", { section: "about" })}
            >
              <span className="nav-indicator mr-4 h-px transition-all bg-slate-600 w-8 group-hover:bg-slate-200 group-hover:w-16 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                About
              </span>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="group flex items-center py-3 cursor-pointer"
              onClick={() =>
                mixpanel.track("NAV_CLICK", { section: "experience" })
              }
            >
              <span className="nav-indicator mr-4 h-px transition-all bg-slate-600 w-8 group-hover:bg-slate-200 group-hover:w-16 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Experience
              </span>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="group flex items-center py-3 cursor-pointer"
              onClick={() =>
                mixpanel.track("NAV_CLICK", { section: "projects" })
              }
            >
              <span className="nav-indicator mr-4 h-px transition-all bg-slate-600 w-8 group-hover:bg-slate-200 group-hover:w-16 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Projects
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <NextLink
        href={cvLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-fit items-center gap-2 py-2 px-4 bg-blue-800 rounded-md hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/50 transition duration-200"
        onClick={() => {
          mixpanel.track("RESUME_DOWNLOAD");
        }}
      >
        Download Resume
        <AiOutlineDownload size={24} />
      </NextLink>

      <div className="flex-1" />
      <div className="flex gap-3 mt-8">
        {socialInfo
          .filter((social) => !!social.url)
          .map((social) => {
            const Icon = socialIcons[social.type as keyof typeof socialIcons];
            return Icon ? (
              <NextLink
                key={social.type}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  mixpanel.track(social.trackId);
                }}
              >
                <Icon
                  size={28}
                  className="text-slate-500 hover:text-[#f7f7f7] transition duration-500 cursor-pointer"
                />
              </NextLink>
            ) : null;
          })}
      </div>
    </div>
  );
};
