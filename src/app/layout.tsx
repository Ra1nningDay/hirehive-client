import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
    variable: "--font-comfortaa",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "HIVE AI - Interview Game",
    description: "AI-powered interview simulation game",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={` ${comfortaa.variable}  antialiased font-comfortaa`}>
                {children}
            </body>
        </html>
    );
}
