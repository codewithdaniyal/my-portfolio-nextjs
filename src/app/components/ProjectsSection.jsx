// projectssection.jsx

"use client"

// ProjectsSection.jsx
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    Title: "Html Css Based Business Website",
    Description: "A responsive and visually appealing website for a local business.",
    Image: "./images/projects/Company-Portfolio.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 2,
    Title: "Portfolio Website",
    Description: "A portfolio website that displays my web development projects and skills in a simple and attractive way.",
    Image: "./images/projects/Screenshot_8-11-2024_94731_localhost.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 3,
    Title: "Ecommerce Application",
    Description: "A responsive and visually appealing website for a local business.",
    Image: "./images/projects/Company-Portfolio",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  }
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };

    return (
      <section id="projects">
        <h2 className="text-4xl font-bold text-center text-white mt-4 mb-8 md:mb-12">My Projects</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
          <ProjectTag onClick={() => handleTagChange("All")} name="All" isSelected={tag === "All"} />
          <ProjectTag onClick={() => handleTagChange("Web")} name="Web" isSelected={tag === "Web"} />
          <ProjectTag onClick={() => handleTagChange("Mobile")} name="Mobile" isSelected={tag === "Mobile"} />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                title={project.Title}
                description={project.Description}
                imgUrl={project.Image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    );
};

export default ProjectsSection;
