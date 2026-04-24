import { Anton, Archivo } from "next/font/google";
import "./globals.css";
import Smooth_scroll from "./components/layout/smooth_scroll/smooth_scroll"

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  weight: "700",
  subsets: ["latin"],
});

export const metadata = {
  title: "Haus Studio",
  description: "Haus Portfolio Website",
  icons: {
    icon: "/assets/icons/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Smooth_scroll>
        {children}
        </Smooth_scroll>
        </body>
    </html>
  );
}