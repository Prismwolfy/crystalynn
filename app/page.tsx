import Layout from "./layout/mainLayout";
import Intro from "../components/Intro";
import Credentials from "../components/Credentials";
import ProjectExample from "../components/ProjectExample";
import Recommendations from "../components/Recommendations";
import { Routes } from "../components/Routes";
import { LayoutClasses } from "../components/LayoutClasses";

export default function Home() {
  return (
    <Layout>
      {/* Intro Section */}
      <section
        id="intro"
        className={`${LayoutClasses.marginDoubleClasses} ${LayoutClasses.marginVerticalClasses} ${LayoutClasses.additionalClasses} margin-top-header-offset`}
      >
        <Intro />
      </section>

      {/* Credentials Section */}
      <section
        id="credentials"
        className={`${LayoutClasses.marginClasses} ${LayoutClasses.marginVerticalClasses} ${LayoutClasses.additionalClasses}`}
      >
        <Credentials />
      </section>

      {/* Examples/Projects Section */}
      <section
        id="recent-projects"
        className={`flex w-full flex-col items-center`}
      >
        <ProjectExample
          classes={`${LayoutClasses.marginClasses} ${LayoutClasses.marginVerticalClasses}`}
          id="ltue"
          subheader="Life, the Universe, & Everything"
          header="Branding and Website Redesign"
          description="I completed a branding and website redesign for the LTUE writing symposium, creating a modern logo, cohesive style guide, and WordPress site tailored to younger, tech-savvy writers. I combined user research, streamlined navigation, and bold visual design to elevate the event’s digital presence and boost audience engagement."
          imageUrl="/images/example-ltue.png?width=1000"
          imagePosition="left"
          background="sky"
          buttonText="Read the Case Study"
          buttonUrl={Routes.caseStudyLtue}
        />

        <ProjectExample
          classes={`${LayoutClasses.marginClasses} ${LayoutClasses.marginVerticalClasses}`}
          id="road-trippin"
          subheader="Road Trippin'"
          header="Mobile App Design"
          description="For Road Trippin', I created a mobile-friendly web app that transforms road trip games like the classic license plate game into a shared digital experience for families, couples, and travelers. I designed an offline-first, quick-tap interface with vibrant visuals and the result was a simple, fun, and practical app that increases interaction and promotes an exciting, collaborative travel experience."
          imageUrl="/images/example-road-trippin.png?width=1000"
          imagePosition="right"
          background="default"
          buttonText="View the Prototype"
          buttonUrl="https://www.figma.com/proto/YFlGLxyu2YiNyFxL59PSHU/Road-Trippin-?t=YAopWQ9vwkdX3nym-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=1-2235"
        />

        <ProjectExample
          classes={`${LayoutClasses.marginClasses} ${LayoutClasses.marginVerticalClasses}`}
          id="bookshelf"
          subheader="Bookshelf"
          header="Website Design"
          description="For Bookshelf, I designed a minimalist personal library web app that gives readers a calm, private space to curate their collections - free from the noise of social feeds and unnecessary features. I streamlined book entry, added intuitive tagging, and fashioned a warm, clean, distraction-free interface."
          imageUrl="/images/example-bookshelf.png?width=1000"
          imagePosition="left"
          background="sky"
          buttonText="View the Preview Designs"
          buttonUrl="https://www.figma.com/proto/kguIbD8Om5asJX12mIALyG/Bookshelf?node-id=110-774&p=f&t=Kl0jqG5636kxgmQJ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
        />
        {/* TODO: Unhide Modere when content is ready - don't forget nav */}
        <ProjectExample
          classes={`${LayoutClasses.marginClasses} ${LayoutClasses.marginVerticalClasses} hidden`}
          id="modere"
          subheader="Modere"
          header="Updated Design System"
          description="This is a paragraph about the client and project that expands a bit on what was done for them. Short and to the point, it should include key words but not so much that it's a chore to read. Include all the different things that was part of this project and what I learned while working on this project to entice the viewer to click the link below."
          imageUrl="/images/example-design-system.png?width=1000"
          imagePosition="right"
          background="default"
          buttonText="See Design System"
          buttonUrl="https://www.figma.com/proto/LUrPeaALmjR8qwoVDD5CHD/LTUE-Case-Study-2024?node-id=1-74&t=FwAeN1Of5CJ05uFT-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
        />
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
