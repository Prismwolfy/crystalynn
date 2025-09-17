"use client";
import { useState, useEffect, useRef } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Credentials from "../components/Credentials";
import ProjectExample from "../components/ProjectExample";
import Recommendations from "../components/Recommendations";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { Routes } from "../components/Routes";

export default function Home() {
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      // Adjust this value based on when you want the header to become sticky
      const scrollThreshold = 1;
      if (window.scrollY < scrollThreshold) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elementToStyle = elementRef.current;
    if (!elementToStyle) return;

    if (window.scrollY < 0) {
      setIsSticky(false);
    } else {
      setIsSticky(true);
    }
  }, []);

  const marginClasses = "px-4 md:px-6 lg:px-14 xl:px-24";
  const marginDoubleClasses = "px-4 md:px-6 lg:px-28 xl:px-48";
  const marginVerticalClasses = "py-6 md:py-8 lg:py-12 xl:py-14";
  const marginVerticalHeaderClasses = "py-4 lg:py-6";
  const additionalClasses = "w-full max-w-[1440px]";

  return (
    <div className="mx-auto flex w-full flex-col items-center">
      {/* TODO: Remove when dark mode is complete and this is no longer needed */}
      <div className="border-lake-blue-950 fixed left-0 top-0 z-[2000] hidden border border-l-0 border-t-0 bg-white p-2">
        <span className="md:hidden">Mobile</span>
        <span className="hidden md:max-lg:block">Tablet</span>
        <span className="hidden lg:max-xl:block">Desktop Small</span>
        <span className="hidden xl:block">Desktop</span>
      </div>

      {/* Header */}
      <header
        id="header"
        className={`z-2000 fixed left-0 top-0 w-full transition-all duration-300 ${isSticky ? "bg-sky-blue-50/50 shadow-md backdrop-blur-lg" : "bg-transparent"}`}
      >
        <div
          className={`${marginClasses} ${marginVerticalHeaderClasses} ${additionalClasses} w-full`}
        >
          <Header />
        </div>
      </header>

      {/* Hero/Intro Section */}
      <section
        id="intro"
        className={`${marginDoubleClasses} ${marginVerticalClasses} ${additionalClasses} margin-top-header-offset`}
      >
        <Hero />
      </section>

      {/* Credentials Section */}
      <section
        id="credentials"
        className={`${marginClasses} ${marginVerticalClasses} ${additionalClasses}`}
      >
        <Credentials />
      </section>

      {/* Examples/Projects Section */}
      <section
        id="recent-projects"
        className={`flex w-full flex-col items-center`}
      >
        <ProjectExample
          classes={`${marginClasses} ${marginVerticalClasses}`}
          id="ltue"
          subheader="Life, the Universe, & Everything"
          header="Branding and Website Redesign"
          description="I completed a branding and website redesign for the LTUE writing symposium, creating a modern logo, cohesive style guide, and WordPress site tailored to younger, tech-savvy writers. I combined user research, streamlined navigation, and bold visual design to elevate the event’s digital presence and boost audience engagement."
          imageUrl="/images/example-ltue.png?width=1000"
          imagePosition="left"
          background="sky"
          buttonText="Read the Case Study"
          buttonUrl={Routes.caseStudyLtue}
        />

        <ProjectExample
          classes={`${marginClasses} ${marginVerticalClasses}`}
          id="road-trippin"
          subheader="Road Trippin'"
          header="Mobile App Design"
          description="For Road Trippin', I created a mobile-friendly web app that transforms road trip games like the classic license plate game into a shared digital experience for families, couples, and travelers. I designed an offline-first, quick-tap interface with vibrant visuals and the result was a simple, fun, and practical app that increases interaction and promotes an exciting, collaborative travel experience."
          imageUrl="/images/example-road-trippin.png?width=1000"
          imagePosition="right"
          background="default"
          buttonText="View the Prototype"
          buttonUrl="https://www.figma.com/proto/YFlGLxyu2YiNyFxL59PSHU/Road-Trippin-?t=YAopWQ9vwkdX3nym-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=1-2235"
        />

        <ProjectExample
          classes={`${marginClasses} ${marginVerticalClasses}`}
          id="bookshelf"
          subheader="Bookshelf"
          header="Website Design"
          description="For Bookshelf, I designed a minimalist personal library web app that gives readers a calm, private space to curate their collections - free from the noise of social feeds and unnecessary features. I streamlined book entry, added intuitive tagging, and fashioned a warm, clean, distraction-free interface."
          imageUrl="/images/example-bookshelf.png?width=1000"
          imagePosition="left"
          background="sky"
          buttonText="View the Preview Designs"
          buttonUrl="https://www.figma.com/proto/kguIbD8Om5asJX12mIALyG/Bookshelf?node-id=110-774&p=f&t=Kl0jqG5636kxgmQJ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
        />
        {/* TODO: Unhide Modere when content is ready - don't forget nav */}
        <ProjectExample
          classes={`${marginClasses} ${marginVerticalClasses} hidden`}
          id="modere"
          subheader="Modere"
          header="Updated Design System"
          description="This is a paragraph about the client and project that expands a bit on what was done for them. Short and to the point, it should include key words but not so much that it's a chore to read. Include all the different things that was part of this project and what I learned while working on this project to entice the viewer to click the link below."
          imageUrl="/images/example-design-system.png?width=1000"
          imagePosition="right"
          background="default"
          buttonText="See Design System"
          buttonUrl="https://www.figma.com/proto/LUrPeaALmjR8qwoVDD5CHD/LTUE-Case-Study-2024?node-id=1-74&t=FwAeN1Of5CJ05uFT-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
        />
      </section>

      {/* Recommendations Section */}
      <section
        id="recommendations"
        className={`${marginClasses} ${marginVerticalClasses} bg-sky-blue-100 flex w-full justify-center`}
      >
        <Recommendations />
      </section>

      {/* Footer */}
      <section
        id="footer"
        className={`${marginDoubleClasses} ${marginVerticalClasses} ${additionalClasses}`}
      >
        <Footer />
      </section>

      {/* Copyright */}
      <footer
        id="copyright"
        className={`bg-lake-blue-800 text-sky-blue-50 flex w-full items-center justify-center`}
      >
        <Copyright />
      </footer>
    </div>
  );
}
