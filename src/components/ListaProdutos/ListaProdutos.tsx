import { useEffect, useState } from "react";
import type { Produto } from "../../types/produto";
import { CardProdutos } from "../CardProdutos/CardProdutos";

const API_URL = import.meta.env.VITE_API_URL;

export function ListaProdutos({ limit }: { limit?: number }) {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${API_URL}/produtos`);
      const json = await res.json();
      const coerced: Produto[] = json.map((p: Produto) => ({
        ...p,
        preco: Number(p.preco),
        qtd: Number(p.qtd)
      }));
      setProdutos(limit ? coerced.slice(0, limit) : coerced);
    })();
  }, [limit]);

  return (
    <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
      {produtos.map((p) => (
        <CardProdutos key={p.id} produto={p} />
      ))}
    </ul>
  );
}
