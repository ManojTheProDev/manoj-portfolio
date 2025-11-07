import React from "react";
import { EXPERIENCE } from "../data";
export default function TechnicalGrid({ data }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {Object.entries(data).map(([k, v]) => (
        <div key={k} className="bg-white rounded-lg p-4 shadow">
          <h3 className="font-semibold text-slate-800 mb-2">{k}</h3>
          <ul className="text-slate-700 text-sm space-y-1">
            {v.map((t) => (
              <li key={t}>• {t}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
