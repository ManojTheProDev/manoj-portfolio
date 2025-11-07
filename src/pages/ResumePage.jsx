// src/pages/ResumePage.jsx
import React from "react";
import { PROFILE } from "../data";
import Summary from "./Summary";
import ExperiencePage from "./ExperiencePage";

export default function ResumePage() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Resume (Print View)</h2>
      <div className="bg-white rounded-lg p-6 shadow">
        <h3 className="text-xl font-semibold">{PROFILE.name}</h3>
        <p className="text-sm text-slate-600">{PROFILE.title}</p>
        <hr className="my-4" />
        {/* Paste your resume sections here or reuse components */}
        <Summary />
        <ExperiencePage />
        <p className="text-sm text-slate-700">Full resume content here…</p>
      </div>
    </section>
  );
}
