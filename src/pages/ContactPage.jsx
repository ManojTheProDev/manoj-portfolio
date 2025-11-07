// src/pages/ContactPage.jsx
import React, { useState } from "react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("manojrajput.pes@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // fallback
    }
  };

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="bg-white rounded-lg p-6 shadow">
        <p className="mb-4">
          Interested in working together? Reach out — I typically respond within
          48 hours.
        </p>
        <div className="flex gap-4">
          <button
            onClick={copyEmail}
            className="px-4 py-2 bg-tealSlateBgStart text-white rounded"
          >
            {copied ? "Copied!" : "Copy Email"}
          </button>
          <a
            href="mailto:manojrajput.pes@gmail.com"
            className="px-4 py-2 border rounded"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}
