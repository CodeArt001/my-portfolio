"use client";
import Image from "next/image";
import { FolderGit2 } from "lucide-react";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const portolio = [
    {
      id: 1,
      Title: "Rubies-Technology",
      description: "A Tech School Foundation Website",
      Link: "https://rubiestechfoundation.vercel.app/",
      image: "/image/rubies.png",
    },

    {
      id: 2,
      Title: "Boltin",
      description: "A Device Security Website Software",
      Link: "https://boltin-idgf.vercel.app/",
      image: "/image/Boltin.png",
    },
    {
      id: 3,
      Title: "Boltin Admin",
      description: "Boltin Admin Device Security Website Software",
      Link: "https://boltin-admin.vercel.app/login",
      image: "/image/Admin.png",
    },
    {
      id: 4,
      Title: "Panto",
      description: "Interior Website",
      Link: "https://panta-interior.vercel.app/",
      image: "/image/panto.png",
    },
    {
      id: 5,
      Title: "Appointment",
      description: "An Appointment Booking Application",
      Link: "https://appointment-wh8y.vercel.app/",
      image: "/image/appointment.png",
    },
  ];
  return (
    <div>
      <div className="flex flex-row gap-4 items-center mt-4">
        <FolderGit2 size={30} />
        <h1 className="text-[24px] font-bold">Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 mt-8 ">
        {portolio.map((items, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 border border-gray-400 bg-gray-900 py-2 px-4 rounded-lg"
          >
            <div>
              <Image
                src={items.image}
                alt={items.Title}
                width={1200}
                height={800}
                className="w-full h-[300px] object-cover object-top rounded-lg"
                onError={(e) => console.log("Image failed:", items.image)}
              />
              <h1 className="pt-3">{items.Title}</h1>
              <div className="flex  justify-between items-center ">
                <p className="py-1">{items.description}</p>
                <a
                  href={items.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={items.Link}
                >
                  {" "}
                  <ExternalLink
                    size={40}
                    className="hover:bg-gray-700 hover:rounded-lg px-2 cursor-pointer"
                  />
                </a>
              </div>
            </div>
            <div>
              <a
                href={items.Link}
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
