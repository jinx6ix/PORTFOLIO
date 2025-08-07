import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ian Iraya | Full Stack Developer & Web Engineer & cybersecurity expert",
  description:
    "I'm Ian Iraya, a passionate full stack web developer specializing in modern web apps, custom dashboards, and secure hosting solutions. Let's build something great.",
  keywords: [
    "Ian Iraya",
    "portfolio",
    "full stack developer",
    "websites in Kenya",
    "Next.js developer",
    "React developer",
    "web developer Kenya",
    "Node.js engineer",
    "tailwind developer",
    "frontend backend developer",
  ],
  authors: [{ name: "Ian Iraya", url: "https://portfolio2-delta-two-93.vercel.app/" }],
  openGraph: {
    title: "Ian Iraya | Full Stack Developer & Web Engineer",
    description:
      "Portfolio of Ian Iraya, a developer building fast, secure, and scalable websites and apps with modern tools like Next.js, React, Tailwind, and Node.js.",
    url: "https://portfolio2-delta-two-93.vercel.app/",
    siteName: "Ian Iraya Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png", // Replace with your portfolio OG image
        width: 1200,
        height: 630,
        alt: "Ian Iraya Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ian Iraya | Full Stack Developer",
    description:
      "Check out Ian Iraya's developer portfolio – showcasing full stack apps, dashboards, cybersecurity tools, and more.",
    creator: "@i_raya_w_ainaina", // Optional: replace with your Twitter handle
    images: ["/logo.png"],
  },
  metadataBase: new URL("https://portfolio2-delta-two-93.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="hFLRkNLTiWW_pvLuqqXe-gZjop_3rJtLqKtpuxkByMc"
        />
        {/* Responsive Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon & Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
