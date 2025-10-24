import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Produto } from "../../types/produto";

type CartItem = {
  id: number | string;
  nome: string;
  preco: number;
  qtd: number;
};

const API_URL = "http://localhost:5000";

function readCart(): CartItem[] {
  try {
    const data = localStorage.getItem("cart");
    if (!data) return [];
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeCart(cart: CartItem[]) {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (e) {
    console.error("Erro ao salvar no carrinho:", e);
  }
}

function addToCart(produto: CartItem) {
  const cart = readCart();
  const idx = cart.findIndex((i) => String(i.id) === String(produto.id));
  if (idx >= 0) {
    cart[idx].qtd += 1;
  } else {
    cart.push({ ...produto, qtd: 1 });
  }
  writeCart(cart);
  return cart;
}

export default function ProdutoDetalhe() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [produto, setProduto] = useState<Produto | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        if (!id) throw new Error("ID ausente");
        const res = await fetch(`${API_URL}/produtos/${id}`);
        if (!res.ok) throw new Error("Erro ao buscar produto");
        const json = await res.json();
        setProduto({
          id: json.id ?? json._id,
          nome: json.nome,
          descricao: json.descricao,
          preco: Number(json.preco ?? json.valor ?? 0),
          avatar: json.avatar ?? json.imagem ?? "/placeholder.png",
        });
      } catch (e) {
        if (e instanceof Error) setErr(e.message);
        else setErr("Erro ao carregar");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const handleAdd = () => {
    if (!produto) return;
    addToCart({
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      qtd: 1,
    });
    navigate("/carrinho");
  };

  if (loading) return <p>Carregando...</p>;
  if (err) return <p>{err}</p>;
  if (!produto) return <p>Produto não encontrado.</p>;

  return (
    <div className="p-6 flex flex-col gap-6 max-w-xl mx-auto">
      <img
        src={produto.avatar}
        alt={produto.nome}
        className="w-full rounded-md shadow"
      />

      <h1 className="text-2xl font-semibold">{produto.nome}</h1>

      <p className="text-gray-600">{produto.descricao}</p>

      <p className="text-xl font-bold text-gray-500">
        R$ {produto.preco.toFixed(2)}
      </p>

      <button
        onClick={handleAdd}
        className="bg-[#6b4f2a] text-white px-4 py-2 rounded hover:opacity-90"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
