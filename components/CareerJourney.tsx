export default function CareerJourney() {
  return (
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
            agencies like Heritage Web Solutions and Infogenix, where I quickly
            developed a{" "}
          </span>
          <span className="font-bold">
            reputation for attention to detail, cross-functional collaboration,
            and a deep understanding of user needs
          </span>
          <span className="font-normal">
            . Over time, I expanded my skill set to include responsive design,
            information architecture, and UX research. Through roles at startup
            companies like 23 Lines and my volunteer work with LTUE, I gained
            valuable experience leading projects, improving usability, and
            aligning visual design with brand identity.
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
            at every level of the organization. My ability to bridge design and
            development helped streamline collaboration between teams and ensure
            cohesive, accessible user experiences across multiple global
            platforms.
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
  );
}
