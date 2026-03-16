import { Building2, Briefcase } from "lucide-react";
import { MdCastForEducation } from "react-icons/md";

const Experience = () => {
  return (
    <div className="">
      <h1 className="text-[30px] font-bold">Experience & Education</h1>
      <div className="flex flex-col xl:flex-row justify-between gap-2">
        <div>
          <div>
            <div className="flex gap-4 items-center py-3">
              <Building2 size={30} />
              <h1 className="text-[24px] font-bold">Experience</h1>
            </div>
            <div className="md:px-10 px-2">
              <div className="flex gap-2 items-center ">
                <Briefcase size={30} />
                <h1 className="text-[18px]">Frontend Developer</h1>
              </div>
              <p className="mt-3">
                Freelance and Personal Project {""}
                <span className="text-gray-500">Remote</span>
              </p>
              <p className="flex items-center gap-2 py-2">
                <span>•</span> Developed pixel-perfect UI components from Figma
                designs
              </p>
              <p className="flex items-center gap-2 py-2">
                <span>•</span>
                Built and deployed fully responsive websites from scratch
              </p>
              <p className="flex items-center gap-2">
                <span>•</span>
                Built and shipped personal projects focusing on performance and
                user experience
              </p>
            </div>
          </div>
          <div className="py-10">
            {/* <div className="flex gap-4 items-center py-3">
              <Building2 size={30} />
              <h1 className="text-[24px] font-bold">Experience</h1>
            </div> */}
            <div className="md:px-10 px-2">
              <div className="flex gap-2 items-center ">
                <Briefcase size={30} />
                <h1 className="text-[18px]">Frontend Developer</h1>
              </div>
              <p className="mt-3">
                Cephas Ict Hub . Fulltime . {""}
                <span className="text-gray-500">Intership</span>
              </p>
              <p className="flex items-center gap-2 py-2">
                <span>•</span> Built website software
              </p>
              <p className="flex items-center gap-2 py-2">
                <span>•</span>
                Collaborate with designers to implement responsive and
                pixel-perfect UIs
              </p>
              <p className="flex items-center gap-2">
                <span>•</span>
                Gained hands on experience working in a production level code
                base
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex gap-2 items-center">
            <MdCastForEducation size={30} />
            <h1 className="text-[24px] font-bold">Education</h1>
          </div>
          <div className="">
            <h1>Bachelor of Technology in Computer Engineering</h1>
            <p className="text-base text-gray-400">
              Ladoke Akintola University of Technolohy
            </p>
            {/* <p>2020 - 2025</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
