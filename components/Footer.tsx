"use client";

import Link from "next/link";

interface FooterLinkListProps {
  header: string;
  links: string[];
}

function FooterLinkList({ header, links }: FooterLinkListProps) {
  return (
    <div className="flex flex-col items-start gap-2 flex-1 min-w-[195px] max-w-[358px]">
      <div className="flex pb-1.5 justify-center items-center w-full">
        <div className="flex-1 text-[#111E36] font-serif text-[25px] font-normal uppercase">
          {header}
        </div>
      </div>
      {links.map((link, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center w-full"
        >
          <Link
            href="#"
            className="w-full text-[#111E36] font-sans text-base font-normal hover:underline"
          >
            {link}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function Footer() {
  const navigationLinks = ["About", "Recommendations", "Resume", "Contact"];
  const projectLinks = [
    "Life, the Universe, & Everything Redesign",
    "Road Trippin' Mobile App Design",
    "Bookshelf Website Design",
    "Modere Updated Design System",
  ];

  return (
    <>
      {/* Main Footer */}
      <footer className="flex py-14 px-48 items-start gap-8 w-full flex-wrap">
        {/* Left Section */}
        <div className="flex w-[435px] flex-col items-start gap-2.5">
          <div className="text-[#111E36] font-serif text-[31px] font-normal uppercase">
            Get in Touch
          </div>
          <div className="w-full text-base font-normal gradient-footer-email">
            <span className="font-normal">
              Ready to build something together? Contact me via my LinkedIn
              account below or you can email me directly at:{" "}
            </span>
            <span className="font-bold underline">prismwolf@gmail.com</span>
            <span className="font-normal">.</span>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-2.5">
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#55B95F]">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#55B95F" />
                <path
                  d="M23.1498 16.3999C22.3834 16.3973 21.6239 16.5458 20.9149 16.837C20.2059 17.1282 19.5613 17.5563 19.018 18.0969C18.4746 18.6375 18.0432 19.2799 17.7484 19.9873C17.4535 20.6948 17.3011 21.4535 17.2998 22.2199V28.0999C17.2998 28.3386 17.3946 28.5676 17.5634 28.7363C17.7322 28.9051 17.9611 28.9999 18.1998 28.9999H20.2998C20.5385 28.9999 20.7674 28.9051 20.9362 28.7363C21.105 28.5676 21.1998 28.3386 21.1998 28.0999V22.2199C21.1996 21.9473 21.2569 21.6778 21.3678 21.4288C21.4788 21.1798 21.641 20.957 21.8439 20.7749C22.0467 20.5928 22.2857 20.4555 22.5452 20.3719C22.8046 20.2884 23.0788 20.2604 23.3498 20.2899C23.8358 20.3512 24.2825 20.5886 24.605 20.9572C24.9276 21.3259 25.1036 21.8001 25.0998 22.2899V28.0999C25.0998 28.3386 25.1946 28.5676 25.3634 28.7363C25.5322 28.9051 25.7611 28.9999 25.9998 28.9999H28.0998C28.3385 28.9999 28.5674 28.9051 28.7362 28.7363C28.905 28.5676 28.9998 28.3386 28.9998 28.0999V22.2199C28.9985 21.4535 28.8461 20.6948 28.5512 19.9873C28.2564 19.2799 27.825 18.6375 27.2816 18.0969C26.7383 17.5563 26.0937 17.1282 25.3847 16.837C24.6757 16.5458 23.9163 16.3973 23.1498 16.3999Z"
                  fill="white"
                />
                <path
                  d="M14.6 17.2998H11.9C11.4029 17.2998 11 17.7027 11 18.1998V28.0998C11 28.5969 11.4029 28.9998 11.9 28.9998H14.6C15.0971 28.9998 15.5 28.5969 15.5 28.0998V18.1998C15.5 17.7027 15.0971 17.2998 14.6 17.2998Z"
                  fill="white"
                />
                <path
                  d="M13.25 15.5C14.4926 15.5 15.5 14.4926 15.5 13.25C15.5 12.0074 14.4926 11 13.25 11C12.0074 11 11 12.0074 11 13.25C11 14.4926 12.0074 15.5 13.25 15.5Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-start gap-8 flex-1 flex-wrap">
          <FooterLinkList header="Navigation" links={navigationLinks} />
          <FooterLinkList header="Recent Projects" links={projectLinks} />
        </div>
      </footer>

      {/* Copyright */}
      <div className="flex py-2.5 px-4 justify-center items-start w-full flex-wrap bg-[#2D436C]">
        {/* Left - Copyright */}
        <div className="flex min-w-[460px] py-2 items-center gap-1.25 flex-1">
          <div className="flex justify-center items-center w-6 h-6 rounded-full bg-transparent border-2 border-[#F0FDFF]">
            <div className="text-[#F0FDFF] text-xs font-bold">©</div>
          </div>
          <span className="text-[#F0FDFF] font-sans text-base">
            2025 Crystalynn Meyer
          </span>
        </div>

        {/* Right */}
        <div className="flex justify-end items-end gap-5 flex-wrap">
          <div className="flex py-2 justify-end items-center flex-wrap">
            <div className="max-w-[950px] text-[#F0FDFF] font-sans text-base font-normal">
              "Often when you think you're at the end of something, you're at
              the beginning of something else." - Fred Rogers
            </div>
          </div>

          {/* Return to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex justify-end items-end hover:opacity-80 transition-opacity"
            aria-label="Return to top"
          >
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#55B95F]">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#55B95F" />
                <path
                  d="M28.8167 24.5166C29.4667 23.8666 29.4667 22.8166 28.8167 22.1666L21.1667 14.5166C20.5167 13.8666 19.4667 13.8666 18.8167 14.5166L11.1667 22.1666C10.5167 22.8166 10.5167 23.8666 11.1667 24.5166C11.8167 25.1666 12.8667 25.1666 13.5167 24.5166L20 18.0499L26.4667 24.5166C27.1167 25.1666 28.1834 25.1499 28.8167 24.5166Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
