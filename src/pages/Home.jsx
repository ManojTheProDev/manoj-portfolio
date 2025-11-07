// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import Summary from "./Summary";
import TechnicalGrid from "./ExperiencePage";
import ProjectsPage from "./ProjectsPage";
import { SUMMARY } from "../data";

export default function Home() {
  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Summary text={SUMMARY} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18 }}
      >
        <ProjectsPage />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12 }}
      >
        <TechnicalGrid />
      </motion.div>
    </div>
  );
}
