import { useState } from "react";

export default function Recognition() {
  const [showMoreReviews, setShowMoreReviews] = useState(false);
  const [showMoreReviewsSecond, setShowMoreReviewsSecond] = useState(false);

  return (
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
                      {wordIndex < review.text.split(" ").length - 1 ? " " : ""}
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
  );
}
