import React from "react";
import type { Produto } from "../../types/produto";

export default function AddToCart({ produto }: { produto: Produto }) {
  const handleAdd = () => {
    const raw = localStorage.getItem("cart");
    let cart: (Produto & { quantidade: number })[] = [];

    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          cart = parsed;
        }
      } catch {
        // erro ao fazer parse, começa com carrinho vazio
      }
    }

    const index = cart.findIndex((item) => String(item.id) === String(produto.id));
    if (index >= 0) {
      cart[index].quantidade += 1;
    } else {
      cart.push({ ...produto, quantidade: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Produto adicionado ao carrinho!");
  };

  return (
    <button
      onClick={handleAdd}
      className="flex items-center px-5 py-2 bg-orange-400 text-white font-semibold rounded-full shadow-md hover:bg-orange-500 transition-all"
    >
      Comprar
    </button>
  );
}
