import { useState } from "react";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { Menu } from "../Menu/Menu";
import { CardWeather } from "../CardWeather/CardWeather";
import { CardPrice } from "../CardPrice/CardPrice";
import { Link } from "react-router-dom";

interface NavLink {
  to: string;
  label: string;
}

const navLinks: NavLink[] = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/faq", label: "FAQ" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
          Logo
        </Link>

        {/* Menu Desktop: Usa o componente Menu com orientação horizontal */}
        <div className="hidden md:flex items-center gap-6">
          <CardPrice />
          <CardWeather />
          <Menu links={navLinks} orientation="horizontal" />
          {/* Ícone de Carrinho */}
          <button
            aria-label="Carrinho"
            className="text-2xl hover:text-gray-300 transition-colors"
          >
            <FiShoppingCart />
          </button>
        </div>

        {/* Botão do Menu Hambúrguer para Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="text-2xl"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Container do Menu Mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {/* Menu Mobile: Usa o mesmo componente Menu, mas com orientação vertical */}
        <Menu links={navLinks} orientation="vertical" onItemClick={closeMenu} />
      </div>
    </header>
  );
}