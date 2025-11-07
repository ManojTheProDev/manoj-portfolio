// src/components/ExperienceCard.jsx
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function ExperienceCard({
  role,
  company,
  period,
  bullets = [],
  tech,
}) {
  // subtle 3D tilt based on pointer position
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(
    y,
    (v) => `${Math.max(Math.min(-v / 20, 8), -8)}deg`
  );
  const rotateY = useTransform(
    x,
    (v) => `${Math.max(Math.min(v / 20, 8), -8)}deg`
  );

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(px);
    y.set(py);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="bg-white rounded-xl p-6 shadow-sm border border-transparent"
      style={{ rotateX, rotateY }}
      whileHover={{ translateY: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">
            {role} — <span className="text-slate-600">{company}</span>
          </h3>
          <p className="text-sm text-slate-500 mt-1">{period}</p>
        </div>

        <div className="text-sm text-slate-500">{tech}</div>
      </div>

      <ul className="mt-4 text-slate-700 list-disc list-inside space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </motion.article>
  );
}
