import { Download, FileText } from "lucide-react";
import { LuMail } from "react-icons/lu";
import { LuPhoneOutgoing } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { PiWhatsappLogoLight } from "react-icons/pi";
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
        <a
          href="/Olaniyan_Frontend Developer_.pdf"
          // download="Olaniyan_Frontend Developer_.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center gap-2 border border-white/20 rounded-full px-4  text-white hover:bg-white/10 transition cursor-pointer">
            <FileText size={16} />
            Resume
            <Download size={16} />
          </button>
        </a>
        <div className="flex xl:gap-10 gap-5 items-center">
          <a href="mailto:olaniyanoluwajomiloju25@gmail.com">
            <div>
              <LuMail />
            </div>
          </a>
          <a href="tel:+2349159770758" title="+2349159770758">
            <div>
              <LuPhoneOutgoing />
            </div>
          </a>
          <a
            href="https://wa.me/2349061965442"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div title="+2349061965442">
              <PiWhatsappLogoLight />
            </div>
          </a>
          <a
            href="https://x.com/High_tnsion_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <FaXTwitter />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/oluwajomiloju-o-0594762b7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <CiLinkedin />
            </div>
          </a>
        </div>
      </div>
      <div className="pt-10">
        <p className="text-2xl">Want To Work Together?</p>
        <div className="gap-6 flex items-center pt-5">
          <a
            href="https://wa.me/2349061965442"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-white rounded-full py-2 px-8 bg-white text-black cursor-pointer text-sm">
              Get in Toch
            </button>
          </a>
          <div className="border border-white text-white py-2 px-3 rounded-full flex flex-row gap-2 items-center cursor-pointer">
            <span className="">
              <LuPhoneOutgoing />
            </span>
            <button className=" cursor-pointer text-sm">Schedule a Call</button>
          </div>
        </div>
      </div>
    </div>
  );
}
