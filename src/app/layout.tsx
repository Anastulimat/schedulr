import type {Metadata} from "next";
// import localFont from "next/font/local";
import "./globals.css";
import {Noto_Sans} from "next/font/google";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";

// const geistSans = localFont({
//     src: "./fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
// });
// const geistMono = localFont({
//     src: "./fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });

const notoSans = Noto_Sans({
    subsets: ["latin"],
    variable: "--font-noto-sans",
    weight: ["300", "400", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Schedulr.",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${notoSans.variable} antialiased`}
        >
        <main className="container">
            <Header/>
            {children}
        </main>
        </body>
        </html>
    );
}
