import { Anton, Archivo } from "next/font/google";
import "./globals.css";
import Smooth_scroll from "../components/providers/smooth_scroll/smooth_scroll";
import Custom_cursor from "../components/providers/custom_cursor/custom_cursor";

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
  description:
    "Haus operates at the intersection of design, culture, and material exploration. Discover lookbooks, collections, and editorial fashion built on restraint, precision, and intentionality.",
  icons: {
    icon: "/assets/icons/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Smooth_scroll>
          <Custom_cursor />
          {children}
        </Smooth_scroll>
      </body>
    </html>
  );
}
