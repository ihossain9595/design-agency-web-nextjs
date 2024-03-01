import "./globals.css";
import { Poppins } from "next/font/google";

// Components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const poppins = Poppins({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Design Agency",
  description: "Created by @ihossain9595",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
