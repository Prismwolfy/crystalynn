"use client";

export default function Copyright() {
  return (
    <>
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
