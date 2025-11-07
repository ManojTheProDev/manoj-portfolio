// src/App.jsx
import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

const Home = lazy(() => import("./pages/Home"));
const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
// const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const pageVariant = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.35, ease: "easeIn" } },
};

function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/experience"
          element={
            <PageWrapper>
              <ExperiencePage />
            </PageWrapper>
          }
        />
        {/* <Route
          path="/projects"
          element={
            <PageWrapper>
              <ProjectsPage />
            </PageWrapper>
          }
        /> */}
        <Route
          path="/resume"
          element={
            <PageWrapper>
              <ResumePage />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <ContactPage />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <main className="container mx-auto px-6">
        <Suspense fallback={<div className="py-12 text-center">Loading…</div>}>
          <AnimatedRoutes />
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}
