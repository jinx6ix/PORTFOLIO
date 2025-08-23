import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ian Iraya | Full-Stack Web Developer | Cybersecurity & SEO Specialist",
  description:
    "I'm Ian Iraya — a Kenyan-based full-stack web developer, cybersecurity specialist, and SEO manager. I build fast, secure, and SEO-optimized websites using Next.js, Tailwind CSS, and modern tech.",
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
      "Explore my full-stack web projects, SEO management strategies, and secure builds. Built with Next.js, Tailwind CSS, and modern dev practices.",
    images: ["/logo.png"],
    creator: "@i_raya_w_ainaina",
  },
  keywords: [
    // Personal Branding
    "Ian Iraya",
    "Ian Iraya portfolio",
    "Ian Iraya developer",
    "Ian Iraya Kenya",
    
    // Development Services
    "Kenya web developer",
    "Nairobi web developer",
    "full-stack developer portfolio",
    "Next.js developer",
    "React developer Kenya",
    "Node.js developer",
    "TypeScript developer",
    "Tailwind CSS developer",
    "MongoDB developer",
    "GraphQL developer",
    
    // Specializations
    "cybersecurity expert",
    "web security specialist",
    "penetration testing services",
    "vulnerability management",
    "DDoS protection",
    
    // SEO Services
    "SEO specialist Kenya",
    "SEO management services",
    "cybersecurity SEO",
    "technical SEO audit",
    "keyword research services",
    "content optimization",
    "SEO automation tools",
    
    // Performance & Hosting
    "web performance optimization",
    "website speed optimization",
    "secure web hosting Kenya",
    "high-uptime hosting",
    "SSD web hosting",
    "enterprise hosting solutions",
    
    // Design & Portfolio
    "modern portfolio 2025",
    "responsive web design",
    "UI/UX design services",
    "developer portfolio design",
    
    // Business Services
    "freelance developer Kenya",
    "hire full-stack developer",
    "web development agency",
    "custom web applications",
    "e-commerce development",
    "API development services",
    
    // Maintenance & Support
    "website maintenance plans",
    "WordPress maintenance",
    "security updates service",
    "website backup solutions",
    "emergency website support",
    
    // Digital Marketing
    "PPC advertising Kenya",
    "social media marketing",
    "email marketing campaigns",
    "conversion rate optimization",
    "digital marketing strategy",
    
    // Project Types
    "business website development",
    "portfolio website design",
    "web application development",
    "real-time chat applications",
    "analytics dashboard development",
    "learning management systems",
    
    // Technologies
    "Next.js projects",
    "React projects",
    "Node.js projects",
    "MongoDB projects",
    "Tailwind CSS projects",
    "TypeScript projects",
    "GraphQL projects",
    
    // Location-Based
    "web developer Nairobi",
    "tech services Kenya",
    "African web developer",
    "East Africa cybersecurity",
    
    // Industry Terms
    "web development best practices",
    "modern web technologies",
    "responsive web applications",
    "progressive web apps",
    "Jamstack development"
  ],
  authors: [
    {
      name: "Ian Iraya",
      url: "https://portfolio2-delta-two-93.vercel.app/",
    },
  ],
  creator: "Ian Iraya",
  publisher: "Ian Iraya",
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
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
        {/* JSON-LD Structured Data */}
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
                "https://twitter.com/i_raya_w_ainaina",
              ],
              jobTitle: "Full-Stack Web Developer",
              worksFor: {
                "@type": "Organization",
                name: "Ian Iraya Web Services",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "BCSIT, East African University",
              },
              knowsAbout: [
                "Next.js",
                "React",
                "Cybersecurity",
                "Node.js",
                "SEO",
                "SEO management",
                "Cybersecurity SEO",
                "Web Hosting",
                "Web Development",
              ],
            }),
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
