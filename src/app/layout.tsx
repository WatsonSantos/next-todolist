import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lista de terefas",
  description: "Gerencie as suas tarefas diárias com o TODO LIST",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
