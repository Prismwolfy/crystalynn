"use client";

export default function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Copyright */}
      <div className="flex w-full max-w-[1440px] flex-wrap items-start justify-center px-4 py-2.5 md:max-lg:text-center lg:flex-row lg:flex-nowrap lg:items-center lg:justify-between lg:gap-14">
        {/* Left - Copyright */}
        <div className="gap-1.75 flex flex-1 items-center md:flex-none">
          <span className="text-xl">©</span>
          <span>{currentYear}</span>
          <span>Crystalynn Meyer</span>
        </div>

        {/* Right */}
        <div className="flex flex-row flex-wrap items-end justify-end gap-5">
          <div className="flex flex-1 flex-wrap items-center justify-end py-2">
            "Often when you think you're at the end of something, you're at the
            beginning of something else." - Fred Rogers
          </div>

          {/* Return to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-end justify-end"
            aria-label="Return to top"
          >
            <div className="bg-tree-green-500 hover:bg-tree-green-600 flex h-10 w-10 items-center justify-center rounded-full transition-all delay-100 hover:cursor-pointer">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 text-white"
              >
                <path
                  d="M28.8167 24.5166C29.4667 23.8666 29.4667 22.8166 28.8167 22.1666L21.1667 14.5166C20.5167 13.8666 19.4667 13.8666 18.8167 14.5166L11.1667 22.1666C10.5167 22.8166 10.5167 23.8666 11.1667 24.5166C11.8167 25.1666 12.8667 25.1666 13.5167 24.5166L20 18.0499L26.4667 24.5166C27.1167 25.1666 28.1834 25.1499 28.8167 24.5166Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
