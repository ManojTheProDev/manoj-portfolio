// src/components/Header.jsx
import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Nav from "./Nav";
import { PROFILE } from "../data";
import Manoj from "../../public/manoj.jpg";

export default function Header() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -36]);

  return (
    <motion.header style={{ y }} className="header-band relative mb-6">
      <div className="header-pattern" aria-hidden="true" />
      <div className="container mx-auto px-6 py-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">{PROFILE.name}</h1>
          <p className="mt-1 text-white/90">{PROFILE.title}</p>
          <p className="mt-2 text-sm text-white/80">{PROFILE.location}</p>
        </div>

        <div className="flex items-center gap-6">
          <Nav />
          <div className="w-20 h-20 rounded-full bg-white/90 shadow-lg flex items-center justify-center overflow-hidden">
            {/* avatar placeholder */}
            <div className="w-16 h-16 rounded-full bg-slate-200">
              <img src={Manoj} alt="Manoj" className="rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
