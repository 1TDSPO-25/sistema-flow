import React from "react";
import { useNavigate } from "react-router-dom";
import { useCarrinho } from "../../components/CartContext/CartContext";

export default function Cart() {
  const {
    itens,
    valorTotal,
    removerProduto,
    limparCarrinho,
  } = useCarrinho();

  const navigate = useNavigate();

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Carrinho</h1>

      {itens.length === 0 ? (
        <div className="bg-yellow-50 p-6 rounded-lg">
          <p className="mb-3">Seu carrinho está vazio.</p>
          <button
            onClick={() => navigate("/produtos")}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Ver Produtos
          </button>
        </div>
      ) : (
        <>
          <ul className="space-y-4 mb-6">
            {itens.map(({ produto, quantidade }) => (
              <li
                key={produto.id}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
              >
                <img
                  src={produto.avatar || "/placeholder.png"}
                  alt={produto.nome}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{produto.nome}</h3>
                  <p className="text-sm text-gray-600">{produto.descricao}</p>
                  <p className="mt-1 font-bold">
                    {(produto.preco || 0).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}{" "}
                    × {quantidade}
                  </p>
                </div>
                <button
                  onClick={() => removerProduto(produto.id)}
                  className="text-red-600 underline text-sm"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md">
            <div>
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-xl font-bold">
                {valorTotal.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={limparCarrinho}
                className="bg-gray-100 px-4 py-2 rounded-md"
              >
                Limpar Carrinho
              </button>
              <button
                onClick={() => alert("Fluxo de checkout não implementado")}
                className="bg-green-600 text-white px-4 py-2 rounded-md"
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
