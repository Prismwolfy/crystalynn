import Image from "next/image";

interface ProjectExampleProps {
  subheader: string;
  header: string;
  description: string;
  imageUrl: string;
  imagePosition: "left" | "right";
  background?: "default" | "sky";
  buttonText?: string;
}

export default function ProjectExample({
  subheader,
  header,
  description,
  imageUrl,
  imagePosition,
  background = "default",
  buttonText = "Button",
}: ProjectExampleProps) {
  const bgClass = background === "sky" ? "bg-[#CFEAF6]" : "";

  const content = (
    <>
      {/* Text Content */}
      <div className="flex min-w-[460px] max-w-[460px] flex-col items-start gap-[25px] flex-1">
        <div className="flex flex-col items-start gap-2.5 w-full">
          <div className="w-full text-[#111E36] font-sans text-xl font-normal">
            {subheader}
          </div>
          <div className="w-full font-serif text-[31px] font-normal uppercase gradient-example-header">
            {header}
          </div>
          <div className="w-full text-[#111E36] font-sans text-base font-normal">
            {description}
          </div>
        </div>
        <button className="flex py-2.5 px-10 flex-col items-start rounded-md bg-[#2D436C] text-[#F0FDFF] font-sans text-xl font-bold">
          {buttonText}
        </button>
      </div>

      {/* Image */}
      <div className="h-[300px] min-w-[500px] max-w-[500px] flex-1 rounded-md overflow-hidden">
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
    <section
      className={`flex py-14 px-48 justify-center items-start gap-24 w-full flex-wrap ${bgClass}`}
    >
      {imagePosition === "left" ? (
        <>
          <div className="h-[300px] min-w-[500px] max-w-[500px] flex-1 rounded-md overflow-hidden">
            <Image
              src={imageUrl}
              alt={header}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex min-w-[460px] max-w-[460px] flex-col items-start gap-[25px] flex-1">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="w-full text-[#111E36] font-sans text-xl font-normal">
                {subheader}
              </div>
              <div className="w-full font-serif text-[31px] font-normal uppercase gradient-example-header">
                {header}
              </div>
              <div className="w-full text-[#111E36] font-sans text-base font-normal">
                {description}
              </div>
            </div>
            <button className="flex py-2.5 px-10 flex-col items-start rounded-md bg-[#2D436C] text-[#F0FDFF] font-sans text-xl font-bold">
              {buttonText}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex min-w-[460px] max-w-[460px] flex-col items-start gap-[25px] flex-1">
            <div className="flex flex-col items-start gap-2.5 w-full">
              <div className="w-full text-[#111E36] font-sans text-xl font-normal">
                {subheader}
              </div>
              <div className="w-full font-serif text-[31px] font-normal uppercase gradient-example-header">
                {header}
              </div>
              <div className="w-full text-[#111E36] font-sans text-base font-normal">
                {description}
              </div>
            </div>
            <button className="flex py-2.5 px-10 flex-col items-start rounded-md bg-[#2D436C] text-[#F0FDFF] font-sans text-xl font-bold">
              {buttonText}
            </button>
          </div>
          <div className="h-[300px] min-w-[500px] max-w-[500px] flex-1 rounded-md overflow-hidden">
            <Image
              src={imageUrl}
              alt={header}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </>
      )}
    </section>
  );
}
