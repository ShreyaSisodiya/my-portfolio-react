"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website ",
        description: "Personal portfolio made with React and Nextjs",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "New York  Motor Collisions",
        description: "Made data handling smoother and faster by figuring out the best way to organize the data and speeding up the process of loading it. Used SQL, Alteryx and made cool dashboards using Power BI and Tableau.",
        image: "/images/projects/2.png",
        tag: ["All", "Data"],
        gitUrl: "https://github.com/Jagruti1906/New_York_Collisions?tab=readme-ov-file",
        previewUrl: "https://github.com/Jagruti1906/New_York_Collisions?tab=readme-ov-file",
    },
    {
        id: 3,
        title: "Aracade Mania",
        description: "Developed a virtual arcade, offering 11 classics like Minesweeper & TicTacToe, with personal profiles & leaderboards. Made using MERN stack.",
        image: "/images/projects/4.webp",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Medical Plan RESTful Application",
        description: "Developed and secured a medical plan application using SpringBoot, created APIs, and built data visualizations, ensuring efficient coding standards. Implemented JWT token authentication and OAuth 2.0.",
        image: "/images/projects/4.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ShreyaSisodiya/Medical-Plan-RESTful-Application",
        previewUrl: "https://github.com/ShreyaSisodiya/Medical-Plan-RESTful-Application",
    },
    {
        id: 5,
        title: "Interlaced Ventures",
        description: "Crafted a Java-based ecosystem app for diverse services (tech to legal), with features for freelancer discovery and robust data integrity tests. Made with Java Swing and MySql.",
        image: "/images/projects/5.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/kcsarrdah/InterlacedVentures",
        previewUrl: "https://github.com/kcsarrdah/InterlacedVentures",
    },
    {
        id: 6,
        title: "Medical Resource Finder",
        description: "Created an app to link doctors with patients, facilitating appointments & medical searches. Made with Java Swing.",
        image: "/images/projects/6.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ShreyaSisodiya/MEDICAL_RESOURCE_FINDER",
        previewUrl: "https://github.com/ShreyaSisodiya/MEDICAL_RESOURCE_FINDER",
    },
    {
        id: 7,
        title: "Accident Severity Prediction",
        description: "Explored various approaches to enhance the accuracy of accident severity predictions using Python and related tools like Pandas, NumPy, Seaborn, and Matplotlib.",
        image: "/images/projects/7.png",
        tag: ["All", "Data"],
        gitUrl: "https://github.com/Jagruti1906/Accident_Severity_Prediction",
        previewUrl: "https://github.com/Jagruti1906/Accident_Severity_Prediction",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-20 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Data"
                    isSelected={tag === "Data"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
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