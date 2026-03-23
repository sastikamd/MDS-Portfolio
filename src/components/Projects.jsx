import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Movie Booking Web Application",
    description: "Full-stack movie booking platform with integrated payment gateway and email notifications.",
    image: "/assets/project1.png",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API", "SendGrid", "JWT"],
    links: {
      live: "https://moviefnsastika.netlify.app/",
      frontend: "https://github.com/sastikamd/movieFN.git",
      backend: "https://github.com/sastikamd/MovieBookingWebBackend.git",
    },
  },
  {
    id: 2,
    title: "Redbus Clone",
    description: "Clone of redBus bus ticketing and hiring platform built with full-stack MERN technologies.",
    image: "/assets/project1.png",
    techStack: ["React", "MongoDB", "Mongoose", "Express", "Tailwind"],
    links: {
      live: "https://redbus-clone-sastika.netlify.app/",
      frontend: "https://github.com/sastikamd/redbusClone-frontend.git",
      backend: "https://github.com/sastikamd/redbusClone-backend.git",
    },
  },
  {
    id: 3,
    title: "Inventory Tracker",
    description: "MERN project to create, read, update and delete product data with MongoDB integration.",
    image: "/assets/project1.png",
    techStack: ["React", "HTML", "MongoDB", "ExpressJS", "NodeJS"],
    links: {
      live: "https://inventorysastika.netlify.app/products",
      frontend: "https://github.com/sastikamd/inventoryFrontend.git",
      backend: "https://github.com/sastikamd/inventoryBackend.git",
    },
  },
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              <p className="text-sm text-[#D4D4D8]">
                {project.techStack.join(" | ")}
              </p>
              <a href={project.links.live} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer">
                <TbExternalLink size={23} />
              </a>
              <div className="text-sm text-[#D4D4D8] flex gap-4 pt-2">
                <a href={project.links.frontend} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Frontend Repo
                </a>
                <a href={project.links.backend} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Backend Repo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
