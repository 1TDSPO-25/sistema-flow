import React, { useState } from "react";
import type { Produto } from "../../types/produto";

export default function AddToCart({ produto }: { produto: Produto }) {
  const [showModal, setShowModal] = useState(false);
  const [quantidade, setQuantidade] = useState(1);

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
      cart[index].quantidade += quantidade;
    } else {
      cart.push({ ...produto, quantidade });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setShowModal(false);
    alert("Produto adicionado ao carrinho!");
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center px-5 py-2 bg-orange-400 text-white font-semibold rounded-full shadow-md hover:bg-orange-500 transition-all"
      >
        Comprar
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">{produto.nome}</h2>
            <label className="block mb-2">
              Quantidade:
              <input
                type="number"
                min="1"
                value={quantidade}
                onChange={(e) => setQuantidade(Number(e.target.value))}
                className="w-full mt-1 p-2 border rounded"
              />
            </label>
            <p className="mb-4">Preço total: R$ {(produto.preco * quantidade).toFixed(2)}</p>
            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleAdd}
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}