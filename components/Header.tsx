"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Routes } from "../components/Routes";
import LogoIcon from "./LogoIcon";

type RoutePath = (typeof Routes)[keyof typeof Routes];

interface NavLinkProps {
  id: string;
  label: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  href: RoutePath;
  classes?: string;
}

interface NavLinkListProps {
  links: NavLinkProps[];
}

function NavLinksList({ links }: NavLinkListProps) {
  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target={link.target || "_self"}
          className={link.classes}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkSharedClasses =
    "flex py-2 px-4 justify-center items-center rounded-md text-lg font-normal transition-colors hidden xl:block";
  const navLinkSimpleClasses =
    "hover:text-tree-green-600 focus:outline-2 focus:outline-sky-500 focus:text-lake-blue-950";
  const navLinkLimitedClasses = "md:max-xl:block";
  const navLinkButtonClasses =
    "ml-4 hover:bg-lake-blue-950 hover:text-white outline-2 outline-lake-blue-950";

  const navLinks = [
    {
      id: "2",
      label: "Recent Projects",
      href: Routes.recentProjects,
      classes: `${navLinkSharedClasses} ${navLinkSimpleClasses} ${navLinkLimitedClasses}`,
    },
    {
      id: "3",
      label: "About",
      href: Routes.about,
      classes: `${navLinkSharedClasses} ${navLinkSimpleClasses}`,
    },
    {
      id: "4",
      label: "Recommendations",
      href: Routes.recommendations,
      classes: `${navLinkSharedClasses} ${navLinkSimpleClasses}`,
    },
    {
      id: "5",
      label: "Resume",
      target: "_blank" as "_blank",
      href: Routes.resume,
      classes: `${navLinkSharedClasses} ${navLinkSimpleClasses}`,
    },
    {
      id: "6",
      label: "Contact",
      href: Routes.contact,
      classes: `${navLinkSharedClasses} ${navLinkButtonClasses} ${navLinkLimitedClasses}`,
    },
  ];

  return (
    <div>
      {/* Navigation */}
      <section className="flex flex-wrap items-center">
        {/* Logo */}
        <div className="flex flex-1 items-center">
          <Link key="1" href={Routes.home}>
            <div className="smmd:gap-5 flex items-center gap-3">
              <div className="bg-tree-green-500 flex h-12 w-12 flex-col items-center justify-center rounded-[40px] p-0.5 px-5 md:h-16 md:w-16 xl:h-20 xl:w-20">
                {/* Logo Extra Small SVG */}
                <LogoIcon
                  width={25}
                  height={16}
                  viewBox={"0 0 45 28"}
                  logoAdditionalClasses={"md:hidden"}
                />
                {/* Logo Small SVG */}
                <LogoIcon
                  width={33}
                  height={21}
                  viewBox={"0 0 48 31"}
                  logoAdditionalClasses={"hidden md:max-xl:block"}
                />
                {/* Logo Regular SVG */}
                <LogoIcon
                  width={45}
                  height={28}
                  viewBox={"0 0 48 31"}
                  logoAdditionalClasses={"hidden xl:block"}
                />
              </div>
              {/* Logo Text */}
              <h4 className="smmd:text-xl gradient-green-to-blue-horizontal text-lg lg:text-2xl">
                Crystal<span className="xs:inline hidden">ynn</span> Meyer
              </h4>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <section id="nav-desktop">
          <nav className="flex items-center" aria-label="desktop navigation">
            <NavLinksList links={navLinks} />
            <div className="smmd:pl-4 flex items-center py-2 pl-3 md:ml-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                type="button"
                className={`text-lake-blue-950 nav-toggle-btn relative h-7 w-7 cursor-pointer xl:hidden ${isMobileMenuOpen ? "nav-toggle-btn-close" : "nav-toggle-btn-ham"}`}
              >
                {/* &#9776; - Hamburger Icon */}
                <div className="nav-toggle-icon"></div>
              </button>
            </div>
          </nav>
        </section>

        {/* Mobile Menu */}
        <section
          id="nav-mobile"
          className={`z-1000 animate-open-menu top-header-offset height-viewport-header-offset absolute left-0 w-full origin-top flex-col justify-center bg-black text-5xl text-white xl:hidden ${isMobileMenuOpen ? "flex" : "hidden"}`}
        >
          {/* <button onClick={()=>{setIsMobileMenuOpen(!isMobileMenuOpen)}} type="button" className="xl:hidden text-8xl justify-self-end px-6 cursor-pointer">
            &times;
          </button> */}
          <nav
            className="flex flex-col items-center"
            aria-label="mobile navigation"
          >
            <NavLinksList links={navLinks} />
          </nav>
        </section>
      </section>
    </div>
  );
}
