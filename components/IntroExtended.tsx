import { ProfileImage } from "../components/ProfileImage";

export default function HeroExtended() {
  return (
    <section className="flex w-full flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-14 xl:gap-24">
      {/* Profile Image - Top & Left */}
      <div className="flex w-full justify-center md:w-auto">
        <ProfileImage />
      </div>

      {/* Intro Extended Text */}
      <div className="flex min-w-0 flex-1 flex-col items-start gap-[15px]">
        <h1 className="text-cm-navy font-belanosima w-full text-[39px] font-normal uppercase leading-none">
          Why I Love What I Do
        </h1>
        <div className="text-cm-navy font-poppins w-full text-xl font-normal leading-normal">
          <span className="font-normal">
            What I love most about UX design is{" "}
          </span>
          <span className="font-bold">
            the chance to solve real problems for real people
          </span>
          <span className="font-normal">
            . Empathy is at the heart of everything I do - I'm genuinely enjoy
            listening to users, uncovering their challenges, and{" "}
          </span>
          <span className="font-bold">
            designing solutions that feel intuitive and meaningful
          </span>
          <span className="font-normal">
            . Seeing users engage with something I've helped create and knowing
            it made a positive difference is what keeps me passionate about this
            work every day.
          </span>
        </div>
        <div className="text-cm-navy font-poppins w-full text-xl font-normal leading-normal">
          <span className="font-normal">My </span>
          <span className="font-bold">background in front-end development</span>
          <span className="font-normal">
            {" "}
            gives me a practical lens through which I approach design: I
            understand what's possible technically, which helps me design
            solutions that are not only beautiful but also practical to
            implement. I've led user research, built design systems, conducted
            usability testing, and collaborated closely with developers, product
            managers, and stakeholders to{" "}
          </span>
          <span className="font-bold">
            turn ideas into impactful experiences
          </span>
          <span className="font-normal">.</span>
        </div>
        <div className="text-cm-navy font-poppins w-full text-xl font-normal leading-normal">
          <span className="font-normal">
            I'm big on mentoring, clear communication, and always{" "}
          </span>
          <span className="font-bold">
            staying curious about how to improve
          </span>
          <span className="font-normal">
            {" "}
            both the product and the process. Whether I'm mapping user flows,
            wireframing in Figma, or digging into data to guide design
            decisions, my goal is always the same: to{" "}
          </span>
          <span className="font-bold">make things better for the user</span>
          <span className="font-normal">.</span>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-5 pt-[15px]">
          <button className="bg-cm-green flex min-w-[328px] max-w-full items-center justify-center gap-5 rounded-md px-10 py-2.5">
            <span className="text-cm-navy font-poppins text-xl font-bold leading-normal">
              See My Resume
            </span>
          </button>
          <button className="bg-cm-dark-blue flex min-w-[328px] max-w-full items-center justify-center gap-5 rounded-md px-10 py-2.5">
            <span className="text-cm-light-text font-poppins text-xl font-bold leading-normal">
              Get in Touch
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
