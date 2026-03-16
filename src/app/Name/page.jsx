import { Download, FileText } from "lucide-react";
import { LuMail } from "react-icons/lu";
import { LuPhoneOutgoing } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
export default function Name() {
  return (
    <div className="text-center flex flex-col items-center justify-center px-6 ">
      <div></div>
      <h1 className="mt-2 text-[30px] font-Nunito">
        Olaniyan Oluwajomiloju John
      </h1>
      <p className="py-2 text-[18px]">Frontend Developer</p>
      <p className="text-[18px]">
        Building fast, scalable, and beautiful user-centered applications with
        seamless experiences
      </p>
      <div className="flex gap-6 items-center pt-8">
        <button className="flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 text-white hover:bg-white/10 transition cursor-pointer">
          <FileText size={16} />
          Resume
          <Download size={16} />
        </button>
        <div className="flex gap-10 items-center">
          <div>
            <LuMail />
            <a href=""></a>
          </div>
          <div>
            <LuPhoneOutgoing />
            <a href=""></a>
          </div>
          <div>
            <FaXTwitter />
            <a href=""></a>
          </div>
          <div>
            <CiLinkedin />
            <a href=""></a>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <p className="text-2xl">Want To Work Together?</p>
        <div className="gap-6 flex items-center pt-5">
          <button className="border border-white rounded-full py-2 px-8 bg-white text-black cursor-pointer">
            Get in Toch
          </button>
          <div className="border border-white text-white py-2 px-3 rounded-full flex flex-row gap-2 items-center cursor-pointer">
            <span className="">
              <LuPhoneOutgoing />
            </span>
            <button className=" cursor-pointer ">Schedule a Call</button>
          </div>
        </div>
      </div>
    </div>
  );
}
