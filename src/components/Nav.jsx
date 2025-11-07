// src/components/Nav.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  //   { to: "/projects", label: "Projects" },
  //   { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const location = useLocation();

  return (
    <nav className="flex gap-6 items-center">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          onMouseEnter={() => {
            // prefetch the page chunk for snappy nav
            if (item.to === "/") import("../pages/Home");
            if (item.to === "/experience") import("../pages/ExperiencePage");
            if (item.to === "/projects") import("../pages/ProjectsPage");
            if (item.to === "/resume") import("../pages/ResumePage");
            if (item.to === "/contact") import("../pages/ContactPage");
          }}
          className="relative group text-white hover:text-blue-50 transition-colors"
        >
          <span className="z-10">{item.label}</span>
          <span
            className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-tealSlateStart to-tealSlateEnd transition-all duration-300 ${
              location.pathname === item.to
                ? "w-full"
                : "w-0 group-hover:w-full"
            }`}
          />
        </Link>
      ))}
    </nav>
  );
}
