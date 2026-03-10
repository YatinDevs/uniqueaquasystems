import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { siteSEO, getOrganizationSchema } from "@/utils/seoConfig";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: { default: siteSEO.defaultTitle, template: `%s | ${siteSEO.shortName}` },
  description: siteSEO.defaultDescription,
  metadataBase: new URL(siteSEO.baseUrl),
  robots: { index: true, follow: true },
  openGraph: {
    siteName: siteSEO.siteName,
    locale: siteSEO.locale,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const orgSchema = getOrganizationSchema();
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
