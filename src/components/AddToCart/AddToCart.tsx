import { useState } from "react";
import type { Produto } from "../../types/produto";

export default function AddToCart({ produto }: { produto: Produto }) {
  const [showModal, setShowModal] = useState(false);
  const [quantidade, setQuantidade] = useState(1);
  const [erroEstoque, setErroEstoque] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const estoqueDisponivel = produto.qtd ?? 0;

  const handleConfirmar = () => {
    const raw = localStorage.getItem("cart");
    let cart: (Produto & { quantidade: number })[] = [];

    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          cart = parsed;
        }
      } catch {
        // Carrinho inicia vazio
      }
    }

    const index = cart.findIndex(
      (item) => String(item.id) === String(produto.id)
    );
    const quantidadeAtual = index >= 0 ? cart[index].quantidade : 0;

    if (quantidade <= 0) {
      setErroEstoque("Informe uma quantidade válida.");
      return;
    }

    if (quantidade + quantidadeAtual > estoqueDisponivel) {
      setErroEstoque("Quantidade excede o estoque disponível.");
      return;
    }

    if (index >= 0) {
      cart[index].quantidade += quantidade;
    } else {
      cart.push({ ...produto, quantidade });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setShowModal(false);
    setQuantidade(1);
    setErroEstoque("");
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 15000);
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
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">{produto.nome}</h2>
            <label className="block mb-2">
              Quantidade:
              <input
                type="number"
                min="1"
                max={estoqueDisponivel}
                value={quantidade}
                onChange={(e) => {
                  const valorDigitado = Number(e.target.value);
                  const valorCorrigido = Math.min(
                    valorDigitado,
                    estoqueDisponivel
                  );
                  setQuantidade(valorCorrigido);
                  setErroEstoque("");
                }}
                className="w-full mt-1 p-2 border rounded"
              />
            </label>
            <p className="mb-2">Estoque disponível: {estoqueDisponivel}</p>
            <p className="mb-4">
              Preço total: R$ {(produto.preco * quantidade).toFixed(2)}
            </p>
            {erroEstoque && (
              <p className="text-red-500 text-sm mb-2">{erroEstoque}</p>
            )}
            <div className="flex justify-between">
              <button
                onClick={() => {
                  setShowModal(false);
                  setQuantidade(1);
                  setErroEstoque("");
                }}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmar}
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}

{showSuccess && (
  <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center animate-fade-in">
      <p className="text-orange-500 text-lg font-semibold mb-4">
        Produto adicionado ao carrinho!
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setShowSuccess(false)}
          className="px-4 py-2 bg-gray-800 bg-opacity-50 text-white rounded hover:bg-opacity-70 transition-all"
        >
          Voltar
        </button>
        <button
          onClick={() =>
            (window.location.href = "/sistema-flow/carrinho")
          }
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-all"
        >
          Ir ao carrinho
        </button>
      </div>
    </div>
  </div>
)}

    </>
  );
}
