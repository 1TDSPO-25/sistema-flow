import React, { useEffect, useState } from "react";
import type { Produto } from "../../types/produto";
import { useNavigate } from "react-router-dom";

function readCart() {
  try {
    const raw = localStorage.getItem("cart");
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeCart(cart: any[]) {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch {}
}

export default function CartPage() {
  const [items, setItems] = useState<(Produto & { quantidade: number })[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setItems(readCart());
  }, []);

  function handleRemove(id: number | string) {
    const next = items.filter((i) => String(i.id) !== String(id));
    setItems(next);
    writeCart(next);
  }

  function handleClear() {
    setItems([]);
    writeCart([]);
  }

  const total = items.reduce((s, i) => s + (Number(i.preco) || 0) * (i.quantidade || 1), 0);

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Carrinho</h1>

      {!items.length && (
        <div className="bg-yellow-50 p-6 rounded-lg">
          <p className="mb-3">Seu carrinho está vazio.</p>
          <button onClick={() => navigate("/produtos")} className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Ver Produtos
          </button>
        </div>
      )}

      {items.length > 0 && (
        <>
          <ul className="space-y-4 mb-6">
            {items.map((it) => (
              <li key={it.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                <img src={it.avatar || "/placeholder.png"} alt={it.nome} className="w-20 h-20 object-cover rounded-md" />
                <div className="flex-1">
                  <h3 className="font-semibold">{it.nome}</h3>
                  <p className="text-sm text-gray-600">{it.descricao}</p>
                  <p className="mt-1 font-bold">{(Number(it.preco) || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} x {it.quantidade}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button onClick={() => handleRemove(it.id)} className="text-red-600 underline text-sm">Remover</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md">
            <div>
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-xl font-bold">{total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
            </div>

            <div className="flex gap-3">
              <button onClick={handleClear} className="bg-gray-100 px-4 py-2 rounded-md">Limpar Carrinho</button>
              <button onClick={() => alert("Fluxo de checkout não implementado")} className="bg-green-600 text-white px-4 py-2 rounded-md">Finalizar Compra</button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
