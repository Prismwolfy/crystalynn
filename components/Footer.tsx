"use client";

import Link from "next/link";
import {Routes} from "../components/Routes";

type RoutePath = typeof Routes[keyof typeof Routes];

interface FooterLinkProps {
  id: string;
  label: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  href: RoutePath;
}

interface FooterLinkListProps {
  header: string;
  links: FooterLinkProps[];
}

function FooterLinkList({ header, links }: FooterLinkListProps) {
  return (
    <div className="flex flex-col flex-1 smmdd:flex-none w-full smmdd:w-auto items-start">
      <h5 className="flex py-1">
        {header}
      </h5>
      {links.map((link, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-full"
        >
          <Link 
            href={link.href}
            target={link.target || "_self"}
            className="w-full py-1 hover:underline"
          >
            {link.label}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function Footer() {
  const navigationLinks = [
    { id: "1", label: "About", href: Routes.about },
    { id: "2", label: "Recommendations", href: Routes.recommendations },
    { id: "3", label: "Resume", target: "_blank" as "_blank", href: Routes.resume },
    { id: "4", label: "Contact", href: Routes.contact },
  ];

  const projectLinks = [
  { id: "1", label: "Life, the Universe, & Everything Redesign", href: Routes.ltue },
  { id: "2", label: "Road Trippin' Mobile App Design", href: Routes.roadTrippin },
  { id: "3", label: "Bookshelf Website Design", href: Routes.bookshelf },
  { id: "4", label: "Modere Updated Design System", href: Routes.modere },
];

  return (
    <>
      {/* Main Footer */}
      <div className="flex md:flex-row items-start gap-6 lg:gap-8 w-full flex-wrap justify-center md:justify-start lg:justify-between">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-2.5 md:flex-1 lg:max-w-[435px]">
          <h4>
            Get in Touch
          </h4>
          <div className="w-full">
            Ready to build something together? Contact me via my LinkedIn account below or you can email me directly at: <Link href={Routes.contact} className="font-bold underline gradient-green-to-blue-horizontal">prismwolf@gmail.com</Link>.
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-2.5">
            <Link 
              href={Routes.linkedIn}
              target="_blank"
            >
              <div className="flex justify-center items-center w-10 h-10 rounded-full bg-tree-green-500">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M23.1498 16.3999C22.3834 16.3973 21.6239 16.5458 20.9149 16.837C20.2059 17.1282 19.5613 17.5563 19.018 18.0969C18.4746 18.6375 18.0432 19.2799 17.7484 19.9873C17.4535 20.6948 17.3011 21.4535 17.2998 22.2199V28.0999C17.2998 28.3386 17.3946 28.5676 17.5634 28.7363C17.7322 28.9051 17.9611 28.9999 18.1998 28.9999H20.2998C20.5385 28.9999 20.7674 28.9051 20.9362 28.7363C21.105 28.5676 21.1998 28.3386 21.1998 28.0999V22.2199C21.1996 21.9473 21.2569 21.6778 21.3678 21.4288C21.4788 21.1798 21.641 20.957 21.8439 20.7749C22.0467 20.5928 22.2857 20.4555 22.5452 20.3719C22.8046 20.2884 23.0788 20.2604 23.3498 20.2899C23.8358 20.3512 24.2825 20.5886 24.605 20.9572C24.9276 21.3259 25.1036 21.8001 25.0998 22.2899V28.0999C25.0998 28.3386 25.1946 28.5676 25.3634 28.7363C25.5322 28.9051 25.7611 28.9999 25.9998 28.9999H28.0998C28.3385 28.9999 28.5674 28.9051 28.7362 28.7363C28.905 28.5676 28.9998 28.3386 28.9998 28.0999V22.2199C28.9985 21.4535 28.8461 20.6948 28.5512 19.9873C28.2564 19.2799 27.825 18.6375 27.2816 18.0969C26.7383 17.5563 26.0937 17.1282 25.3847 16.837C24.6757 16.5458 23.9163 16.3973 23.1498 16.3999Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14.6 17.2998H11.9C11.4029 17.2998 11 17.7027 11 18.1998V28.0998C11 28.5969 11.4029 28.9998 11.9 28.9998H14.6C15.0971 28.9998 15.5 28.5969 15.5 28.0998V18.1998C15.5 17.7027 15.0971 17.2998 14.6 17.2998Z"
                    fill="currentColor"
                  />
                  <path
                    d="M13.25 15.5C14.4926 15.5 15.5 14.4926 15.5 13.25C15.5 12.0074 14.4926 11 13.25 11C12.0074 11 11 12.0074 11 13.25C11 14.4926 12.0074 15.5 13.25 15.5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </ Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap flex-col smmdd:flex-row md:flex-col lg:flex-row items-start gap-3 smmdd:gap-14 md:gap-3 md:flex-none lg:gap-12">
          <FooterLinkList header="Navigation" links={navigationLinks} />
          <FooterLinkList header="Recent Projects" links={projectLinks} />
        </div>
      </div>
    </>
  );
}
