import Image from "next/image";

export default function Hero() {
  const profileImage = (
    <>
      <div className="bg-gradient-green-to-blue-vertical p-1.25 h-[250px] w-[250px] rounded-full md:max-lg:h-[175px] md:max-lg:w-[175px]">
        <img
          src="/images/crystalynn-meyer.jpg"
          alt="Crystalynn Meyer"
          className={`h-full w-full rounded-full`}
        ></img>
      </div>
    </>
  );

  return (
    <section className="flex w-full flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-14 xl:gap-24">
      {/* Profile Image - Top & Left */}
      <div className="flex w-full justify-center md:w-auto lg:hidden">
        {profileImage}
      </div>

      {/* Intro Text */}
      <div className="flex flex-1 flex-col items-start gap-2.5 lg:max-w-[710px]">
        <h3 className="text-lake-blue-950 w-full">Hi, I'm Crystalynn!</h3>
        <p className="text-body-lg lg:max-xl:text-lg">
          I'm an expert{" "}
          <span className="gradient-green-to-blue-horizontal font-bold">
            UX/UI designer and developer
          </span>{" "}
          with <span className="font-bold">17+ years</span> of experience in
          digital design and development. I have a passion for{" "}
          <span className="font-bold">human-centered design</span> and my{" "}
          <span className="font-bold">strong development background</span> helps
          me balance user needs with technical application.
        </p>
      </div>

      {/* Profile Image - Right */}
      <div className="hidden lg:inline-block">{profileImage}</div>
    </section>
  );
}
