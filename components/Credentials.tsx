interface CredentialBoxProps {
  number: string;
  text: string;
}

function CredentialBox({ number, text }: CredentialBoxProps) {
  return (
    <div className="md:flex w-full smmd:w-[400px] md:min-w-[340px] lg:min-w-auto lg:min-h-[140px] p-2.5 md:p-6 justify-center items-center flex-1 rounded-md bg-tree-green-300 text-lake-blue-950">
      <h6 className="flex md:flex-col items-center smmd:justify-center gap-2.5 leading-5">
        <span className="w-[75px] text-center smmd:text-right text-3xl lg:text-4xl">
          {number}
        </span>
        <span className="md:text-center">
          {text}
        </span>
      </h6>
    </div>
  );
}

export default function Credentials() {
  return (
    <section className="flex flex-col md:flex-row w-full justify-center items-center gap-4 md:gap-6 flex-wrap">
      <CredentialBox number="17+" text="years of design & development" />
      <CredentialBox number="122+" text="sites designed & developed" />
      <CredentialBox number="41+" text="UX projects completed" />
      <CredentialBox number="10+" text="years of leadership" />
    </section>
  );
}
