export default function Hero() {
  return (
    <section className="flex px-48 py-0 justify-center items-center gap-24 w-full flex-wrap">
      {/* Intro Text */}
      <div className="flex min-w-[450px] max-w-[710px] flex-col items-start gap-2.5 flex-1">
        <h2 className="w-full text-[#111E36] font-serif text-[39px] font-normal uppercase">
          Hi, I'm Crystalynn!
        </h2>
        <p className="w-full text-xl font-normal gradient-intro-text">
          <span className="font-normal">I'm an expert </span>
          <span className="font-bold">UX/UI designer and developer</span>
          <span className="font-normal"> with </span>
          <span className="font-bold">17+ years</span>
          <span className="font-normal">
            {" "}
            of experience in digital design and development. I have a passion
            for{" "}
          </span>
          <span className="font-bold">human-centered design</span>
          <span className="font-normal"> and my </span>
          <span className="font-bold">strong development background</span>
          <span className="font-normal">
            {" "}
            helps me balance user needs with technical application.
          </span>
        </p>
      </div>

      {/* Profile Image */}
      <div className="flex justify-end items-center">
        <div className="w-[250px] h-[250px] rounded-full bg-gradient-to-r from-[#55B95F] to-[#31579C] p-[2.5px]">
          <div className="w-full h-full rounded-full overflow-hidden">
            {/* Using a placeholder pattern as in the original design */}
            <svg
              width="250"
              height="250"
              viewBox="0 0 250 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="w-full h-full"
            >
              <g clipPath="url(#clip0_244_1951)">
                <circle
                  cx="125"
                  cy="125"
                  r="122.5"
                  fill="url(#pattern0_244_1951)"
                  stroke="url(#paint0_linear_244_1951)"
                  strokeWidth="5"
                />
              </g>
              <defs>
                <pattern
                  id="pattern0_244_1951"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <rect width="1" height="1" fill="#CFEAF6" />
                  <circle
                    cx="0.5"
                    cy="0.4"
                    r="0.2"
                    fill="#55B95F"
                    opacity="0.3"
                  />
                  <circle
                    cx="0.3"
                    cy="0.6"
                    r="0.15"
                    fill="#31579C"
                    opacity="0.3"
                  />
                </pattern>
                <linearGradient
                  id="paint0_linear_244_1951"
                  x1="228.658"
                  y1="0.000656504"
                  x2="228.659"
                  y2="250"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#55B95F" />
                  <stop offset="1" stopColor="#31579C" />
                </linearGradient>
                <clipPath id="clip0_244_1951">
                  <rect width="250" height="250" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
