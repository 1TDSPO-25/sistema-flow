import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Produto } from "../../types/produto";

const API_URL = "http://localhost:5000";

export default function ProdutoDetalhe() {
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<Produto | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

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
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      <p>{produto.preco}</p>
    </section>
  );
}
