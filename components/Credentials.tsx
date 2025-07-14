interface CredentialBoxProps {
  number: string;
  text: string;
}

function CredentialBox({ number, text }: CredentialBoxProps) {
  return (
    <div className="flex min-w-[210px] min-h-[157px] p-[25px] justify-center items-center flex-col gap-2.5 flex-1 rounded-md bg-[#75DA81]">
      <div className="min-w-[210px] text-[#111E36] text-center font-serif text-[48px] font-normal uppercase">
        {number}
      </div>
      <div className="min-w-[210px] flex-1 text-[#111E36] text-center font-serif text-xl font-normal uppercase">
        {text}
      </div>
    </div>
  );
}

export default function Credentials() {
  return (
    <section className="flex w-full py-14 px-24 justify-center items-center gap-8 flex-wrap">
      <CredentialBox number="17+" text="years of design & development" />
      <CredentialBox number="122+" text="sites designed & developed" />
      <CredentialBox number="41+" text="UX projects completed" />
      <CredentialBox number="10+" text="years of leadership" />
    </section>
  );
}
