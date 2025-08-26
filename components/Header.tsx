"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Routes } from "../components/Routes";
import LogoIcon from "./LogoIcon";
import { IconResume, IconContact, IconHome } from "./IconPaths";

type RoutePath = (typeof Routes)[keyof typeof Routes];

interface NavLinkProps {
  id: string;
  label: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  href: RoutePath;
  classes?: string;
  sublinks?: NavLinkProps[];
}

interface NavLinkListProps {
  links: NavLinkProps[];
  onNavLinkClick?: () => void;
}

function NavLinksList({ links, onNavLinkClick }: NavLinkListProps) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    if (windowWidth < 1280 && onNavLinkClick) {
      onNavLinkClick();
    }
  };

  return (
    <>
      {links.map((link, index) => (
        <React.Fragment key={index}>
          <Link
            href={link.href}
            target={link.target || "_self"}
            className={link.classes}
            onClick={handleClick}
          >
            {link.label}
          </Link>
          {/* Render sublinks if present and in mobile view */}
          {link.sublinks && windowWidth < 1280 && (
            <div>
              {link.sublinks.map((sublink) => (
                <Link
                  key={sublink.id}
                  href={sublink.href}
                  target={sublink.target || "_self"}
                  className={sublink.classes}
                  onClick={handleClick}
                >
                  {sublink.label}
                </Link>
              ))}
            </div>
          )}
        </React.Fragment>
      ))}
    </>
  );
}

interface IconLinkProps {
  id: string;
  label: string;
  href: RoutePath;
  classes?: string;
  iconName?: string;
  width?: number;
  height?: number;
  viewBox?: string;
  iconAdditionalClasses?: string;
}

interface IconLinkListProps {
  iconLinks: IconLinkProps[];
}

