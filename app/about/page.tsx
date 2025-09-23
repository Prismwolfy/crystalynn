"use client";

import Layout from "../layout/mainLayout";
import IntroExtended from "../../components/IntroExtended";
import CareerJourney from "../../components/CareerJourney";
import Recognition from "../../components/Recognition";
import PerformanceReviews from "../../components/PerformanceReviews";
import Recommendations from "../../components/Recommendations";
import { Routes } from "../../components/Routes";
import { LayoutClasses } from "../../components/LayoutClasses";

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
      {/* 
      <section
        id="recognition"
        className={`${LayoutClasses.marginDoubleClasses} ${LayoutClasses.marginVerticalClasses} ${LayoutClasses.additionalClasses}`}
      >
        <Recognition />
      </section>
      */}

      {/* Horizontal Divider */}
      {/* 
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
      */}

      {/* Performance Reviews Section */}
      {/* 
      <section
        id="performance-reviews"
        className={`${LayoutClasses.marginDoubleClasses} ${LayoutClasses.marginVerticalClasses} ${LayoutClasses.additionalClasses}`}
      >
        <PerformanceReviews />
      </section>
      */}

      {/* Recommendations Section */}
      <section
        id="recommendations-about-page"
        className={`${LayoutClasses.marginClasses} ${LayoutClasses.marginVerticalClasses} bg-sky-blue-100 flex w-full justify-center`}
      >
        <Recommendations />
      </section>
    </Layout>
  );
}
