import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crystalynn Meyer - UX/UI Designer & Developer",
  description:
    "Expert UX/UI designer and developer with 17+ years of experience in digital design and development. Passionate about human-centered design with a strong development background.",
  icons: {
    icon: [
      { url: "/favicon.ico" }, // Path to your favicon.ico
      { url: "/icon.png", type: "image/png" }, // Path to a PNG icon
    ],
    apple: [
      { url: "/apple-icon.png" }, // Path to an Apple Touch icon
    ],
  },
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
