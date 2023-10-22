import Link from "next/link";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { AiOutlineDownload } from "react-icons/ai";

export const Header = ({ cvLink }: { cvLink: string }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="space-y-4 mb-8">
        <h1 className="text-5xl font-bold">Jordan Jones</h1>
        <h2 className="text-xl">Front-End Engineer</h2>
        <p className="text-slate-500">
          I build web & mobile apps with React.js, Next.js, React Native and
          Node.js
        </p>
      </div>
      <Link href={cvLink}>
        <button className="flex items-center gap-2 py-2 px-4 bg-blue-800 rounded-md hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/50 transition duration-200">
          Download CV
          <AiOutlineDownload size={24} />
        </button>
      </Link>

      <div className="flex-1" />
      <div className="flex gap-3">
        <Link href="https://www.linkedin.com/in/jordan-j-0a8848229">
          <RiLinkedinBoxFill
            size={28}
            className="text-slate-500 hover:text-[#f7f7f7] transition duration-500"
          />
        </Link>
        <Link href="https://twitter.com/jonesbayc">
          <RiTwitterXFill
            size={28}
            className="text-slate-500 hover:text-[#f7f7f7] transition duration-500"
          />
        </Link>
        <Link href="https://github.com/cryptodev523">
          <RiGithubFill
            size={28}
            className="text-slate-500 hover:text-[#f7f7f7] transition duration-500"
          />
        </Link>
      </div>
    </div>
  );
};
