import Header from "../components/Header";
import Hero from "../components/Hero";
import Credentials from "../components/Credentials";
import ProjectExample from "../components/ProjectExample";
import Recommendations from "../components/Recommendations";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

export default function Home() {

  const marginClasses = 'px-4 md:px-6 lg:px-14 xl:px-24'
  const marginDoubleClasses = 'px-4 md:px-6 lg:px-28 xl:px-48'
  const marginVerticalClasses = 'py-6 md:py-8 lg:py-12 xl:py-14'
  const additionalClasses = 'w-full max-w-[1440px]'

  return (
    <div className="flex flex-col items-center w-full mx-auto">
      <div className="fixed top-0 left-0 bg-white border-1 border-t-0 border-l-0 border-lake-blue-950 p-2 z-2000">
        <span className="md:hidden">Mobile</span>
        <span className="hidden md:max-lg:block">Tablet</span>
        <span className="hidden lg:max-xl:block">Desktop Small</span>
        <span className="hidden xl:block">Desktop</span>
      </div>

      {/* Header */}
      <div id="header" className={`${marginClasses} ${marginVerticalClasses} ${additionalClasses}`}>
        <Header />
      </div>

      {/* Hero/Intro Section */}
      <section id="intro" className={`${marginDoubleClasses} ${additionalClasses}`}>
        <Hero />
      </section>

      {/* Credentials Section */}
      <section id="credentials" className={`${marginClasses} ${marginVerticalClasses} ${additionalClasses}`}>
        <Credentials />
      </section>

      {/* Examples/Projects Section */}
      <section
        id="recent-projects" 
        className={`w-full flex flex-col items-center`}
      >
        <ProjectExample
          classes={`${marginClasses} ${marginVerticalClasses}`}
          subheader="Life, the Universe, & Everything"
          header="Branding and Website Redesign"
          description="This is a paragraph about the client and project that expands a bit on what was done for them. Short and to the point, it should include key words but not so much that it's a chore to read. Include all the different things that was part of this project and what I learned while working on this project to entice the viewer to click the link below."
          imageUrl="/images/example-ltue.png?width=1000"
          imagePosition="left"
          background="sky"
          buttonText="See Redesign"
        />

        <ProjectExample
          classes={`${marginClasses} ${marginVerticalClasses}`}
          subheader="Road Trippin'"
          header="Mobile App Design"
          description="This is a paragraph about the client and project that expands a bit on what was done for them. Short and to the point, it should include key words but not so much that it's a chore to read. Include all the different things that was part of this project and what I learned while working on this project to entice the viewer to click the link below."
          imageUrl="/images/example-road-trippin.png?width=1000"
          imagePosition="right"
          background="default"
          buttonText="See App Designs"
        />

        <ProjectExample
          classes={`${marginClasses} ${marginVerticalClasses}`}
          subheader="Bookshelf"
          header="Website Design"
          description="This is a paragraph about the client and project that expands a bit on what was done for them. Short and to the point, it should include key words but not so much that it's a chore to read. Include all the different things that was part of this project and what I learned while working on this project to entice the viewer to click the link below."
          imageUrl="/images/example-bookshelf.png?width=1000"
          imagePosition="left"
          background="sky"
          buttonText="See Website Design"
        />

        <ProjectExample
          classes={`${marginClasses} ${marginVerticalClasses}`}
          subheader="Modere"
          header="Updated Design System"
          description="This is a paragraph about the client and project that expands a bit on what was done for them. Short and to the point, it should include key words but not so much that it's a chore to read. Include all the different things that was part of this project and what I learned while working on this project to entice the viewer to click the link below."
          imageUrl="/images/example-design-system.png?width=1000"
          imagePosition="right"
          background="default"
          buttonText="See Design System"
        />
      </section>

      {/* Recommendations Section */}
      <section id="recommendations" className={`${marginClasses} ${marginVerticalClasses} w-full flex justify-center bg-sky-blue-100`}>
        <Recommendations />
      </section>

      {/* Footer */}
      <section id="footer" className="max-w-[1440px]">
        <Footer />
      </section>

      {/* Copyright */}
      <section id="copyright" className="max-w-[1440px]">
        <Copyright />
      </section>
    </div>
  );
}
