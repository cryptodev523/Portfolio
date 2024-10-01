import { Header } from "./components/header";
import { About } from "./components/about";
import { Experience } from "./components/experience";
import { getCVInfo, getCareerHistory, getProjects } from "./utils/data";
import { Contact } from "./components/contact";
import { Project } from "./components/project";
import { CursorEffect } from "./components/cursor";

export const revalidate = 60 * 60;

export default async function Home() {
  const [careerHistory, projects, cvInfo] = await Promise.all([
    getCareerHistory(),
    getProjects(),
    getCVInfo(),
  ]);

  return (
    <div className="bg-[#2d2f5a]/50 relative">
      <CursorEffect />
      <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:py-20 lg:py-0 ">
        <div className="lg:flex">
          <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:py-24">
            <Header
              cvLink={cvInfo[0].info.cv_link}
              socialInfo={cvInfo[0].info.social_info}
            />
          </div>
          <div className="space-y-16 lg:w-1/2 lg:py-24">
            <About
              email={cvInfo[0].info.contact.email}
              bio={cvInfo[0].info.bio}
            />
            <Experience data={careerHistory} />
            <Project data={projects} />
            <Contact data={cvInfo[0].info.contact} />
          </div>
        </div>
      </main>
    </div>
  );
}
