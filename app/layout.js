import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LivingCurrent from "@/components/LivingCurrent";

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
          href="https://fonts.googleapis.com/css2?family=Exo:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LivingCurrent />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
