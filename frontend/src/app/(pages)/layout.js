import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dashboard",
  description: "Admin Dashboard Layout",
};

export default function RootLayout({ children }) {
  return (
    
      <div
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Sidebar/>
        <main className="lg:ml-[15%] p-6">{children}</main>
        
      </div>
  );
}
