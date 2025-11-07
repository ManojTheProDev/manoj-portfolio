// src/components/ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, tech }) {
  return (
    <motion.article
      className="bg-white rounded-xl p-5 shadow-sm border border-transparent"
      whileHover={{
        translateY: -6,
        boxShadow: "0 12px 40px rgba(2,6,23,0.08)",
      }}
      transition={{ duration: 0.28 }}
    >
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-sm text-slate-600 mt-2">{desc}</p>
      <div className="mt-4 text-xs text-slate-500">{tech}</div>
    </motion.article>
  );
}
