import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Produto } from "../../types/produto";

const API_URL = "http://localhost:5000";
const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

function readCart(): any[] {
  try {
    const raw = localStorage.getItem("cart");
    const parsed = JSON.parse(raw || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeCart(cart: any[]) {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch {}
}

export default function ProdutoDetalhe() {
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<Produto | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
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

  function handleAddToCart() {
    if (!produto) return;
    const cart = readCart(); // sempre um array
    const idx = Array.isArray(cart)
      ? cart.findIndex((i: any) => String(i.id) === String(produto.id))
      : -1;

    if (idx >= 0) {
      cart[idx].quantidade = (cart[idx].quantidade || 1) + 1;
    } else {
      cart.push({ ...produto, quantidade: 1 });
    }

    writeCart(cart);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

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
          src={produto.avatar || "/placeholder.png"}
          alt={produto.nome}
          className="w-full rounded-2xl shadow-md object-cover max-h-[520px]"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.png";
          }}
        />

        <div className="flex flex-col gap-3">
          <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full w-fit">
            {produto.categoria}
          </span>

          <h1 className="text-4xl font-extrabold text-gray-900">{produto.nome}</h1>
          <p className="text-2xl text-blue-600 font-semibold">
            {brl.format(Number(produto.preco))}
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

          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <span>🛒</span> Adicionar ao Carrinho
            </button>

            <button
              onClick={() => navigate("/carrinho")}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg"
            >
              Ver Carrinho
            </button>
          </div>

          {added && <p className="text-green-600 mt-3">Adicionado ao carrinho ✔</p>}
        </div>
      </div>
    </section>
  );
}
