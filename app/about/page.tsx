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
        id="recommendations"
        className={`${LayoutClasses.marginClasses} ${LayoutClasses.marginVerticalClasses} bg-sky-blue-100 flex w-full justify-center`}
      >
        <Recommendations />
      </section>
    </Layout>
  );
}
