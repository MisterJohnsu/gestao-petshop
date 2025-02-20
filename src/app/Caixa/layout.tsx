import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Inter as FontSans } from "next/font/google";
import Link from 'next/link';
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ["latin"] });

import { cn } from "@/lib/utils"
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Caixa",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body className={inter.className}>{children}

      <section className="flex h-screen">
      <nav className="menu-lateral">
        <div className="btn-expandir">
            <i className="bi bi-list"></i>
        </div>
        <ul className="">
            <li className="item-menu">
            <Link href="/" className="item-menu flex items-center hover:bg-gray-700 p-2 rounded">
                    <span className="icon"><i className="w-6 h-6 bi bi-house-door"></i></span>
                    <span className="txt-link">Início</span>
            </Link>
            </li>
            <li className="item-menu">
            <Link href="/Caixa">
                    <span className="icon"><i className="bi bi-basket2-fill"></i></span>
                    <span className="txt-link">Caixa</span>
            </Link>
            </li>
            <li className="item-menu">
                <Link href="/Agenda">
                    <span className="icon"><i className="bi bi-calendar-event"></i></span>
                    <span className="txt-link">Agenda</span>
                </Link>
            </li>
            <li className="item-menu">
                <Link href="/Configuracao">
                    <span className="icon"><i className="bi bi-gear"></i></span>
                    <span className="txt-link">Configurações</span>
                </Link>
            </li>
            <li className="item-menu">
                <Link href="Perfil">
                    <span className="icon"><i className="bi bi-person-fill"></i></span>
                    <span className="txt-link">Conta</span>
                </Link>
            </li>
        </ul>
    </nav>
    </section>
      </body>
    </html>
  );
}