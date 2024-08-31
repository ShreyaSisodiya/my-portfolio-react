import React from 'react';

const skills = [
    "Java", "Spring Boot", "HTML", "CSS", "JavaScript", "TypeScript", "Python", "C++", "SQL",
    "MongoDB", "React", "Next.js", "shadcn", "Node.js", "Tailwind", "REST API", "Redis",
    "Redux", "GraphQL", "Express", "PostgreSQL", "Django", "Framer Motion", "Talend", "Selenium",
    "Swing", "Flask", "Bootstrap", "Pandas", "Numpy", "Matplotlib", "Alteryx", "GCP BigQuery",
    "AWS", "Docker", "Kubernetes", "Jenkins", "Figma", "Git", "Power BI", "Tableau"
];

const Skills = () => {
    return (
        <section id="skills" className="mb-28 mt-30 sm:mb-40 ">
            <div className="container mx-auto max-w-[53rem] my-20 text-center scroll-mt-28">
                <h2 className="text-center text-4xl font-bold text-white mt-20 mb-8 md:mb-12">
                    Tools That Bring Your Ideas to Life
                </h2>
                <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 dark:text-white/80">
                    {skills.map((skill, index) => (
                        <li
                            key={index}
                            className="bg-white border-2 border-black rounded-full px-6 py-3 text-xl cursor-pointer dark:bg-white/10"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills;
