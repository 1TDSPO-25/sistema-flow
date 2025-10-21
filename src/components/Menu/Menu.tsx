import { Link } from "react-router-dom";

interface NavLink {
  to: string;
  label: string;
}

interface MenuProps {
  links: NavLink[];
  onItemClick?: () => void;
  orientation?: 'horizontal' | 'vertical'; // Para controlar o layout
}

export function Menu({ links, onItemClick, orientation = 'horizontal' }: MenuProps) {
  const layoutClasses = {
    horizontal: 'hidden md:flex flex-row items-center space-x-6',
    vertical: 'flex flex-col items-center space-y-4 py-4',
  };

  const linkClasses = {
    horizontal: 'hover:text-gray-300 transition-colors',
    vertical: 'block w-full text-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors'
  };

  return (
    <nav className={layoutClasses[orientation]}>
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.to}
          className={linkClasses[orientation]}
          onClick={onItemClick}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}