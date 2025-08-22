interface CredentialBoxProps {
  number: string;
  text: string;
}

function CredentialBox({ number, text }: CredentialBoxProps) {
  return (
    <div className="smmd:w-[400px] lg:min-w-auto bg-tree-green-300 text-lake-blue-950 w-full flex-1 items-center justify-center rounded-md p-2.5 md:flex md:min-w-[340px] md:p-6 lg:min-h-[140px]">
      <h6 className="smmd:justify-center flex items-center gap-2.5 leading-5 md:flex-col">
        <span className="smmd:text-right w-[75px] text-center text-3xl lg:text-4xl">
          {number}
        </span>
        <span className="md:text-center">{text}</span>
      </h6>
    </div>
  );
}

export default function Credentials() {
  return (
    <section className="flex w-full flex-col flex-wrap items-center justify-center gap-4 md:flex-row md:gap-6">
      <CredentialBox number="17+" text="years of design & development" />
      <CredentialBox number="122+" text="sites designed & developed" />
      <CredentialBox number="41+" text="UX projects completed" />
      <CredentialBox number="10+" text="years of leadership" />
    </section>
  );
}
