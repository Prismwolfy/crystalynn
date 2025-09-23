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
  buttonUrl: string;
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
  buttonUrl,
}: ProjectExampleProps) {
  const bgClass = background === "sky" ? "bg-sky-blue-100" : "";
  const exampleContainerClasses =
    "flex flex-row justify-center items-center md:items-start xl:flex-row gap-4 md:gap-6 lg:gap-14 xl:gap-24 w-full flex-wrap max-w-[1440px]";

  const contentText = (
    <>
      {/* Text Content */}
      <div className="flex flex-1 flex-col items-start gap-6 xl:max-w-[460px]">
        <div className="flex w-full flex-col items-start gap-1.5 lg:gap-2.5">
          <div className="text-body-lg w-full">{subheader}</div>
          <h4 className="gradient-green-to-blue-horizontal leading-7">
            {header}
          </h4>
          <div className="w-full">{description}</div>
        </div>
        <a
          href={buttonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-primary"
        >
          {buttonText}
        </a>
      </div>
    </>
  );

  const contentImage = (
    <>
      {/* Image */}
      <div className="flex-1 overflow-hidden rounded-md xl:h-[300px] xl:min-w-[500px] xl:max-w-[500px]">
        <Image
          src={imageUrl}
          alt={header}
          width={500}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
    </>
  );

  return (
    <section
      id={id}
      className={`${classes} flex w-full justify-center ${bgClass}`}
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
          <div
            className={`${exampleContainerClasses} sm:max-md:flex-col-reverse`}
          >
            {contentText}
            {contentImage}
          </div>
        </>
      )}
    </section>
  );
}
