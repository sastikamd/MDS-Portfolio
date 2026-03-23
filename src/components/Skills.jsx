import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiAngular,
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export default function Skills() {
  const [showMore, setShowMore] = useState(false);

  const logoSkills = [
    { name: "Angular", icon: <SiAngular size={34} /> },
    { name: "React.js", icon: <SiReact size={34} /> },
    { name: "JavaScript", icon: <SiJavascript size={34} /> },
    { name: "TypeScript", icon: <SiTypescript size={34} /> },
    { name: "HTML5", icon: <SiHtml5 size={34} /> },
    { name: "CSS3", icon: <SiCss3 size={34} /> },
    { name: "Bootstrap", icon: <SiBootstrap size={34} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={34} /> },
    { name: "Node.js", icon: <SiNodedotjs size={34} /> },
    { name: "Express.js", icon: <SiExpress size={34} /> },
    { name: "MongoDB", icon: <SiMongodb size={34} /> },
    { name: "MySQL", icon: <SiMysql size={34} /> },
    { name: "Git", icon: <SiGit size={34} /> },
    { name: "GitHub", icon: <SiGithub size={34} /> },
    { name: "Azure DevOps", icon: <VscAzure size={34} /> },
  ];

  const skillGroups = [
    {
      title: "Frontend Technologies",
      items: [
        "Angular (v2+)",
        "React.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "RxJS",
        "NgRx",
        "Bootstrap",
        "Tailwind CSS",
        "PrimeNG",
        "Flexbox",
        "Responsive Design",
        "HighCharts",
        "AmCharts",
        "Apache ECharts",
      ],
    },
    {
      title: "Backend Technologies",
      items: [
        "Node.js",
        "Express.js",
        "RESTful API Development",
        "Middleware",
        "Authentication & Authorization (JWT)",
        "API Integration",
      ],
    },
    {
      title: "Database",
      items: [
        "MongoDB",
        "Mongoose",
        "MySQL",
        "Database Schema Design",
        "Query Optimization",
      ],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "Azure DevOps", "Azure CI/CD", "Agile", "Scrum"],
    },
  ];

  const experiences = [
    {
      id: 1,
      company: "Accenture",
      role: "Senior Full-Stack Developer",
      period: "Aug 2024 - Present",
      location: "Bangalore, India",
      highlights: [
        "Developed and maintained React & Node.js applications for dynamic user experiences.",
        "Designed RESTful APIs with Express.js for scalable backend services.",
        "Integrated MongoDB with Mongoose for schema design and data validation.",
        "Led code reviews and architecture standards, reducing QA code issues by 30%.",
      ],
    },
    {
      id: 2,
      company: "Accenture",
      role: "Full-Stack Developer",
      period: "Jul 2022 - Aug 2024",
      location: "Bangalore, India",
      highlights: [
        "Led an Angular-based Capital Project Management System for a major client.",
        "Built features using Angular, Bootstrap, TypeScript, RxJS, and NgRx.",
        "Automated Azure CI/CD pipelines, reducing deployment time by 30%.",
        "Improved load time by 20% using lazy loading and code splitting.",
      ],
    },
  ];

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {!showMore ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-7 lg:mt-16">
            {logoSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-32 lg:h-36 flex flex-col items-center justify-center gap-3"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.03 }}
                viewport={{ once: true }}
              >
                {skill.icon}
                <p className="text-sm font-semibold text-center">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="mt-7 lg:mt-16"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {skillGroups.map((group) => (
                <div key={group.title} className="border-2 border-black rounded-xl p-5">
                  <h3 className="text-lg lg:text-xl font-extrabold mb-4">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="border border-black px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
          </motion.div>
        )}

        <div className="mt-8 lg:mt-10">
          <button
            type="button"
            onClick={() => setShowMore((prev) => !prev)}
            className="bg-black text-white px-4 py-2 rounded font-medium"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>

      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-2 text-sm font-medium">{exp.location}</p>
              <ul className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light list-disc pl-5 space-y-1">
                {exp.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
