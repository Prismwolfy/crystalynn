export default function CareerJourney() {
  return (
    <section className="flex w-full flex-wrap items-center justify-center gap-4 md:gap-6 lg:items-start lg:gap-14 xl:gap-24">
      {/* My Journey */}
      <div className="flex w-full flex-col justify-center gap-4 lg:w-auto xl:max-w-[670px]">
        <h3 className="text-lake-blue-950 w-full">My Journey So Far</h3>
        <p className="">
          My career in design and development began with a strong foundation in
          front-end technologies and a{" "}
          <span className="font-bold">
            passion for creating meaningful, user-focused digital experiences
          </span>
          . I started out designing and coding custom websites at smaller
          agencies like Heritage Web Solutions and Infogenix, where I quickly
          developed a{" "}
          <span className="font-bold">
            reputation for attention to detail, cross-functional collaboration,
            and a deep understanding of user needs
          </span>
          . Over time, I expanded my skill set to include responsive design,
          information architecture, and UX research. Through roles at startup
          companies like 23 Lines and my volunteer work with LTUE, I gained
          valuable experience leading projects, improving usability, and
          aligning visual design with brand identity.
        </p>
        <p className="">
          In 2016, I joined Modere, where my role evolved from a front-end
          developer to lead UX developer and eventually to Manager of Front-End
          Development. There, I led{" "}
          <span className="font-bold">high-impact projects</span> including
          enterprise CMS migrations, design system implementation, and a unified
          branding strategy - all while{" "}
          <span className="font-bold">mentoring a talented team</span> and{" "}
          <span className="font-bold">
            advocating for a user-centered design approach
          </span>{" "}
          at every level of the organization. My ability to bridge design and
          development helped streamline collaboration between teams and ensure
          cohesive, accessible user experiences across multiple global
          platforms.
        </p>
        <p className="">
          Today, I bring{" "}
          <span className="font-bold">over a decade of experience</span>, a
          strategic mindset, and a{" "}
          <span className="font-bold">passion for empathetic design</span> to
          every project I take on.
        </p>
      </div>

      {/* Proven Skills */}
      <div className="flex flex-1 flex-col items-start gap-2.5 xl:max-w-[482px]">
        <h3 className="text-lake-blue-950 w-full">Proven Skills</h3>
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
              className="border-sky-blue-500 bg-sky-blue-200 flex items-center justify-center rounded-md border px-4 py-2"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
