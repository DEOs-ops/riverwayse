import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LivingCurrent from "@/components/LivingCurrent";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageTransition from "@/components/PageTransition";
import MainTransition from "@/components/MainTransition";

export const metadata = {
  title: "Riverways — Growth Consultancy, Lagos",
  description:
    "Riverways is a growth consultancy for Lagos businesses, built around the DEOS framework and led by Oluwafemi Akintola.",
  metadataBase: new URL("https://riverwayse.com"),
  icons: {
    icon: "/riverways-mark.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LivingCurrent />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Nav />
          <main>
            <MainTransition>{children}</MainTransition>
          </main>
          <Footer />
        </div>
        <WhatsAppFloat />
        <PageTransition />
      </body>
    </html>
  );
}
