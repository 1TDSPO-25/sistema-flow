import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Produto } from "../../types/produto";

const API_URL = "http://localhost:5000";
const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

// Tipo auxiliar para tratar respostas do backend que têm `_id`
type ProdutoAPI = Partial<Produto> & { _id?: string };

export default function Catalogo() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  function isProdutoAPI(obj: unknown): obj is ProdutoAPI {
    if (typeof obj !== "object" || obj === null) return false;
    const p = obj as Record<string, unknown>;
    return "nome" in p && "descricao" in p && "preco" in p;
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_URL}/produtos`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const json: unknown = await res.json();
        if (!Array.isArray(json)) {
          throw new Error("Formato de resposta inválido");
        }

        const coerced: Produto[] = json
          .filter(isProdutoAPI)
          .map((p) => ({
            id: p.id ?? p._id ?? "",
            nome: p.nome ?? "Produto sem nome",
            descricao: p.descricao ?? "Sem descrição disponível",
            preco: Number(p.preco ?? 0),
            qtd: Number(p.qtd ?? 0),
            avatar: p.avatar ?? "/placeholder.png",
            categoria: p.categoria ?? "Produto",
          }));

        setProdutos(coerced);
      } catch (e: unknown) {
        setErr(e instanceof Error ? e.message : "Erro ao buscar produtos");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p className="text-center mt-10">Carregando catálogo...</p>;
  if (err) return <p className="text-center text-red-600 mt-10">{err}</p>;

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Catálogo</h1>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0">
        {produtos.map((p) => (
          <li
            key={p.id}
            className="bg-white rounded-xl shadow-sm p-4 flex flex-col hover:shadow-md transition-shadow"
          >
            <Link to={`/produto/${p.id}`} className="block hover:opacity-95">
              <img
                src={p.avatar || "/placeholder.png"}
                alt={p.nome}
                className="w-full h-44 object-cover rounded-md mb-3"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold">{p.nome}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{p.descricao}</p>
              <p className="mt-2 font-bold text-blue-600">
                {brl.format(Number(p.preco))}
              </p>
            </Link>

            <div className="mt-auto pt-3">
              <Link
                to={`/produto/${p.id}`}
                className="inline-block w-full text-center bg-blue-600 text-white py-2 rounded-md"
              >
                Ver Detalhes
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
