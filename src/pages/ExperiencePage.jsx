// src/pages/ExperiencePage.jsx
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../components/ExperienceCard";
import { EXPERIENCE } from "../data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ExperiencePage() {
  return (
    <section className="py-8">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-6"
      >
        Professional Experience
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className="space-y-6"
      >
        {EXPERIENCE.map((it, idx) => (
          <motion.div key={idx} variants={item}>
            <ExperienceCard {...it} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
