import { Poppins } from "next/font/google";

import ModeBtn from "./components/btn/ModeBtn";
import Navbar from "./components/navbar/nav/Navbar";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const poppins = Poppins({
  weight: [
    "400",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "TRCC",
  description: "Community church",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>
          <Navbar />
          {children}
          <ModeBtn />
        </ThemeProvider>
      </body>
    </html>
  );
}
