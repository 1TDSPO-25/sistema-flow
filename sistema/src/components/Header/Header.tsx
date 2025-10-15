import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
          Logo
        </a>

        {/* Links de Navegação para Desktop */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-gray-300 transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

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

      {/* Menu Mobile (condicionalmente renderizado com transição) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block w-full text-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}