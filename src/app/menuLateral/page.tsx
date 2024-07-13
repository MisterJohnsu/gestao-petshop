import Image from "next/image";
import Link from 'next/link';

export default function Menu() {
  return (
    <header>
      <nav className="menu-lateral">
        <div className="btn-expandir">
            <i className="bi bi-list"></i>
        </div>
        <ul className="">
            <li className="item-menu">
            <Link href="/">
                    <span className="icon"><i className="bi bi-house-door"></i></span>
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