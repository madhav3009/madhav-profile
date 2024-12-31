import { Code2 } from "lucide-react";

const projects = [
  {
    title: "M.E.M.E.S: Meme Sharing Platform",
    tech: "Express, React, Redis, Material UI",
    period: "May 2022 – June 2022",
    highlights: [
      "Engineered scalable backend using Express, Node, and Redis to manage user interactions, meme uploads, and likes, achieving low latency and high throughput",
      "Integrated authentication and authorization mechanisms, leveraging OAuth for secure user logins",
    ],
  },
  {
    title: "QuickKart: E-commerce Platform",
    tech: "Node, React, MongoDB",
    period: "November 2021 – December 2021",
    highlights: [
      "Built an e-commerce platform with Node.js and React, featuring secure payment integration and a comprehensive product management system",
    ],
  },
];

export const Projects = () => {
  return (
    <section className="animate-fade-up space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Code2 className="text-secondary" size={24} />
        <h2 className="text-2xl font-semibold">Projects</h2>
      </div>
      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 bg-accent rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-semibold text-secondary">
                  {project.title}
                </h3>
                <p className="text-sm text-primary">{project.period}</p>
              </div>
              <p className="text-primary text-sm mt-1">{project.tech}</p>
            </div>
            <ul className="list-disc list-inside space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="text-sm leading-relaxed">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};