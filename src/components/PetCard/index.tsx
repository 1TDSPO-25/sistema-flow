import React from "react";
import { Link } from "react-router-dom";
import type { Produto } from "../../types/produto";

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export default function PetCard({ produto }: { produto: Produto }) {
  return (
    <article className="bg-white rounded-xl shadow-sm p-4 flex flex-col hover:shadow-md transition-shadow">
      <Link to={`/produto/${produto.id}`} className="block hover:opacity-95">
        <img
          src={produto.avatar || "/placeholder.png"}
          alt={produto.nome}
          className="w-full h-44 object-cover rounded-md mb-3"
          loading="lazy"
        />
        <h3 className="text-lg font-semibold">{produto.nome}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{produto.descricao}</p>
        <p className="mt-2 font-bold text-blue-600">{brl.format(Number(produto.preco))}</p>
      </Link>

      <div className="mt-auto pt-3">
        <Link
          to={`/produto/${produto.id}`}
          className="inline-block w-full text-center bg-blue-600 text-white py-2 rounded-md"
        >
          Ver Detalhes
        </Link>
      </div>
    </article>
  );
}
