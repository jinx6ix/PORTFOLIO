import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ian Iraya | Full-Stack Web Developer | Cybersecurity Specialist",
  description:
    "I'm Ian Iraya — a Kenyan-based full-stack web developer and cybersecurity enthusiast. I build fast, secure, and beautiful websites with Next.js, Tailwind CSS, and modern tools. Explore my portfolio and services.",
  metadataBase: new URL("https://portfolio2-delta-two-93.vercel.app/"),
  verification: {
    google: "hFLRkNLTiWW_pvLuqqXe-gZjop_3rJtLqKtpuxkByMc",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Ian Iraya | Full-Stack Developer & Cybersecurity Specialist",
    description:
      "Browse the portfolio of Ian Iraya. Discover fast, SEO-optimized, secure websites built with Next.js, React, and Node.js.",
    url: "https://portfolio2-delta-two-93.vercel.app/",
    siteName: "Ian Iraya Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Ian Iraya Portfolio Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ian Iraya | Web Developer Portfolio",
    description:
      "Explore my full-stack web projects, design approach, and secure builds. Built with Next.js, Tailwind CSS, and modern dev practices.",
    images: ["/logo.png"],
    creator: "@i_raya_w_ainaina",
  },
  keywords: [
    "Ian Iraya",
    "Kenya web developer",
    "full-stack developer portfolio",
    "Next.js developer",
    "Tailwind developer",
    "cybersecurity expert",
    "web performance optimization",
    "secure web hosting",
    "modern portfolio 2025",
    "freelance developer Kenya",
    "best web developer in Kenya",
    "hire full-stack developer",
  ],
  authors: [
    {
      name: "Ian Iraya",
      url: "https://portfolio2-delta-two-93.vercel.app/",
    },
  ],
  creator: "Ian Iraya",
  publisher: "Ian Iraya",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XJH3ZY2JMJ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XJH3ZY2JMJ');
            `,
          }}
        />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Ian Iraya",
      url: "https://portfolio2-delta-two-93.vercel.app/",
      image: "https://portfolio2-delta-two-93.vercel.app/logo.png",
      sameAs: [
        "https://github.com/jinx6ix",
        "https://www.linkedin.com/in/ian-iraya/",
        "https://twitter.com/i_raya_w_ainaina"
      ],
      jobTitle: "Full-Stack Web Developer",
      worksFor: {
        "@type": "Organization",
        name: "Ian Iraya Web Services"
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "BBIT, Kenyan University"
      },
      knowsAbout: [
        "Next.js",
        "React",
        "Cybersecurity",
        "Node.js",
        "Web Development",
        "Web Hosting",
        "SEO"
      ],
    }),
  }}
/>

      </head>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
