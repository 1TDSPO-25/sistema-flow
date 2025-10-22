import { useState } from "react";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { Menu } from "../Menu/Menu";
import { CardWeather } from "../CardWeather/CardWeather";
import { CardPrice } from "../CardPrice/CardPrice";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";

interface NavLink {
  to: string;
  label: string;
}

const navLinks: NavLink[] = [
  { to: "", label: "Início" },
  { to: "sobre", label: "Sobre" },
  { to: "servicos", label: "Serviços" },
  { to: "faq", label: "FAQ" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-linear-to-r from-gray-800 via-gray-700 to-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to=""
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-orange-400 hover:opacity-90 transition-opacity"
        >
          ColocaAlogoGrazi
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <CardPrice />
          <CardWeather />
          <Menu links={navLinks} orientation="horizontal" />
          {/* Ícone de Carrinho */}
          <button
            aria-label="Carrinho"
            className="text-2xl hover:text-orange-400 transition-colors"
          >
            <FiShoppingCart />
          </button>
          {/* Botões de Login e Cadastro */}
          <Link
            to="login"
            className="flex items-center px-5 py-2 bg-orange-400 text-white font-semibold rounded-full shadow-md hover:bg-orange-500 transition-all"
          ><BiUser className="inline mr-2 text-xl" />
            Login
          </Link>
          <Link
            to="cadastro"
            className="px-5 py-2 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-400 transition-all"
          >
            Cadastro
          </Link>
        </div>

        {/* Botão do Menu Hambúrguer para Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="text-2xl text-white hover:text-orange-400 transition-colors"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <Menu links={navLinks} orientation="vertical" onItemClick={closeMenu} />
        <div className="flex flex-col items-center gap-4 mt-4">
          <Link
            to="login"
            className="flex items-center justify-center w-3/4 px-5 py-2 bg-orange-400 text-white font-semibold rounded-full shadow-md hover:bg-orange-400 transition-all text-center"
            onClick={closeMenu}
          ><BiUser className="inline mr-2 text-xl" />
            Login
          </Link>
          <Link
            to="cadastro"
            className="w-3/4 px-5 py-2 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-400 transition-all text-center mb-8"
            onClick={closeMenu}
          >
            Cadastro
          </Link>
        </div>
      </div>
    </header>
  );
}