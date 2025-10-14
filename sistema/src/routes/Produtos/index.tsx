import React, { useEffect, useState } from "react";

import type { ProdutosFiltro } from "../../types/produtosFiltro";

export default function Produtos() {
  const [produtos, setProdutos] = useState<ProdutosFiltro[]>([]);
  const [filtro, setFiltro] = useState<ProdutosFiltro[]>([]);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("URL DA API DE PRODUTOS... INSERIR ");
        const json = await response.json();

        const data = json.produtos || [];
        setProdutos(data);
        setFiltro(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };
    fetchProducts();
  }, []);

   useEffect(() => {
    const lower = search.toLowerCase();
    setFiltro(
      produtos.filter((p: { nome: string; }) => p.nome.toLowerCase().includes(lower))
    );
  }, [search, produtos]);

  return(
    <main className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Produtos</h1>

      <input
        type="text"
        placeholder="Pesquisar produto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 mb-4 w-full focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Nome</th>
              <th className="border p-2">Descrição</th>
              <th className="border p-2">Qtd</th>
              <th className="border p-2">Preço (R$)</th>
              <th className="border p-2">Imagem</th>
            </tr>
          </thead>
          <tbody>
            {filtro.length > 0 ? (
              filtro.map((prod) => (
                <tr key={prod.id} className="hover:bg-gray-50">
                  <td className="border p-2">{prod.id}</td>
                  <td className="border p-2">{prod.nome}</td>
                  <td className="border p-2">{prod.descricao}</td>
                  <td className="border p-2">{prod.qtd}</td>
                  <td className="border p-2">{prod.preco.toFixed(2)}</td>
                  <td className="border p-2">
                    <img
                      src={prod.avatar}
                      alt={prod.nome}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center p-4 text-gray-500">
                  Nenhum produto encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
  
}