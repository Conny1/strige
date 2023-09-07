import Nav from "@/componets/nav/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/componets/footer/Footer";
import Providers from "@/componets/sessionProvider/sessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Strige",
  description: "Freelace serveces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
