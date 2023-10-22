"use client";
import { useRouter } from "next/navigation";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { AiOutlineDownload } from "react-icons/ai";
import mixpanel from "mixpanel-browser";
import { useEffect } from "react";
import { Link } from "react-scroll";

export const Header = ({ cvLink }: { cvLink: string }) => {
  useEffect(() => {
    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN as string);
  }, []);
  const { push } = useRouter();
  return (
    <div className="flex flex-col h-full px-4 mb-8">
      <div className="space-y-4 mb-8">
        <h1 className="text-5xl font-bold">Jordan Jones</h1>
        <h2 className="text-xl">Front-End Engineer</h2>
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
      <button
        className="flex w-fit items-center gap-2 py-2 px-4 bg-blue-800 rounded-md hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/50 transition duration-200"
        onClick={() => {
          mixpanel.track("RESUME_DOWNLOAD");
          push(cvLink);
        }}
      >
        Download CV
        <AiOutlineDownload size={24} />
      </button>

      <div className="flex-1" />
      <div className="flex gap-3 mt-8">
        <RiLinkedinBoxFill
          size={28}
          className="text-slate-500 hover:text-[#f7f7f7] transition duration-500 cursor-pointer"
          onClick={() => {
            mixpanel.track("LINKEDIN_CLICK");
            push("https://www.linkedin.com/in/jordan-j-0a8848229");
          }}
        />
        <RiTwitterXFill
          size={28}
          className="text-slate-500 hover:text-[#f7f7f7] transition duration-500 cursor-pointer"
          onClick={() => {
            mixpanel.track("TWITTER_CLICK");
            push("https://twitter.com/jonesbayc");
          }}
        />
        <RiGithubFill
          size={28}
          className="text-slate-500 hover:text-[#f7f7f7] transition duration-500 cursor-pointer"
          onClick={() => {
            mixpanel.track("GITHUB_CLICK");
            push("https://github.com/cryptodev523");
          }}
        />
      </div>
    </div>
  );
};
