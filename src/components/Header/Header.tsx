import { useEffect, useState } from "react";
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
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/faq", label: "FAQ" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // bloqueia scroll do body enquanto menu mobile está aberto
    document.body.style.overflow = isMenuOpen ?  "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-linear-to-r from-gray-800 via-gray-700 to-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex items-center justify-between flex-wrap gap-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-orange-400 hover:opacity-90 transition-opacity"
        >
          ColocaAlogoGrazi
        </Link>

        {/* Right controls for desktop */}
        <div className="hidden md:flex items-center gap-4 md:gap-8 flex-1 justify-end">
          <div className="flex items-center gap-3">
            <CardPrice />
            <CardWeather />
          </div>

          <nav className="hidden lg:block">
            <Menu links={navLinks} orientation="horizontal" />
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label="Carrinho"
              className="text-2xl hover:text-orange-400 transition-colors relative"
            >
              <FiShoppingCart />
              {/* Exemplo de badge (remova ou ajuste conforme necessário) */}
              <span className="absolute -top-1 -right-2 text-xs bg-red-600 text-white rounded-full px-1.5">0</span>
            </button>

            <Link
              to="/login"
              className="flex items-center px-4 py-2 bg-orange-400 text-white font-semibold rounded-full shadow-md hover:bg-orange-500 transition-all gap-2"
            >
              <BiUser className="inline text-lg" />
              <span className="hidden sm:inline">Login</span>
            </Link>

            <Link
              to="/cadastro"
              className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-400 transition-all"
            >
              Cadastro
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            className="text-2xl text-white hover:text-orange-400 transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-gray-800/90 ${
          isMenuOpen ? "max-h-[600px] border-t border-gray-700" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6 flex flex-col gap-4 items-center">
          {/* Itens móveis: cards importantes */}
          <div className="w-full flex flex-col gap-3 items-center">
            <div className="w-full max-w-md">
              <CardPrice />
            </div>
            <div className="w-full max-w-md">
              <CardWeather />
            </div>
          </div>

          {/* Menu vertical com touch targets maiores */}
          <div className="w-full">
            <Menu
              links={navLinks}
              orientation="vertical"
              onItemClick={closeMenu}
              // assume que o Menu aceita estilização via className ou similar;
              // caso não aceite, o Menu já renderiza vertical responsivo.
            />
          </div>

          <div className="w-full flex flex-col items-center gap-3 mt-2">
            <Link
              to="/login"
              onClick={closeMenu}
              className="flex items-center justify-center w-11/12 max-w-md px-5 py-3 bg-orange-400 text-white font-semibold rounded-full shadow-md hover:bg-orange-500 transition-all gap-2"
            >
              <BiUser className="inline text-lg" />
              <span>Login</span>
            </Link>

            <Link
              to="/cadastro"
              onClick={closeMenu}
              className="w-11/12 max-w-md text-center px-5 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-400 transition-all"
            >
              Cadastro
            </Link>

            <button
              aria-label="Carrinho"
              className="w-11/12 max-w-md flex items-center justify-center gap-2 px-5 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-all"
              onClick={closeMenu}
            >
              <FiShoppingCart />
              Carrinho
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}