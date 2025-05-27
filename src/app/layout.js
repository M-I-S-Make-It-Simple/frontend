import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { TranslationProvider } from "@/contexts/TranslationProvider";

const montserratAlternates = Montserrat_Alternates({
  weight: ["400", "700"],
  variable: "--font-montserrat-alternates",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "European Lyceum",
  description: "European Lyceum site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserratAlternates.variable}>
        <TranslationProvider>
          <div className="pageWrapper">
            <Header />
            <main className="mainContent">{children}</main>
            <Footer />
          </div>
        </TranslationProvider>
      </body>
    </html>
  );
}
