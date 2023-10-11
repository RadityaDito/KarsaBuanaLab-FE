import Bottombar from "@/components/Bottombar";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lab Karsa Buana",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-row ">
          <Sidebar />
          <section className="flex flex-col min-h-screen items-center flex-1 pt-2 px-6 pb-10 max-md:pb-32 sm:px-10">
            <div className="w-full">
              <Topbar />
              {children}
            </div>
          </section>
        </main>

        <Bottombar />
      </body>
    </html>
  );
}