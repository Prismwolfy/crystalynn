import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crystalynn Meyer - UX/UI Designer & Developer",
  description:
    "Expert UX/UI designer and developer with 17+ years of experience in digital design and development. Passionate about human-centered design with a strong development background.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
