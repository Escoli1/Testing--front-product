import type { Metadata } from "next";
import AppBarNav from "@/components/Navigation/AppBarNav";

export const metadata: Metadata = {
  title: "PRACTICA FINAL",
  description: "Práctica Final - Login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> 
        <AppBarNav />
        <div style={{ paddingTop: '50px' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
