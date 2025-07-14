import Header from "../components/Header";
import Hero from "../components/Hero";
import Credentials from "../components/Credentials";
import ProjectExample from "../components/ProjectExample";
import Recommendations from "../components/Recommendations";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-start bg-[#F0FDFF] mx-auto">
      {/* Header */}
      <Header />

      {/* Hero/Intro Section */}
      <section id="about">
        <Hero />
      </section>

      {/* Credentials Section */}
      <Credentials />

      {/* Examples/Projects Section */}
      <section
        id="recent-projects"
        className="flex flex-col items-center w-full"
      >
        <ProjectExample
          subheader="Life, the Universe, & Everything"
          header="Branding and Website Redesign"
          description="This is a paragraph about the client and project that expands a bit on what was done for them. Short and to the point, it should include key words but not so much that it's a chore to read. Include all the different things that was part of this project and what I learned while working on this project to entice the viewer to click the link below."
          imageUrl="/images/example-bookshelf.png?width=1000"
          imagePosition="left"
          background="sky"
          buttonText="Button"
        />

        <ProjectExample
          subheader="Road Trippin'"
          header="Mobile App Design"
          description="This is a paragraph about the client and project that expands a bit on what was done for them. Short and to the point, it should include key words but not so much that it's a chore to read. Include all the different things that was part of this project and what I learned while working on this project to entice the viewer to click the link below."
          imageUrl="/images/example-road-trippin.png?width=1000"
          imagePosition="right"
          background="default"
          buttonText="Button"
        />

        <ProjectExample
          subheader="Bookshelf"
          header="Website Design"
          description="This is a paragraph about the client and project that expands a bit on what was done for them. Short and to the point, it should include key words but not so much that it's a chore to read. Include all the different things that was part of this project and what I learned while working on this project to entice the viewer to click the link below."
          imageUrl="/images/example-bookshelf.png?width=1000"
          imagePosition="left"
          background="sky"
          buttonText="Button"
        />

        <ProjectExample
          subheader="Modere"
          header="Updated Design System"
          description="This is a paragraph about the client and project that expands a bit on what was done for them. Short and to the point, it should include key words but not so much that it's a chore to read. Include all the different things that was part of this project and what I learned while working on this project to entice the viewer to click the link below."
          imageUrl="/images/example-design-system.png?width=1000"
          imagePosition="right"
          background="default"
          buttonText="Button"
        />
      </section>

      {/* Recommendations Section */}
      <section id="recommendations">
        <Recommendations />
      </section>

      {/* Footer */}
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
