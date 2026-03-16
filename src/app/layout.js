import "./globals.css";
import { Geist, Geist_Mono, Libre_Baskerville, Nunito } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Olaniyan Oluwajomiloju John",
  description: "Frontend Developer",
  icons: {
    icon: "/image/favicon.jpg",
  },
};

const Libre = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--Libre",
  weight: ["400", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--Nunito",
  weight: ["400", "600"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Libre.variable} ${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
