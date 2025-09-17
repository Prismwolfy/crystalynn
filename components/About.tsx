import { useState } from "react";

export default function Index() {
  const [showMoreReviews, setShowMoreReviews] = useState(false);
  const [showMoreReviewsSecond, setShowMoreReviewsSecond] = useState(false);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[360px] flex-col bg-white md:max-w-4xl lg:max-w-6xl">
      {/* Why I Love What I Do Section */}
      <section className="flex w-full flex-wrap items-start justify-center gap-6 px-4 pb-6">
        <div className="flex min-w-[360px] flex-col items-center gap-2.5">
          <svg
            width="360"
            height="250"
            viewBox="0 0 360 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex min-w-[360px] flex-col items-center gap-2.5"
          >
            <circle
              cx="180"
              cy="125"
              r="122.5"
              fill="url(#pattern0_757_2595)"
              stroke="url(#paint0_linear_757_2595)"
              strokeWidth="5"
            />
            <defs>
              <pattern
                id="pattern0_757_2595"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_757_2595"
                  transform="translate(0 -0.166667) scale(0.000520833)"
                />
              </pattern>
              <linearGradient
                id="paint0_linear_757_2595"
                x1="283.658"
                y1="0.000656504"
                x2="283.659"
                y2="250"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#55B95F" />
                <stop offset="1" stopColor="#31579C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
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
              . Seeing users engage with something I've helped create and
              knowing it made a positive difference is what keeps me passionate
              about this work every day.
            </span>
          </div>
          <div className="text-cm-navy font-poppins w-full text-xl font-normal leading-normal">
            <span className="font-normal">My </span>
            <span className="font-bold">
              background in front-end development
            </span>
            <span className="font-normal">
              {" "}
              gives me a practical lens through which I approach design: I
              understand what's possible technically, which helps me design
              solutions that are not only beautiful but also practical to
              implement. I've led user research, built design systems, conducted
              usability testing, and collaborated closely with developers,
              product managers, and stakeholders to{" "}
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

      {/* Career Journey Section */}
      <section className="bg-cm-light-blue flex w-full flex-wrap items-start justify-center gap-6 px-4 py-6">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-[15px]">
          <h2 className="text-cm-navy font-belanosima w-full text-[39px] font-normal uppercase leading-none">
            My Journey So Far
          </h2>
          <div className="text-cm-navy font-poppins w-full text-base font-normal leading-normal">
            <span className="font-normal">
              My career in design and development began with a strong foundation
              in front-end technologies and a{" "}
            </span>
            <span className="font-bold">
              passion for creating meaningful, user-focused digital experiences
            </span>
            <span className="font-normal">
              . I started out designing and coding custom websites at smaller
              agencies like Heritage Web Solutions and Infogenix, where I
              quickly developed a{" "}
            </span>
            <span className="font-bold">
              reputation for attention to detail, cross-functional
              collaboration, and a deep understanding of user needs
            </span>
            <span className="font-normal">
              . Over time, I expanded my skill set to include responsive design,
              information architecture, and UX research. Through roles at
              startup companies like 23 Lines and my volunteer work with LTUE, I
              gained valuable experience leading projects, improving usability,
              and aligning visual design with brand identity.
            </span>
          </div>
          <div className="text-cm-navy font-poppins w-full text-base font-normal leading-normal">
            <span className="font-normal">
              In 2016, I joined Modere, where my role evolved from a front-end
              developer to lead UX developer and eventually to Manager of
              Front-End Development. There, I led{" "}
            </span>
            <span className="font-bold">high-impact projects</span>
            <span className="font-normal">
              {" "}
              including enterprise CMS migrations, design system implementation,
              and a unified branding strategy - all while{" "}
            </span>
            <span className="font-bold">mentoring a talented team</span>
            <span className="font-normal"> and </span>
            <span className="font-bold">
              advocating for a user-centered design approach
            </span>
            <span className="font-normal">
              {" "}
              at every level of the organization. My ability to bridge design
              and development helped streamline collaboration between teams and
              ensure cohesive, accessible user experiences across multiple
              global platforms.
            </span>
          </div>
          <div className="text-cm-navy font-poppins w-full text-base font-normal leading-normal">
            <span className="font-normal">Today, I bring </span>
            <span className="font-bold">over a decade of experience</span>
            <span className="font-normal">, a strategic mindset, and a </span>
            <span className="font-bold">passion for empathetic design</span>
            <span className="font-normal"> to every project I take on.</span>
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col items-start gap-5">
          <h2 className="text-cm-navy font-belanosima w-full text-[39px] font-normal uppercase leading-none">
            Proven Skills
          </h2>
          <div className="flex w-full flex-wrap items-start gap-2.5">
            {[
              "User Experience Design",
              "User Research",
              "Usability Testing",
              "User Interaction Design",
              "Information Architecture",
              "Figma | Sketch",
              "Prototypes",
              "Wireframes",
              "User Flows",
              "Collaboration",
              "Communication",
              "Iterative Design",
              "Agile | Scrum | Kanban",
              "Leadership",
              "Strategic Problem-Solving",
            ].map((skill, index) => (
              <div
                key={index}
                className="border-cm-pill-border bg-cm-pill-bg flex items-center justify-center gap-2.5 rounded-md border px-4 py-2"
              >
                <span className="text-cm-navy font-poppins text-xl font-normal leading-normal">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="flex w-full flex-wrap items-start justify-center gap-4 px-4 py-6">
        <div className="flex w-[325px] min-w-[325px] max-w-[325px] flex-col items-center gap-2.5">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/cf195a3b1898db69e38eea66eaa882794ddb791f?width=650"
            alt="Recognition"
            className="h-[406.25px] max-h-[500px] w-full max-w-[325px] rounded-md object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
          <div className="flex w-full flex-col items-center gap-5">
            <h2 className="font-belanosima from-cm-green to-cm-blue w-full bg-gradient-to-r bg-clip-text text-[31px] font-normal uppercase leading-none text-transparent">
              <span>Modere MVP Award </span>
              <span>Nominations</span>
            </h2>
            <div className="text-cm-navy font-poppins w-full text-base font-normal leading-normal">
              <span className="font-normal">The </span>
              <span className="font-bold">MVP Award at Modere</span>
              <span className="font-normal">
                {" "}
                is a prestigious honor given to only eight employees each year
                who embody the company's core values - compassion, humility,
                authenticity, vibrancy, innovation, and excellence. Being
                nominated four times{" "}
              </span>
              <span className="font-bold">by my peers</span>
              <span className="font-normal">
                {" "}
                highlights my consistent dedication to going above and beyond,
                positively impacting both team culture and company success
                through leadership, collaboration, and integrity.
              </span>
            </div>
            <div className="text-cm-navy font-poppins w-full text-base font-normal leading-normal">
              Direct quotes from my peers about why they nominated me:
            </div>
            <div className="flex w-full flex-col items-start gap-5">
              <div className="text-cm-navy font-poppins w-full text-base font-normal leading-7">
                <span className="font-normal">
                  "Crystal is our primary Front End Developer and Manager.{" "}
                </span>
                <span className="font-bold">
                  Crystal's influence is felt in every project we undertake.
                </span>
                <span className="font-normal">
                  {" "}
                  As an example, her ability to rally and organize diverse
                  people and teams during content migrations is truly
                  impressive. She not only provides clear instructions and
                  guidance but also meticulously tracks progress, ensuring that
                  no detail is overlooked. Crystal's{" "}
                </span>
                <span className="font-bold">commitment to excellence</span>
                <span className="font-normal">
                  {" "}
                  is evident in her proactive approach to coding, always
                  considering future requirements and potential challenges to
                  create flexible and high-quality digital products which{" "}
                </span>
                <span className="font-bold">
                  reduces cost and work time in the future
                </span>
                <span className="font-normal">."</span>
              </div>
              <div className="text-cm-navy font-poppins w-full text-base font-normal leading-7">
                <span className="font-normal">"Crystal has been </span>
                <span className="font-bold">
                  the driving force behind countless improvements to Modere
                  websites and improvements in how we work and the type of work
                  we do
                </span>
                <span className="font-normal">
                  . She is always looking for and completing projects that
                  affect everyone's work and work-life in a positive way."
                </span>
              </div>
              <div className="text-cm-navy font-poppins w-full text-base font-normal leading-7">
                <span className="font-normal">"Her ability to </span>
                <span className="font-bold">
                  empathize with users and think through problems
                </span>
                <span className="font-normal">
                  {" "}
                  from their perspective has{" "}
                </span>
                <span className="font-bold">
                  significantly enhanced the user experience
                </span>
                <span className="font-normal">
                  {" "}
                  of the digital products we support at Modere.{" "}
                </span>
                <span className="font-bold">
                  Her insights and guidance are invaluable
                </span>
                <span className="font-normal">
                  {" "}
                  in shaping our projects for success."
                </span>
              </div>
              <div className="text-cm-navy font-poppins w-full text-base font-normal leading-7">
                <span className="font-bold">
                  "Crystal has contributed much to the Modere websites and
                  Modere as a company.
                </span>
                <span className="font-normal">
                  {" "}
                  She has worked hard during the first part of this year making
                  sure that all of the SRC content was in place on the website,
                  and she has stayed up many late nights to do so. All
                  while{" "}
                </span>
                <span className="font-bold">producing excellent work</span>
                <span className="font-normal"> with very little sleep."</span>
              </div>
              <div className="text-cm-navy font-poppins w-full text-base font-normal leading-7">
                <span className="font-normal">
                  "Beyond her technical expertise, Crystal's{" "}
                </span>
                <span className="font-bold">
                  approachability and friendly demeanor foster a collaborative
                  and inclusive work environment
                </span>
                <span className="font-normal">
                  . She effortlessly builds rapport with colleagues and is{" "}
                </span>
                <span className="font-bold">always open to feedback</span>
                <span className="font-normal">
                  , making her a pleasure to work with and facilitate effective
                  problem-solving and compromise."
                </span>
              </div>
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
        </div>
      </section>

      {/* Horizontal Divider */}
      <div className="flex h-0 w-full max-w-[1230px] items-center justify-center">
        <svg
          width="362"
          height="2"
          viewBox="0 0 362 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1.25H361" stroke="#80B5D1" strokeLinecap="round" />
        </svg>
      </div>

      {/* Performance Reviews Section */}
      <section className="flex w-full flex-col items-center gap-6 px-4 py-6">
        <div className="flex w-full flex-col items-center gap-2.5">
          <h2 className="font-belanosima from-cm-green to-cm-blue w-full bg-gradient-to-r bg-clip-text text-center text-[31px] font-normal uppercase leading-none text-transparent">
            Performance Review Results
          </h2>
        </div>
        <div className="flex w-full flex-col items-center gap-6">
          <div className="flex w-full flex-wrap items-start justify-center gap-6">
            {[
              {
                text: '"Crystal\'s skills were very helpful in translating UX designs into a functional ecommerce site. Her exceptional organizational skills and clear communication have been invaluable. Her ability to keep projects on track and ensure alignment has significantly enhanced our workflow."',
                author: "- Scott S., Manager (2025)",
              },
              {
                text: '"Crystal took initiative and provided leadership and solutions for migrating existing content. Not only did she provide leadership to a newly formed team but she also worked with them to transition content from the current CMS into Contentstack. Alongside that process, she collaborated with Marketing to craft assets for the newly designed areas of the website."',
                author: "- Scott S., Manager (2024)",
              },
              {
                text: '"Crystal shows excellent attention to detail and consistently delivers high-quality work. She is committed to continuous improvement and consistently seeks development and learning opportunities. She can be relied on to do whatever she can to help current projects and produce top-quality work, contributing significantly to their success."',
                author: "- Scott S., Manager (2024)",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-cm-light-green flex w-[325px] flex-col items-center gap-2.5 rounded-md px-6 py-6"
              >
                <div className="text-cm-navy font-poppins w-full min-w-[75px] text-xl font-normal leading-normal">
                  {review.text.split(" ").map((word, wordIndex) => {
                    const boldWords = [
                      "translating",
                      "UX",
                      "designs",
                      "functional",
                      "ecommerce",
                      "site",
                      "keep",
                      "projects",
                      "track",
                      "ensure",
                      "alignment",
                      "took",
                      "initiative",
                      "provided",
                      "leadership",
                      "collaborated",
                      "Marketing",
                      "excellent",
                      "attention",
                      "detail",
                      "committed",
                      "continuous",
                      "improvement",
                      "produce",
                      "top-quality",
                      "work",
                    ];
                    const isBold = boldWords.some((boldWord) =>
                      word.toLowerCase().includes(boldWord.toLowerCase()),
                    );
                    return (
                      <span
                        key={wordIndex}
                        className={isBold ? "font-bold" : "font-normal"}
                      >
                        {word}
                        {wordIndex < review.text.split(" ").length - 1
                          ? " "
                          : ""}
                      </span>
                    );
                  })}
                </div>
                <div className="text-cm-navy font-poppins w-full min-w-[75px] text-right text-base font-normal leading-normal">
                  {review.author}
                </div>
              </div>
            ))}
          </div>
          {!showMoreReviews && (
            <button
              onClick={() => setShowMoreReviews(true)}
              className="bg-cm-dark-blue flex min-w-[328px] max-w-full items-center justify-center gap-5 rounded-md px-10 py-2.5"
            >
              <span className="text-cm-light-text font-poppins text-xl font-bold leading-normal">
                See More Reviews
              </span>
            </button>
          )}

          {showMoreReviews && (
            <>
              <div className="flex w-full flex-wrap items-start justify-center gap-2.5">
                {[
                  {
                    text: '"Crystal provided development expertise and UX experience during the design phase, shaping a more streamlined user experience. She worked with numerous other departments and third parties during the website re-design process to help design a site that was more mobile-friendly with an updated customer experience directed by the customers themselves. She continues to provide development direction as content is added and migrated."',
                    author: "- Scott S., Manager (2024)",
                  },
                  {
                    text: '"Crystal, your work over the past six months has been truly remarkable. Your dedication to excellence in UX/UI design has significantly enhanced our projects and user experiences. Your meticulous attention to detail and collaborative spirit have made a lasting impact on our team. Thank you for your hard work, creativity, and unwavering commitment. Your contributions are greatly appreciated, and I look forward to seeing you continue to achieve great things at Modere. Keep up the fantastic work!"',
                    author: "- Scott S., Manager (2025)",
                  },
                ].map((review, index) => (
                  <div
                    key={index}
                    className="bg-cm-light-green flex w-[325px] flex-col items-center gap-2.5 rounded-md px-6 py-6"
                  >
                    <div className="text-cm-navy font-poppins w-full min-w-[75px] text-xl font-normal leading-normal">
                      {review.text.split(" ").map((word, wordIndex) => {
                        const boldWords = [
                          "development",
                          "expertise",
                          "UX",
                          "experience",
                          "design",
                          "mobile-friendly",
                          "updated",
                          "customer",
                          "experience",
                          "dedication",
                          "excellence",
                          "UX/UI",
                          "design",
                          "hard",
                          "work",
                          "creativity",
                          "unwavering",
                          "commitment",
                        ];
                        const isBold = boldWords.some((boldWord) =>
                          word.toLowerCase().includes(boldWord.toLowerCase()),
                        );
                        return (
                          <span
                            key={wordIndex}
                            className={isBold ? "font-bold" : "font-normal"}
                          >
                            {word}
                            {wordIndex < review.text.split(" ").length - 1
                              ? " "
                              : ""}
                          </span>
                        );
                      })}
                    </div>
                    <div className="text-cm-navy font-poppins w-full min-w-[75px] text-right text-base font-normal leading-normal">
                      {review.author}
                    </div>
                  </div>
                ))}
              </div>

              {!showMoreReviewsSecond && (
                <button
                  onClick={() => setShowMoreReviewsSecond(true)}
                  className="bg-cm-dark-blue flex min-w-[328px] max-w-full items-center justify-center gap-5 rounded-md px-10 py-2.5"
                >
                  <span className="text-cm-light-text font-poppins text-xl font-bold leading-normal">
                    See More Reviews
                  </span>
                </button>
              )}

              {showMoreReviewsSecond && (
                <div className="flex w-full flex-wrap items-start justify-center gap-6">
                  {[
                    {
                      text: '"Crystal is constantly taking the initiative in not only identifying problems but working to create solutions for them immediately. She has shown dedication toward solving problems and her practical approach of breaking down large concepts into smaller, more manageable tasks allows for her to clearly and concisely report on possible solutions before taking action on one."',
                      author: "- Scott S., Manager (2024)",
                    },
                    {
                      text: '"Crystal worked with the software development team to architect an updated Shifting Retail Enrollment process that matched newer technologies and created a streamlined design system and robust enrollment flow. She proactively sought solutions and documented decisions to keep others informed and the project running smoothly."',
                      author: "- Scott S., Manager (2024)",
                    },
                  ].map((review, index) => (
                    <div
                      key={index}
                      className="bg-cm-light-green flex w-[325px] flex-col items-center gap-2.5 rounded-md px-6 py-6"
                    >
                      <div className="text-cm-navy font-poppins w-full min-w-[75px] text-xl font-normal leading-normal">
                        {review.text.split(" ").map((word, wordIndex) => {
                          const boldWords = [
                            "constantly",
                            "taking",
                            "initiative",
                            "dedication",
                            "solving",
                            "problems",
                            "matched",
                            "newer",
                            "technologies",
                            "streamlined",
                            "design",
                            "system",
                            "robust",
                            "enrollment",
                            "flow",
                          ];
                          const isBold = boldWords.some((boldWord) =>
                            word.toLowerCase().includes(boldWord.toLowerCase()),
                          );
                          return (
                            <span
                              key={wordIndex}
                              className={isBold ? "font-bold" : "font-normal"}
                            >
                              {word}
                              {wordIndex < review.text.split(" ").length - 1
                                ? " "
                                : ""}
                            </span>
                          );
                        })}
                      </div>
                      <div className="text-cm-navy font-poppins w-full min-w-[75px] text-right text-base font-normal leading-normal">
                        {review.author}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
