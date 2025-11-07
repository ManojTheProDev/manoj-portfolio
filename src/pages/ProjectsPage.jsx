// src/pages/ProjectsPage.jsx
import React from "react";
import ProjectCard from "../components/ProjectCard";

const PROJECTS = [
  {
    title: "Component Library (Straumann)",
    desc: "Reusable component library for multi-product use.",
    tech: "React, Webpack, Node",
  },
  {
    title: "Action Dashboard (Medibuddy)",
    desc: "Order management tool improving ops efficiency ~30%.",
    tech: "React, Node",
  },
  {
    title: "Gamezy (Gameskraft)",
    desc: "Fantasy sports platform (web & mobile).",
    tech: "React Native, Redux-Saga, Swift UI",
  },
  {
    title: "BigRock (Directi)",
    desc: "Domain, email, web, cloud hosting and marketing services.",
    tech: "ReactJS, Redux-Saga, AngularJS",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
