import type { Metadata } from "next";
import AppBarNav from "@/components/Navigation/AppBarNav";

export const metadata: Metadata = {
  title: "PRACTICA FINAL",
  description: "Práctica Final - Login",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ padding: 0, margin: 0 }}>
        <AppBarNav />
        {children}

      </body>
    </html>
  );
}
