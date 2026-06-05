import { Analytics } from "@vercel/analytics/next"
import { Anton, Archivo } from "next/font/google";
import "./globals.css";
import Global_data_provider from "@/components/providers/global_data_provider/global_data_provider";
import { Toaster } from "sonner";

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
      data-scroll-behavior="smooth"
      className={`${anton.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Global_data_provider>{children}</Global_data_provider>
        <Toaster
          position="bottom-right"
          richColors
          toastOptions={{
            style: {
              background: "#0a0a0a",
              color: "#fafafa",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "14px",
              padding: "16px",
              backdropFilter: "blur(10px)",
            },
            className: "font-medium",
          }}
        />
        <Analytics/>
      </body>
    </html>
  );
}
