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
