import Image from "next/image"

export default function Hero() {
  const profileImage = (
    <>
      <div className="w-[250px] h-[250px] md:max-lg:w-[175px] md:max-lg:h-[175px] rounded-full bg-gradient-green-to-blue-vertical p-1.25">
        <img src="/images/crystalynn-meyer.jpg" alt="Crystalynn Meyer" className={`w-full h-full rounded-full`}></img>
      </div>
    </>
  )

  return (
    <section className="flex justify-center items-center gap-4 md:gap-6 lg:gap-14 xl:gap-24 w-full flex-wrap">
      {/* Profile Image - Top & Left */}
      <div className="flex justify-center w-full md:w-auto lg:hidden">
        {profileImage}        
      </div>      

      {/* Intro Text */}
      <div className="flex flex-col items-start gap-2.5 flex-1 lg:max-w-[710px]">
        <h3 className="w-full text-lake-blue-950">
          Hi, I'm Crystalynn!
        </h3>
        <p className="text-body-lg lg:max-xl:text-lg">
          I'm an expert <span className="font-bold gradient-green-to-blue-horizontal">UX/UI designer and developer</span> with <span className="font-bold">17+ years</span> of experience in digital design and development. I have a passion for <span className="font-bold">human-centered design</span> and my <span className="font-bold">strong development background</span> helps me balance user needs with technical application.
        </p>
      </div>

      {/* Profile Image - Right */}
      <div className="hidden lg:inline-block">
        {profileImage}        
      </div>    
    </section>
  );
}
