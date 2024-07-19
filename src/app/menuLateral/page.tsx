import Image from "next/image";
import Link from 'next/link';

export default function Menu() {
  return (
    <header className="flex h-screen">
      <nav className="menu-lateral">
        <div className="btn-expandir">
            <i className="bi bi-list"></i>
        </div>
        <ul className="">
            <li className="item-menu">
            <Link href="/" className="item-menu flex items-center space-x-4 hover:bg-gray-700 p-2 rounded">
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
    </header>
  )
}