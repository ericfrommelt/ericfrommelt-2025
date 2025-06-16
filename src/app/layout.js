import { Analytics } from "@vercel/analytics/next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ConvertkitSignupForm from "./components/Subscribe";
import Footer from "./components/Footer";

const plexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Eric Frommelt - Digital Artist & Designer",
  description: "Digital artist and designer based in Los Angeles, CA. Partnering with brands on visual exploration and storytelling through design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plexSans.variable} antialiased`}
      >
        <Header />
        {children}
        <ConvertkitSignupForm formId={process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID} />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
