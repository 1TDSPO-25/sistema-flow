// src/components/Header/index.tsx
import { useEffect, useState } from "react";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { Menu } from "../Menu/Menu";
import { CardWeather } from "../CardWeather/CardWeather";
import { CardPrice } from "../CardPrice/CardPrice";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { useCarrinho } from '../CartContext/CartContext.tsx';
import logo from '../../assets/logo.png';

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
  const { quantidadeTotal, addedTicker } = useCarrinho();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (addedTicker > 0) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [addedTicker]);

  useEffect(() => {
    // bloqueia scroll do body enquanto menu mobile está aberto
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}


        <Link
          to="/"
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-orange-400 hover:opacity-90 transition-opacity">
          <img src={logo} alt="logo Petdev" width={122} />
        </Link>



        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <CardPrice />
          <CardWeather />
          <Menu links={navLinks} orientation="horizontal" />
          {/* Ícone de Carrinho */}
          {/* Ícone de Carrinho com animação */}
          
          <Link to="carrinho"
  aria-label="Carrinho"
  className={`relative text-2xl transition-transform duration-300 ${
    animate ? 'scale-125 text-orange-400' : 'hover:text-orange-400'
  }`}
>
  <FiShoppingCart />

  {quantidadeTotal > 0 && (
    <span
      className="
        absolute -top-2 -right-2
        bg-orange-500 text-white
        text-xs font-bold
        rounded-full w-5 h-5
        flex items-center justify-center
        shadow-md
      "
    >
      {quantidadeTotal}
    </span>
  )}
</Link>
          {/* Botões de Login e Cadastro */}
          <Link
            to="/login"
            className="flex items-center px-5 py-2 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-400 transition-all"
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
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-gray-800/90 ${isMenuOpen ? "max-h-[600px] border-t border-gray-700" : "max-h-0"
          }`}
      >
        <Menu links={navLinks} orientation="vertical" onItemClick={closeMenu} />
        <div className="flex flex-col items-center gap-4 mt-4">
          <Link
            to="/login"
            className="flex items-center justify-center w-3/4 px-5 py-2 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-400 transition-all text-center"
            onClick={closeMenu}
          >
            <BiUser className="inline mr-2 text-xl" />
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
