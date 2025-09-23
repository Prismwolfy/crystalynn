import { ProfileImage } from "../components/ProfileImage";
import { Routes } from "../components/Routes";
import Link from "next/link";

export function ButtonGroup() {
  return (
    <>
      <Link href={Routes.resume} className="button button-secondary">
        See My Resume
      </Link>
      <Link href={Routes.contact} className="button button-primary">
        Get in Touch
      </Link>
    </>
  );
}

export default function HeroExtended() {
  const buttonGroupClasses =
    "mt-4 w-full flex-col md:flex-row lg:flex-col xl:flex-row gap-4 justify-center";

  return (
    <section className="flex w-full flex-wrap items-center justify-center gap-4 md:gap-6 lg:items-start lg:gap-14 xl:gap-24">
      {/* Profile Image */}
      <div className="flex w-full justify-center lg:w-auto lg:flex-col">
        <ProfileImage />

        {/* Button Group - Desktop Small */}
        <div className={`${buttonGroupClasses} hidden lg:max-xl:flex`}>
          <ButtonGroup />
        </div>
      </div>

      {/* Intro Extended Text */}
      <div className="flex flex-1 flex-col items-start gap-2.5 lg:max-w-[710px]">
        <h3 className="text-lake-blue-950 w-full">Why I Love What I Do</h3>
        <p className="text-body-lg">
          What I love most about UX design is{" "}
          <span className="font-bold">
            the chance to solve real problems for real people
          </span>
          . Empathy is at the heart of everything I do - I genuinely enjoy
          listening to users, uncovering their challenges, and{" "}
          <span className="font-bold">
            designing solutions that feel intuitive and meaningful
          </span>
          . Seeing users engage with something I've helped create and knowing it
          made a positive difference is what keeps me passionate about this work
          every day.
        </p>
        <p className="text-body-lg">
          My{" "}
          <span className="font-bold">background in front-end development</span>{" "}
          gives me a practical lens through which I approach design: I
          understand what's possible technically, which helps me design
          solutions that are not only beautiful but also practical to implement.
          I've led user research, built design systems, conducted usability
          testing, and collaborated closely with developers, product managers,
          and stakeholders to{" "}
          <span className="font-bold">
            turn ideas into impactful experiences
          </span>
          .
        </p>
        <p className="text-body-lg">
          I'm big on mentoring, clear communication, and always{" "}
          <span className="font-bold">
            staying curious about how to improve
          </span>{" "}
          both the product and the process. Whether I'm mapping user flows,
          wireframing in Figma, or digging into data to guide design decisions,
          my goal is always the same: to{" "}
          <span className="font-bold">make things better for the user</span>.
        </p>

        {/* Button Group - Mobile */}
        <div className={`${buttonGroupClasses} flex lg:max-xl:hidden`}>
          <ButtonGroup />
        </div>
      </div>
    </section>
  );
}
