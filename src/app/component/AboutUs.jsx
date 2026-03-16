import { FaPersonBurst } from "react-icons/fa6";
import { Code } from "lucide-react";
import Image from "next/image";
import Experience from "./Experience";
import Projects from "./Projects";

const AboutUs = () => {
  return (
    <div className="md:px-6 px-4 xl:pt-0  w-full overflow-hidden">
      <div className="flex flex-row gap-4 items-center">
        <FaPersonBurst
          size={45}
          className="text-blue-600 border border-gray-400 bg-gray-400 rounded-lg px-2"
        />
        <h1 className="text-[30px] font-bold">About Me</h1>
      </div>
      <div className="flex flex-wrap gap-3 py-6">
        <p className="border border-white text-white px-3 py-1 rounded-lg">
          Frontend Developer
        </p>
        <p className="border border-white text-white px-3 py-1 rounded-lg">
          Api integration
        </p>
        <p className="border border-white text-white px-3 py-1 rounded-lg">
          Realtime Application
        </p>
      </div>
      <div className="md:text-[20px] text-[16px] ">
        I&apos;m a Frontend Developer who builds web applications from the
        ground up. I work across the entire stack from designing responsive UIs
        with React, Next.js, and Tailwind CSS, to integrating REST APIs and
        bringing ideas to life with clean, efficient code.
      </div>
      <p className="py-10 md:text-[20px] text-[16px]">
        I specialize in crafting fast, beautiful, and user-centered web
        experiences. Whether it&apos;s building responsive interfaces with React
        and Next.js, creating smooth animations and interactions, or ensuring
        pixel-perfect designs with Tailwind CSS, I focus on everything the user
        sees and feels. My projects range from interactive dashboards to dynamic
        single-page applications and seamless, accessible UI components.
      </p>
      <div className="flex items-center gap-4">
        <Code
          size={30}
          className="border border-gray-400 bg-gray-600 rounded-lg px-2 font-black"
        />
        <h1 className="font-bold text-[30px]">Tech Stack</h1>
      </div>
      <div className="overflow-hidden w-full">
        <div className="animate-marque flex gap-12 items-center py-6 w-max">
          <Image
            width={50}
            height={50}
            src="/image/htmllogo.png"
            alt="css-image"
          />
          <Image
            width={50}
            height={50}
            src="/image/css logo.png"
            alt="css-image"
          />
          <Image
            width={50}
            height={50}
            src="/image/tailwind logo.png"
            alt="tailwind-image"
          />
          <Image
            width={50}
            height={50}
            src="/image/jslogo.png"
            alt="css-image"
          />
          <Image
            width={50}
            height={50}
            src="/image/react logo.png"
            alt="react-image"
          />
          <Image
            width={50}
            height={50}
            src="/image/nextjs-original.png"
            alt="next-image"
          />
          <Image
            width={50}
            height={50}
            src="/image/typescript-def.png"
            alt="type-image"
          />
          <Image
            width={50}
            height={50}
            src="/image/git logo.png"
            alt="type-image"
          />
          <Image
            width={50}
            height={50}
            src="/image/githublogo.png"
            alt="git-image"
          />
          <Image
            width={50}
            height={50}
            src="/image/vscode.png"
            alt="git-image"
          />
          <Image
            width={50}
            height={50}
            src="/image/vite.jpg"
            alt="vite-image"
          />
        </div>
      </div>
      <div className="pt-8">
        <Experience />
      </div>
      <div>
        <Projects />
      </div>
    </div>
  );
};

export default AboutUs;