function IconLinksList({ iconLinks }: IconLinkListProps) {
  return (
    <>
      {iconLinks.map((iconLink) => (
        <Link
          key={iconLink.id}
          href={iconLink.href}
          className={iconLink.classes}
        >
          {/* Example: Render IconResume if iconName is "IconResume" */}
          {iconLink.iconName === "IconResume" && (
            <IconResume
              width={iconLink.width}
              height={iconLink.height}
              viewBox={iconLink.viewBox}
              iconAdditionalClasses={iconLink.iconAdditionalClasses}
            />
          )}
          {iconLink.iconName === "IconContact" && (
            <IconContact
              width={iconLink.width}
              height={iconLink.height}
              viewBox={iconLink.viewBox}
              iconAdditionalClasses={iconLink.iconAdditionalClasses}
            />
          )}
          {iconLink.iconName === "IconHome" && (
            <IconHome
              width={iconLink.width}
              height={iconLink.height}
              viewBox={iconLink.viewBox}
              iconAdditionalClasses={iconLink.iconAdditionalClasses}
            />
          )}
          {iconLink.label}
        </Link>
      ))}
    </>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkSharedClasses =
    "flex py-2 px-4 lg:px-3 lgxl:px-4 justify-center items-center rounded-md text-lg lg:text-base lgxl:text-lg font-normal transition-colors hidden lg:block";
  const navLinkSimpleClasses =
    "hover:text-tree-green-600 focus:outline-2 focus:outline-sky-500 focus:text-lake-blue-950 lg:drop-shadow-text-glow";
  const navLinkLimitedClasses =
    "md:max-lg:block md:max-lgxl:drop-shadow-text-glow nav-limited";
  const navLinkButtonClasses =
    "md:ml-4 lg:ml-2 lgxl:ml-4 md:hover:bg-lake-blue-950 md:hover:text-white md:outline-2 md:outline-lake-blue-950";
  const navSubLinkClasses = "!hidden sublink";

  const navLinks = [
    {
      id: "3",
      label: "Recent Projects",
      href: Routes.recentProjects,
      classes: `${navLinkSharedClasses} ${navLinkSimpleClasses} projects-desktop`,
    },
    {
      id: "4",
      label: "Recent Projects",
      href: Routes.recentProjects,
      classes: `${navLinkSharedClasses} ${navLinkSimpleClasses} projects-mobile !hidden`,
      sublinks: [
        {
          id: "4-1",
          label: "Life, the Universe, & Everything",
          href: Routes.ltue,
          classes: `${navSubLinkClasses}`,
        },
        {
          id: "4-2",
          label: "Road Trippin'",
          href: Routes.roadTrippin,
          classes: `${navSubLinkClasses}`,
        },
        {
          id: "4-3",
          label: "Bookshelf",
          href: Routes.bookshelf,
          classes: `${navSubLinkClasses}`,
        },
        // {
        //   id: "4-4",
        //   label: "Modere",
        //   href: Routes.modere,
        //   classes: `${navSubLinkClasses}`,
        // },
      ],
    },
    {
      id: "5",
      label: "About",
      href: Routes.about,
      classes: `${navLinkSharedClasses} ${navLinkSimpleClasses}`,
    },
    {
      id: "6",
      label: "Recommendations",
      href: Routes.recommendations,
      classes: `${navLinkSharedClasses} ${navLinkSimpleClasses}`,
    },
    {
      id: "7",
      label: "Resume",
      target: "_blank" as "_blank",
      href: Routes.resume,
      classes: `${navLinkSharedClasses} ${navLinkSimpleClasses} ${navLinkLimitedClasses} icon-mobile`,
    },
    {
      id: "8",
      label: "Contact",
      href: Routes.contact,
      classes: `${navLinkSharedClasses} ${navLinkButtonClasses} ${navLinkLimitedClasses} icon-mobile`,
    },
  ];

  const navIconClasses =
    "px-6 py-4 group text-center flex flex-col flex-grow items-center";

  const navIconIconClasses =
    "group-hover:bg-lake-blue-800 border-sky-blue-50 border-1 flex w-min items-center rounded-full p-3 lg:hidden mb-2";

  const iconLinks = [
    {
      id: "1",
      label: "Home",
      href: Routes.home,
      classes: `${navIconClasses}`,
      iconName: "IconHome",
      width: 60,
      height: 60,
      viewBox: "-10 -7 75 75",
      iconAdditionalClasses: `${navIconIconClasses}`,
    },
    {
      id: "2",
      label: "Resume",
      href: Routes.resume,
      classes: `${navIconClasses}`,
      iconName: "IconResume",
      width: 60,
      height: 60,
      viewBox: "-10 -7 75 75",
      iconAdditionalClasses: `${navIconIconClasses}`,
    },
    {
      id: "3",
      label: "Contact",
      href: Routes.contact,
      classes: `${navIconClasses}`,
      iconName: "IconContact",
      width: 60,
      height: 60,
      viewBox: "-10 -7 75 75",
      iconAdditionalClasses: `${navIconIconClasses}`,
    },
  ];

  // Handler to close mobile menu
  const handleCloseMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div>
      {/* Navigation */}
      <section className="flex flex-wrap items-center">
        {/* Logo */}
        <div className="flex flex-1 items-center">
          <Link key="1" href={Routes.home}>
            <div className="smmd:gap-5 lgxl:gap-5 flex items-center gap-3 lg:gap-3">
              <div className="bg-tree-green-500 lgxl:h-20 lgxl:w-20 flex h-12 w-12 flex-col items-center justify-center rounded-[40px] p-0.5 px-5 text-white md:h-16 md:w-16">
                {/* Logo Extra Small SVG */}
                <LogoIcon
                  width={25}
                  height={16}
                  viewBox={"0 0 51 28"}
                  logoAdditionalClasses={"md:hidden"}
                />
                {/* Logo Small SVG */}
                <LogoIcon
                  width={33}
                  height={21}
                  viewBox={"0 0 48 31"}
                  logoAdditionalClasses={"hidden md:max-lgxl:block"}
                />
                {/* Logo Regular SVG */}
                <LogoIcon
                  width={45}
                  height={28}
                  viewBox={"0 0 48 31"}
                  logoAdditionalClasses={"hidden lgxl:block"}
                />
              </div>
              {/* Logo Text */}
              <h4 className="smmd:text-xl gradient-green-to-blue-horizontal drop-shadow-text-glow lgxl:text-2xl text-lg lg:text-xl">
                Crystal<span className="xs:inline hidden">ynn</span> Meyer
              </h4>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <section id="nav-desktop">
          <nav className="flex items-center" aria-label="desktop navigation">
            <NavLinksList links={navLinks} />
            <div className="smmd:pl-4 flex items-center py-2 pl-3 md:ml-4 lg:ml-2 lg:hidden xl:ml-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                type="button"
                className={`text-lake-blue-950 nav-toggle-btn relative h-7 w-7 cursor-pointer ${isMobileMenuOpen ? "nav-toggle-btn-close" : "nav-toggle-btn-ham"}`}
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
          className={`z-1000 animate-open-menu top-header-offset bg-lake-blue-900/95 text-sky-blue-50 absolute left-0 w-full origin-top flex-col backdrop-blur-lg xl:hidden ${isMobileMenuOpen ? "flex" : "hidden"}`}
        >
          <nav className="flex flex-col" aria-label="mobile navigation">
            {/* <div className="border-sky-blue-50 border-1 flex w-min items-center rounded-full p-3">
              <IconResume
                width={32}
                height={32}
                viewBox={"0 0 60 60"}
                iconAdditionalClasses={"lg:hidden"}
              />
            </div> */}
            <div
              id="nav-mobile-icons"
              className="flex flex-row items-center justify-center md:hidden"
            >
              <IconLinksList iconLinks={iconLinks} />
            </div>
            <div id="nav-mobile-links">
              <NavLinksList
                links={navLinks}
                onNavLinkClick={handleCloseMobileMenu}
              />
            </div>
          </nav>
        </section>
      </section>
    </div>
  );
}
