import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Menu } from "../Menu/Menu";
interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
          Logo
        </a>

        {/* Menu Desktop: Usa o componente Menu com orientação horizontal */}
        <Menu links={navLinks} orientation="horizontal" />

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