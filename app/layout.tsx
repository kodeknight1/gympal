import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "./ui/nav/bottom-nav";
import Logo from "@/app/ui/logo";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "GymPal";
const APP_DEFAULT_TITLE = "GymPal";
const APP_TITLE_TEMPLATE = "%s - GymPal";
const APP_DESCRIPTION = "Record your workouts";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  icons: {
    icon: "favicon.png", // /public path
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-2xl p-4 border-b dark:border-slate-800">
          <Logo />
        </div>
        <main className="flex min-h-screen flex-col items-center gap-6 py-24 px-4 lg:px-24">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
