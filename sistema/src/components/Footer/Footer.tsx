import type { ElementType } from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

interface SocialLink {
  href: string;
  label: string;
  icon: ElementType;
}

const socialLinks: SocialLink[] = [
  { href: "#", label: "Facebook", icon: FiFacebook },
  { href: "#", label: "Twitter", icon: FiTwitter },
  { href: "#", label: "Instagram", icon: FiInstagram },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div>
          <p>&copy; {currentYear} Sua Empresa. Todos os direitos reservados.</p>
          <p className="text-sm mt-1">
            <a href="/privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <span className="mx-2">|</span>
            <a href="/termos" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </p>
        </div>
        <div className="flex space-x-5">
          {socialLinks.map(({ href, label, icon: IconComponent }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <IconComponent className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}