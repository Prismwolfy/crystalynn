export default function Recognition() {
  return (
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
              is a prestigious honor given to only eight employees each year who
              embody the company's core values - compassion, humility,
              authenticity, vibrancy, innovation, and excellence. Being
              nominated four times{" "}
            </span>
            <span className="font-bold">by my peers</span>
            <span className="font-normal">
              {" "}
              highlights my consistent dedication to going above and beyond,
              positively impacting both team culture and company success through
              leadership, collaboration, and integrity.
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
                As an example, her ability to rally and organize diverse people
                and teams during content migrations is truly impressive. She not
                only provides clear instructions and guidance but also
                meticulously tracks progress, ensuring that no detail is
                overlooked. Crystal's{" "}
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
                websites and improvements in how we work and the type of work we
                do
              </span>
              <span className="font-normal">
                . She is always looking for and completing projects that affect
                everyone's work and work-life in a positive way."
              </span>
            </div>
            <div className="text-cm-navy font-poppins w-full text-base font-normal leading-7">
              <span className="font-normal">"Her ability to </span>
              <span className="font-bold">
                empathize with users and think through problems
              </span>
              <span className="font-normal"> from their perspective has </span>
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
                "Crystal has contributed much to the Modere websites and Modere
                as a company.
              </span>
              <span className="font-normal">
                {" "}
                She has worked hard during the first part of this year making
                sure that all of the SRC content was in place on the website,
                and she has stayed up many late nights to do so. All while{" "}
              </span>
              <span className="font-bold">producing excellent work</span>
              <span className="font-normal"> with very little sleep."</span>
            </div>
            <div className="text-cm-navy font-poppins w-full text-base font-normal leading-7">
              <span className="font-normal">
                "Beyond her technical expertise, Crystal's{" "}
              </span>
              <span className="font-bold">
                approachability and friendly demeanor foster a collaborative and
                inclusive work environment
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
  );
}
