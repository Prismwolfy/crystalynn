import Image from "next/image";

interface ProjectExampleProps {
  classes: string;
  id: string;
  subheader: string;
  header: string;
  description: string;
  imageUrl: string;
  imagePosition: "left" | "right";
  background?: "default" | "sky";
  buttonText?: string;
}

export default function ProjectExample({
  classes,
  id,
  subheader,
  header,
  description,
  imageUrl,
  imagePosition,
  background = "default",
  buttonText = "See More",
}: ProjectExampleProps) {
  
  const bgClass = background === "sky" ? "bg-sky-blue-100" : "";
  const exampleContainerClasses = 'flex flex-row justify-center items-center md:items-start xl:flex-row gap-4 md:gap-6 lg:gap-14 xl:gap-24 w-full flex-wrap max-w-[1440px]'

  const contentText = (
    <>
      {/* Text Content */}
      <div className="flex xl:max-w-[460px] flex-col items-start gap-6 flex-1">
        <div className="flex flex-col items-start gap-1.5 lg:gap-2.5 w-full">
          <div className="w-full text-body-lg">
            {subheader}
          </div>
          <h4 className="w-full leading-7 gradient-green-to-blue-horizontal">
            {header}
          </h4>
          <div className="w-full">
            {description}
          </div>
        </div>
        <button className="button button-primary">
          {buttonText}
        </button>
      </div>
    </>
  );

  const contentImage = (
    <>
      {/* Image */}
      <div className="xl:h-[300px] xl:min-w-[500px] xl:max-w-[500px] flex-1 rounded-md overflow-hidden">
        <Image
          src={imageUrl}
          alt={header}
          width={500}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );

  return (
    <section id={id}
      className={`${classes} w-full flex justify-center ${bgClass}`}
    >
      {imagePosition === "left" ? (
        <>
          <div className={`${exampleContainerClasses} sm:max-md:flex-col`}>
            {contentImage}        
            {contentText}
          </div>
        </>
      ) : (
        <>
          <div className={`${exampleContainerClasses} sm:max-md:flex-col-reverse`}>
            {contentText}
            {contentImage}
          </div>
        </>
      )}
    </section>
  );
}
