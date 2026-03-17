import Image from "next/image";
import Name from "../Name/page";
import StarBackground from "../component/StarBackground";
import AboutUs from "../component/AboutUs";
export default function Profile() {
  return (
    <div className="flex flex-col xl:flex-row md:flex-col xl:h-screen bg-black animate-fadeInDown">
      <div className="xl:h-screen md:flex-shrink-0 relative overflow-hidden xl:w-[35%] md:w-full w-full z-0">
        <StarBackground />
        <div className="relative z-10">
          <div className="py-4">
            <div className="relative inline-flex items-center p-[2px] rounded-full overflow-hidden">
              <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0%,white_10%,transparent_20%)]" />

              <button className="rounded-full px-3 py-2 text-white relative bg-black border border-white">
                Available <span className="text-green-600 text-2xl">•</span>
              </button>
            </div>
          </div>
          <div className="py-8 flex justify-center items-center">
            <Image
              src="/image/john.jpg"
              alt="description"
              width={180}
              height={180}
              className="rounded-full border border-white animate-bounce"
            />
          </div>
          <div className="w-full z-10">
            <Name />
          </div>
        </div>
      </div>
      <div className="w-[1px] md:h-auto md:w-[1px] bg-white opacity-20 md:self-stretch" />
      <div className="xl:flex-1 xl:h-screen xl:overflow-y-auto md:pt-5 z-10">
        <AboutUs />
      </div>
    </div>
  );
}
