import React from "react";
import { motion } from "framer-motion";
export default function Summary({ text }) {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-6"
      >
        Professional Summary
      </motion.h2>
      <section className="bg-white rounded-lg shadow mt-8 p-6">
        <p className="text-slate-700 leading-relaxed">{text}</p>
      </section>
    </>
  );
}
