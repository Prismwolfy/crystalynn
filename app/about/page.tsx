"use client";

import Layout from "../layout/mainLayout";
import IntroExtended from "../../components/IntroExtended";
import CareerJourney from "../../components/CareerJourney";
import Recognition from "../../components/Recognition";
import PerformanceReviews from "../../components/PerformanceReviews";
import Recommendations from "../../components/Recommendations";
import { Routes } from "../../components/Routes";
import { LayoutClasses } from "../../components/LayoutClasses";
import { HorizontalRule } from "../../components/HorizontalRule";

const reviews = [
  {
    id: 1,
    quote: (
      <>
        Crystal's skills were very helpful in{" "}
        <strong>translating UX designs into a functional ecommerce site</strong>
        . Her exceptional organizational skills and clear communication have
        been invaluable. Her ability to{" "}
        <strong>keep projects on track and ensure alignment</strong> has
        significantly enhanced our workflow.
      </>
    ),
    authorName: "Scott S.",
    authorTitle: "Manager",
    authorYear: "2025",
  },
  {
    id: 2,
    quote: (
      <>
        Crystal <strong>took initiative and provided leadership</strong>
        and solutions for migrating existing content. Not only did she provide
        leadership to a newly formed team but she also worked with them to
        transition content from the current CMS into Contentstack. Alongside
        that process, she <strong>collaborated with Marketing</strong> to craft
        assets for the newly designed areas of the website.
      </>
    ),
    authorName: "Scott S.",
    authorTitle: "Manager",
    authorYear: "2024",
  },
  {
    id: 3,
    quote: (
      <>
        Crystal shows <strong>excellent attention to detail</strong> and
        consistently delivers high-quality work. She is{" "}
        <strong>committed to continuous improvement</strong> and consistently
        seeks development and learning opportunities. She can be relied on to do
        whatever she can to help current projects and{" "}
        <strong>produce top-quality work</strong>, contributing significantly to
        their success.
      </>
    ),
    authorName: "Scott S.",
    authorTitle: "Manager",
    authorYear: "2024",
  },
  {
    id: 4,
    quote: (
      <>
        Crystal is <strong>constantly taking the initiative</strong> in not only
        identifying problems but working to create solutions for them
        immediately. She has shown{" "}
        <strong>dedication toward solving problems</strong> and her practical
        approach of breaking down large concepts into smaller, more manageable
        tasks allows for her to clearly and concisely report on possible
        solutions before taking action on one.
      </>
    ),
    authorName: "Scott S.",
    authorTitle: "Manager",
    authorYear: "2024",
  },
  {
    id: 5,
    quote: (
      <>
        Crystal provided{" "}
        <strong>development expertise and UX experience</strong> during the
        design phase, shaping a more streamlined user experience. She worked
        with numerous other departments and third parties during the website
        re-design process to help{" "}
        <strong>
          design a site that was more mobile-friendly with an updated customer
          experience
        </strong>{" "}
        directed by the customers themselves. She continues to provide
        development direction as content is added and migrated.
      </>
    ),
    authorName: "Scott S.",
    authorTitle: "Manager",
    authorYear: "2024",
  },
  {
    id: 6,
    quote: (
      <>
        Crystal, your work over the past six months has been truly remarkable.
        Your <strong>dedication to excellence in UX/UI design</strong> has
        significantly enhanced our projects and user experiences. Your
        meticulous attention to detail and collaborative spirit have made a
        lasting impact on our team. Thank you for your{" "}
        <strong>hard work, creativity, and unwavering commitment</strong>. Your
        contributions are greatly appreciated, and I look forward to seeing you
        continue to achieve great things at Modere. Keep up the fantastic work!
      </>
    ),
    authorName: "Scott S.",
    authorTitle: "Manager",
    authorYear: "2025",
  },
  {
    id: 7,
    quote: (
      <>
        Crystal worked with the software development team to architect an
        updated Shifting Retail Enrollment process that{" "}
        <strong>
          matched newer technologies and created a streamlined design system and
          robust enrollment flow
        </strong>
        . She proactively sought solutions and documented decisions to keep
        others informed and the project running smoothly.
      </>
    ),
    authorName: "Scott S.",
    authorTitle: "Manager",
    authorYear: "2024",
  },
  {
    id: 8,
    quote: (
      <>
        Crystal, your{" "}
        <strong>dedication to mentoring and supporting your team</strong> is
        truly admirable. Your guidance has{" "}
        <strong>significantly contributed to their professional growth</strong>,
        and your feedback and development opportunities have made a lasting
        impact. Thank you for fostering talent and being an inspiring leader.
      </>
    ),
    authorName: "Scott S.",
    authorTitle: "Manager",
    authorYear: "2024",
  },
  {
    id: 9,
    quote: (
      <>
        One of the things that I admire about Crystal is her{" "}
        <strong>
          ability to speak clearly about how she understands a situation
        </strong>{" "}
        and how she sees the solution. Crystal is an integral part of the IT
        organization and an important contributor to our IT Team. Crystal has
        taken on the mentoring of other teammates and inspired excellence in
        their work. She is a{" "}
        <strong>creative problem solver and a great mentor</strong> to the
        Content team. I appreciate all of Crystal's ideas for solving problems
        that we face in IT.
      </>
    ),
    authorName: "Shan S.",
    authorTitle: "Manager",
    authorYear: "2021",
  },
  {
    id: 10,
    quote: (
      <>
        Crystal has been the{" "}
        <strong>main driver of the discovery and implementation</strong> of the
        ContentStack/CMS project. As technical advisor, she was{" "}
        <strong>instrumental in problem solving</strong> during implementation.
        She managed her team's Production Support requests and balanced that
        alongside Sprint work as well as collaborated to resolve issues that
        arose during the transition. Her voice is an important part of how we
        are successful as a department.
      </>
    ),
    authorName: "Scott S.",
    authorTitle: "Manager",
    authorYear: "2022",
  },
  {
    id: 11,
    quote: (
      <>
        Crystal is a miracle worker. Her team asked, time and again to work long
        and late hours to fill in gaps that are discovered late in the process.
        She is{" "}
        <strong>
          very organized, hardworking, and an indispensable member
        </strong>{" "}
        of the Modere team. Crystal has continued to manage three project teams,
        sudden content needs, and guild upheaval to support all needs with
        minimal resources. She has <strong>gone above and beyond</strong> to
        work overtime when needed and{" "}
        <strong>perform duties outside of her role</strong> to support market
        and development teams as needed.
      </>
    ),
    authorName: "Scott S.",
    authorTitle: "Manager",
    authorYear: "2023",
  },
  {
    id: 12,
    quote: (
      <>
        Crystal, your{" "}
        <strong>dedication to doing what's best for the company</strong> is
        truly commendable. Your efforts are greatly appreciated, and you
        continue to be a vital asset to our team. Your willingness to sacrifice
        your time for the greater good sets a remarkable example. Your{" "}
        <strong>
          commitment and selflessness have made a significant impact
        </strong>
        . Thank you for being such an inspiring and valuable team member.
      </>
    ),
    authorName: "Scott S.",
    authorTitle: "Manager",
    authorYear: "2025",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Intro Extended Section */}
      <section
        id="intro-extended"
        className={`${LayoutClasses.marginDoubleClasses} ${LayoutClasses.marginVerticalClasses} ${LayoutClasses.additionalClasses} margin-top-header-offset`}
      >
        <IntroExtended />
      </section>

      {/* Career Journey Section */}
      <section
        id="career-journey"
        className={`${LayoutClasses.marginClasses} ${LayoutClasses.marginVerticalClasses} bg-sky-blue-100 flex w-full justify-center`}
      >
        <CareerJourney />
      </section>

      {/* Recognition Section */}
      <section
        id="recognition"
        className={`${LayoutClasses.marginDoubleClasses} ${LayoutClasses.marginVerticalClasses} ${LayoutClasses.additionalClasses}`}
      >
        <Recognition />
      </section>

      {/* Horizontal Divider */}
      <HorizontalRule />

      {/* Performance Reviews Section */}
      <section
        id="performance-reviews"
        className={`${LayoutClasses.marginDoubleClasses} ${LayoutClasses.marginVerticalClasses} ${LayoutClasses.additionalClasses} flex flex-col gap-4`}
      >
        <PerformanceReviews reviews={reviews} />
      </section>

      {/* Recommendations Section */}
      <section
        id="recommendations"
        className={`${LayoutClasses.marginClasses} ${LayoutClasses.marginVerticalClasses} bg-sky-blue-100 flex w-full justify-center`}
      >
        <Recommendations />
      </section>
    </Layout>
  );
}
