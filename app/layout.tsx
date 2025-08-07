import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ian Iraya | Web Developer & Creative Technologist | Cybersecurity Expert",
  description:
    "Hi, I'm Ian Iraya — a full-stack web developer building creative, fast, and secure websites that convert. Explore my portfolio.",
  metadataBase: new URL("https://portfolio2-delta-two-93.vercel.app/"),
  verification: {
    google: "hFLRkNLTiWW_pvLuqqXe-gZjop_3rJtLqKtpuxkByMc",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Ian Iraya | Web Developer Portfolio",
    description:
      "Browse a collection of full-stack projects by Ian Iraya. Built with Next.js, Tailwind, and modern web tools.",
    url: "https://portfolio2-delta-two-93.vercel.app/",
    siteName: "Ian Iraya Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Ian Iraya Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ian Iraya | Web Developer Portfolio",
    description:
      "Explore the professional web portfolio of Ian Iraya, showcasing modern full-stack web projects.",
    images: ["/logo.png"],
    creator: "@i_raya_w_ainaina",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Essential Meta */}
        <meta name="author" content="Ian Iraya" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://portfolio2-delta-two-93.vercel.app/" />
        <meta name="robots" content="index, follow" />

        {/* Preconnect for Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data (Schema.org) */}
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
                "https://twitter.com/i_raya_w_ainaina",
                "https://www.linkedin.com/in/ian-iraya",
              ],
              jobTitle: "Web Developer, Creative Technologist, Cybersecurity Expert",
              worksFor: {
                "@type": "Organization",
                name: "Ian Iraya Dev",
              },
            }),
          }}
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CK21QF38W4"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CK21QF38W4');
            `,
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
