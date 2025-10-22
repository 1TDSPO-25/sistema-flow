// src/routes/ProdutoDetalhe/index.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Produto } from "../../types/produto";

const API_URL = "http://localhost:5000";
const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export default function ProdutoDetalhe() {
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<Produto | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        if (!id) throw new Error("ID ausente");
        const res = await fetch(`${API_URL}/produtos/${id}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        const p: Produto = {
          id: json.id ?? json._id,
          nome: json.nome,
          descricao: json.descricao,
          preco: Number(json.preco ?? json.valor ?? 0),
          avatar: json.avatar ?? json.imagem ?? "/placeholder.png",
          qtd: Number(json.qtd ?? 0),
          categoria: json.categoria ?? "Produto",
        };
        setProduto(p);
      } catch (e: unknown) {
        setErr(e instanceof Error ? e.message : "Erro ao carregar produto");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Carregando...</p>;
  if (err) return <p className="text-center text-red-600 mt-10">{err}</p>;
  if (!produto) return <p className="text-center mt-10">Produto não encontrado.</p>;

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <button
        onClick={() => navigate(-1)}
        className="text-[#005b96] hover:underline text-sm mb-6 inline-flex items-center"
      >
        ← Voltar para Produtos
      </button>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <img
          src={produto.avatar}
          alt={produto.nome}
          className="w-full rounded-2xl shadow-md object-cover max-h-[520px]"
          onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.png"; }}
        />

        <div className="flex flex-col gap-3">
          <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full w-fit">
            {produto.categoria}
          </span>

          <h1 className="text-4xl font-extrabold text-gray-900">{produto.nome}</h1>
          <p className="text-2xl text-blue-600 font-semibold">
            {Number(produto.preco).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </p>

          <div className="mt-3">
            <p className="text-gray-600 text-sm mb-1">Disponibilidade:</p>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              {produto.qtd ?? 0} em estoque
            </span>
          </div>

          <div className="mt-5">
            <h2 className="text-lg font-semibold mb-1">Descrição</h2>
            <p className="text-gray-700 leading-relaxed">{produto.descricao}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
