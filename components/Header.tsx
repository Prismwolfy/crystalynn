"use client";

import Link from "next/link";
import React, {useState} from "react";
import {Routes} from "../components/Routes";
import LogoIcon from "./LogoIcon";

type RoutePath = typeof Routes[keyof typeof Routes];

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinkSharedClasses = 'flex py-2 px-4 justify-center items-center rounded-md text-lg font-normal transition-colors hidden xl:block'
  const navLinkSimpleClasses = 'hover:text-tree-green-600 focus:outline-2 focus:outline-sky-500 focus:text-lake-blue-950'
  const navLinkLimitedClasses = 'md:max-xl:block'
  const navLinkButtonClasses = 'ml-4 hover:bg-lake-blue-950 hover:text-white outline-2 outline-lake-blue-950'

  const navLinks = [
    { id: "2", label: "Recent Projects", href: Routes.recentProjects, classes: `${navLinkSharedClasses} ${navLinkSimpleClasses} ${navLinkLimitedClasses}` },
    { id: "3", label: "About", href: Routes.about, classes: `${navLinkSharedClasses} ${navLinkSimpleClasses}`},
    { id: "4", label: "Recommendations", href: Routes.recommendations, classes: `${navLinkSharedClasses} ${navLinkSimpleClasses}` },
    { id: "5", label: "Resume", target: "_blank" as "_blank", href: Routes.resume, classes: `${navLinkSharedClasses} ${navLinkSimpleClasses}` },
    { id: "6", label: "Contact", href: Routes.contact, classes: `${navLinkSharedClasses} ${navLinkButtonClasses} ${navLinkLimitedClasses}` },
  ];
  
  return (
    <div>      
      {/* Navigation */}
      <section className="flex flex-wrap items-center">

        {/* Logo */}
        <div className="flex items-center flex-1">
          <Link key="1" href={Routes.home}>
            <div className="flex items-center gap-3 smmd:gap-5">
              <div className="flex w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 p-0.5 px-5 flex-col justify-center items-center rounded-[40px] bg-tree-green-500">
                {/* Logo Extra Small SVG */}
                <LogoIcon width={25} height={16} viewBox={'0 0 45 28'} logoAdditionalClasses={'md:hidden'}/>
                {/* Logo Small SVG */}
                <LogoIcon width={33} height={21} viewBox={'0 0 48 31'} logoAdditionalClasses={'hidden md:max-xl:block'}/>
                {/* Logo Regular SVG */}
                <LogoIcon width={45} height={28} viewBox={'0 0 48 31'} logoAdditionalClasses={'hidden xl:block'}/>
              </div>
              {/* Logo Text */}
              <h4 className="text-lg smmd:text-xl lg:text-2xl gradient-green-to-blue-horizontal">
                Crystal<span className="hidden xs:inline">ynn</span> Meyer
              </h4>
            </div>
          
          </Link>
        </div>

        {/* Desktop Menu */}
        <section id="nav-desktop">
          <nav className="flex items-center" aria-label="desktop navigation">
            <NavLinksList links={navLinks} />
            <div className="flex items-center md:ml-4 py-2 pl-3 smmd:pl-4">
              <button onClick={()=>{setIsMobileMenuOpen(!isMobileMenuOpen)}} type="button" className={`xl:hidden text-lake-blue-950 cursor-pointer relative w-7 h-7 nav-toggle-btn ${isMobileMenuOpen ? "nav-toggle-btn-close" : "nav-toggle-btn-ham"}`}>
                {/* &#9776; - Hamburger Icon */}
                <div className="nav-toggle-icon"></div>
              </button>
            </div>
          </nav>
        </section>
        
        {/* Mobile Menu */}
        <section id="nav-mobile" className={`xl:hidden z-1000 absolute left-0 bg-black text-white text-5xl w-full flex-col justify-center origin-top animate-open-menu top-header-offset height-viewport-header-offset ${isMobileMenuOpen ? "flex" : "hidden"}`}>
          {/* <button onClick={()=>{setIsMobileMenuOpen(!isMobileMenuOpen)}} type="button" className="xl:hidden text-8xl justify-self-end px-6 cursor-pointer">
            &times;
          </button> */}
          <nav className="flex flex-col items-center" aria-label="mobile navigation">
            <NavLinksList links={navLinks} />
          </nav>
        </section>
      </section>
    </div>
  );
}
