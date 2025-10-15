import type { Artigo } from "../../types/noticias";
import { FiArrowRight } from "react-icons/fi"; 

interface CardNoticiasProps {
  article: Artigo;
}

export function CardNoticias({ article }: CardNoticiasProps) {
  const { title, description, image, url, source, publishedAt } = article;

  const formattedDate = new Date(publishedAt).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-sm border border-gray-100 shadow-md overflow-hidden
                    transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                    flex flex-col h-full">
      
      <a href={url} target="_blank" rel="noopener noreferrer" className="block h-full">
        <div className="relative w-full">
          {image ? (
            <img
              className="w-full h-48 object-cover object-center"
              src={image}
              alt={title}
            />
          ) : (
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Imagem indisponível</span>
            </div>
          )}
          <span className="absolute top-3 left-3 inline-block bg-blue-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full z-10">
            {source.name}
          </span>
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <div className="text-xs text-gray-500 mb-2">
            <time dateTime={publishedAt}>{formattedDate}</time>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight hover:text-blue-700 transition-colors duration-200">
            {title}
          </h3>

          <p className="text-sm text-gray-600 line-clamp-3 flex-grow">
            {description || "Clique para ler a notícia completa."}
          </p>
          
          <div className="mt-4 flex items-center gap-1 font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200">
            <span>Leia mais</span>
            <FiArrowRight className="text-base" />
          </div>
        </div>
      </a>
    </div>
  );
}