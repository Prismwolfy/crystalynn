import { useState, useEffect } from "react";

interface Review {
  quote: React.ReactNode;
  authorName: string;
  authorTitle: string;
  authorYear: string;
}

interface ReviewsProps {
  classes?: string;
  id?: string;
  reviews: Review[];
}

export default function PerformanceReviews({
  classes,
  id,
  reviews,
}: ReviewsProps) {
  const [showMoreReviews, setShowMoreReviews] = useState(false);
  const [showMoreReviewsSecond, setShowMoreReviewsSecond] = useState(false);
  const [reviewsToShow, setReviewsToShow] = useState(6);

  const recognitionBoxClasses =
    "bg-tree-green-300 rounded-md p-6 gap-2.5 flex flex-col lg:w-[calc(50%-8px)] xl:[&:nth-child(n+2):nth-child(-n+4)]:w-[calc(33.33%-12px)] xl:[&:nth-child(n+7):nth-child(-n+9)]:w-[calc(33.33%-12px)]";

  useEffect(() => {
    function calculateReviewsToShow() {
      const isDesktop = window.innerWidth >= 1440;

      // Base count
      let count = isDesktop ? 5 : 6;

      // Show more logic with different increments for desktop
      if (showMoreReviews) count += isDesktop ? 5 : 4;
      if (showMoreReviewsSecond) count += isDesktop ? 2 : 2;

      setReviewsToShow(count);
    }

    // Run once on mount and whenever dependencies change
    calculateReviewsToShow();

    // Update dynamically on resize
    window.addEventListener("resize", calculateReviewsToShow);
    return () => window.removeEventListener("resize", calculateReviewsToShow);
  }, [showMoreReviews, showMoreReviewsSecond]);

  return (
    <div
      id={id}
      className={`${classes} flex w-full flex-col items-center gap-4 lg:flex-row lg:flex-wrap lg:items-start`}
    >
      <h4 className="gradient-green-to-blue-horizontal text-center text-[31px] leading-8 lg:w-full">
        Performance Review Results
      </h4>
      {reviews.slice(0, reviewsToShow).map((review, idx) => (
        <div key={idx} className={recognitionBoxClasses + " animate-fade-in"}>
          <div className="text-lg">"{review.quote}"</div>
          <div className="w-full text-right text-base">
            - {review.authorName}, {review.authorTitle} ({review.authorYear})
          </div>
        </div>
      ))}
      {!showMoreReviews && reviews.length > 6 && (
        <div className="w-full text-center">
          <button
            className="button button-primary"
            onClick={() => setShowMoreReviews(true)}
          >
            See More Reviews
          </button>
        </div>
      )}
      {showMoreReviews && !showMoreReviewsSecond && reviews.length > 10 && (
        <div className="w-full text-center">
          <button
            className="button button-primary"
            onClick={() => setShowMoreReviewsSecond(true)}
          >
            See More Reviews
          </button>
        </div>
      )}
    </div>
  );
}
