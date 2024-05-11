import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "./ui/nav/bottom-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
title: "GymPal",
description: "Record your workouts",
generator: "Next.js",
manifest: "/manifest.json",
keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
};

export default function RootLayout({
children,
}: Readonly<{ children: React.ReactNode; }>) {
    return (
    <html lang="en">

    <body className={inter.className}>
        <div className="text-2xl p-4 border-b">GymPal</div>
        {children}
        <BottomNav />
    </body>

    </html>
    );
    }
