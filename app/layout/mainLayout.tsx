"use client";
import { useState, useEffect, useRef } from "react";

import { ReactNode } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Copyright from "../../components/Copyright";
import { LayoutClasses } from "../../components/LayoutClasses";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
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

  return (
    <div className="mx-auto flex w-full flex-col items-center">
      {/* TODO: Remove when dark mode is complete and this is no longer needed */}
      <div className="border-lake-blue-950 fixed left-0 top-0 z-[5000] border border-l-0 border-t-0 bg-white p-2">
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
          className={`${LayoutClasses.marginClasses} ${LayoutClasses.marginVerticalHeaderClasses} ${LayoutClasses.additionalClasses} w-full`}
        >
          <Header />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex w-full flex-col items-center">{children}</main>

      {/* Footer */}
      <section
        id="footer"
        className={`${LayoutClasses.marginDoubleClasses} ${LayoutClasses.marginVerticalClasses} ${LayoutClasses.additionalClasses}`}
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
