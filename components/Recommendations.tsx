import { ReactNode } from "react";

import Link from "next/link";
import { Routes } from "../components/Routes";

interface RecommendationProps {
  quote: ReactNode;
  author: string;
}

function Recommendation({ quote, author }: RecommendationProps) {
  const quotationClasses =
    "text-tree-green-300 font-serif text-[120px] font-normal leading-none select-none z-10";

  return (
    <div className="flex flex-col items-start gap-4 lg:w-1/2">
      <div className="relative w-full p-7 pb-0">
        {/* Opening Quote */}
        <div className={`${quotationClasses} absolute -left-0 -top-0`}>“</div>

        {/* Closing Quote */}
        <div
          className={`${quotationClasses} absolute -bottom-6 -right-0 rotate-180`}
        >
          “
        </div>

        {/* Quote Text */}
        <div className="z-20 w-full">{quote}</div>
      </div>

      {/* Author */}
      <div className="text-body-lg z-20 w-full px-7 text-right">{author}</div>
    </div>
  );
}

export default function Recommendations() {
  const recommendations = [
    {
      quote: (
        <>
          Crystalynn has an{" "}
          <span className="font-bold">outstanding ability</span> to{" "}
          <span className="font-bold">translate complex user needs</span> into{" "}
          <span className="font-bold">
            intuitive & visually compelling interfaces
          </span>
          . She is highly skilled in wireframing, prototyping, and front-end
          collaboration, ensuring seamless interactions across teams. I
          wholeheartedly recommend Crystalynn for any UX/UI design role.
        </>
      ),
      author: "- Scott S., Director of Software Development",
    },
    {
      quote: (
        <>
          With a strong foundation in HTML and CSS, Crystalynn brought a deep
          passion for creating clean, accessible, and user-centric interfaces.
          She{" "}
          <span className="font-bold">not only implemented great design</span> —{" "}
          <span className="font-bold">she also helped shape it</span>. Her
          ability to translate user needs into elegant, responsive solutions
          made her a{" "}
          <span className="font-bold">key player on every project</span> she
          touched.
        </>
      ),
      author: "- Brad B., Director of Digital Marketing & Customer Experience",
    },
    {
      quote: (
        <>
          Crystalynn consistently demonstrates{" "}
          <span className="font-bold">exceptional leadership skills</span> and a
          remarkable dedication to her craft. Her{" "}
          <span className="font-bold">ability to empathize with users</span> and
          think through problems from their perspective has{" "}
          <span className="font-bold">
            significantly enhanced the user experience
          </span>{" "}
          of the digital products we support.
        </>
      ),
      author: "- Shannon M., Lead UX Designer",
    },
    {
      quote: (
        <>
          It's not often you come across a talent like Crystalynn. She is not
          only{" "}
          <span className="font-bold">
            technically skilled and incredibly fast
          </span>{" "}
          at delivering robust solutions, but she also brings a level of{" "}
          <span className="font-bold">enthusiasm and creativity</span> that{" "}
          <span className="font-bold">makes collaboration a complete joy</span>.
          She is a team player through and through, always ready to lend a hand
          or share her knowledge.
        </>
      ),
      author: "- Joel E., Senior Creative Director of Global Marketing",
    },
    {
      quote: (
        <>
          Crystalynn consistently demonstrated{" "}
          <span className="font-bold">
            exceptional kindness, reliability, and professionalism
          </span>{" "}
          in her work. Her ability to{" "}
          <span className="font-bold">collaborate effectively</span> with
          colleagues from different teams underscores her{" "}
          <span className="font-bold">
            adaptability and team-oriented mindset
          </span>
          . She is a true asset to any team lucky enough to have her.
        </>
      ),
      author: "- Brandon L., Scrum Master",
    },
    {
      quote: (
        <>
          Crystalynn brings so much{" "}
          <span className="font-bold">knowledge, passion, and strength</span> to
          her position. She is a{" "}
          <span className="font-bold">fantastic mentor and team player</span>.
          She's a creative problem-solver and she's not afraid to face whatever
          challenge her team or department is facing. Crystalynn{" "}
          <span className="font-bold">
            doesn't ask her team to do anything that she's not willing to do
            herself
          </span>
          .
        </>
      ),
      author: "- Jennifer B., Agile Practice & UX Manager",
    },
  ];

  return (
    <div className="flex w-full max-w-[1440px] flex-col items-center gap-6">
      {/* Header */}
      <div className="flex w-full flex-col items-end gap-2.5">
        <h4 className="gradient-green-to-blue-horizontal w-full text-center">
          "What we know matters, but who we are matters more."
        </h4>
        <h5 className="text-right">- Brene Brown</h5>
      </div>

      {/* Recommendations Grid */}
      <div className="flex w-full flex-wrap items-start justify-center gap-6 lg:gap-0">
        {recommendations.map((rec, index) => (
          <Recommendation key={index} quote={rec.quote} author={rec.author} />
        ))}
      </div>

      {/* Button Group */}
      <div className="smmdd:flex-row flex w-full flex-col gap-2.5 md:justify-center md:gap-5">
        {/* TODO: Add button back when About page is built */}
        <Link href={Routes.about} className="button button-secondary hidden">
          More About Me
        </Link>
        <Link href={Routes.contact} className="button button-primary">
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
