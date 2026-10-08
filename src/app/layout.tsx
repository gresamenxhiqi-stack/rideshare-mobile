import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RideShare · Udhëtimet për AAB",
  description: "Prototip mësimor për udhëtime të përbashkëta drejt AAB.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}
