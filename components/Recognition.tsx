import { Routes } from "../components/Routes";
import Link from "next/link";

export function MVPDefinition() {
  return (
    <>
      <p className="text-base">
        The <span className="font-bold">MVP Award at Modere</span> is a
        prestigious honor given to only eight employees each year who embody the
        company's core values - compassion, humility, authenticity, vibrancy,
        innovation, and excellence. Being nominated four times{" "}
        <span className="font-bold">by my peers</span> highlights my consistent
        dedication to going above and beyond, positively impacting both team
        culture and company success through leadership, collaboration, and
        integrity.
      </p>
    </>
  );
}

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

export default function Recognition() {
  const buttonGroupClasses =
    "mt-4 w-full flex-col md:flex-row lg:flex-col gap-4 justify-center";

  return (
    <section className="flex w-full flex-col flex-wrap items-center justify-center gap-4 md:gap-6 lg:flex-row lg:flex-nowrap lg:items-start lg:gap-14 xl:gap-24">
      {/* MVP Awards Image */}
      <div className="flex w-full flex-col items-center justify-center lg:w-auto lg:max-w-[400px] lg:flex-col">
        <div className="flex max-w-[325px] lg:max-w-[400px]">
          <img
            src="/images/crystalynn-meyer-mvp-awards.png?width=400"
            alt="Crystal Meyer - MVP Awards Recognition Letters"
            className="h-full w-full rounded-md"
          />
        </div>

        {/* MVP Definition - Desktop */}
        <div className="mt-4 hidden lg:flex">
          <MVPDefinition />
        </div>

        {/* Button Group - Desktop */}
        <div className={`${buttonGroupClasses} hidden lg:flex`}>
          <ButtonGroup />
        </div>
      </div>

      {/* Intro Extended Text */}
      <div className="flex flex-1 flex-col items-start gap-4 lg:max-w-[710px]">
        <h4 className="gradient-green-to-blue-horizontal text-[31px] leading-8">
          Modere MVP Award Nominations
        </h4>
        {/* MVP Definition - Mobile */}
        <div className="flex lg:hidden">
          <MVPDefinition />
        </div>
        <p className="text-base">
          Direct quotes from my peers about why they nominated me:
        </p>
        <p className="text-base">
          "Crystal is our primary Front End Developer and Manager.{" "}
          <span className="font-bold">
            Crystal's influence is felt in every project we undertake.
          </span>{" "}
          As an example, her ability to rally and organize diverse people and
          teams during content migrations is truly impressive. She not only
          provides clear instructions and guidance but also meticulously tracks
          progress, ensuring that no detail is overlooked. Crystal's{" "}
          <span className="font-bold">commitment to excellence</span> is evident
          in her proactive approach to coding, always considering future
          requirements and potential challenges to create flexible and
          high-quality digital products which{" "}
          <span className="font-bold">
            reduces cost and work time in the future
          </span>
          ."
        </p>
        <p className="text-base">
          "Crystal has been{" "}
          <span className="font-bold">
            the driving force behind countless improvements to Modere websites
            and improvements in how we work and the type of work we do
          </span>{" "}
          . She is always looking for and completing projects that affect
          everyone's work and work-life in a positive way."
        </p>
        <p className="text-base">
          "Her ability to{" "}
          <span className="font-bold">
            empathize with users and think through problems
          </span>{" "}
          from their perspective has{" "}
          <span className="font-bold">
            significantly enhanced the user experience
          </span>{" "}
          of the digital products we support at Modere.{" "}
          <span className="font-bold">
            Her insights and guidance are invaluable
          </span>{" "}
          in shaping our projects for success."
        </p>
        <p className="text-base">
          <span className="font-bold">
            "Crystal has contributed much to the Modere websites and Modere as a
            company.
          </span>{" "}
          She has worked hard during the first part of this year making sure
          that all of the SRC content was in place on the website, and she has
          stayed up many late nights to do so. All while{" "}
          <span className="font-bold">producing excellent work</span> with very
          little sleep."
        </p>
        <p className="text-base">
          "Beyond her technical expertise, Crystal's{" "}
          <span className="font-bold">
            approachability and friendly demeanor foster a collaborative and
            inclusive work environment
          </span>
          . She effortlessly builds rapport with colleagues and is{" "}
          <span className="font-bold">always open to feedback</span>, making her
          a pleasure to work with and facilitate effective problem-solving and
          compromise."
        </p>

        {/* Button Group - Mobile */}
        <div className={`${buttonGroupClasses} flex lg:hidden`}>
          <ButtonGroup />
        </div>
      </div>
    </section>
  );
}
