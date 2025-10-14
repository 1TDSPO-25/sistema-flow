import { useEffect, useState } from "react";
import type { Produto } from "../../types/produto";

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export default function Produtos() {
  const [data, setData] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/produtos?_sort=nome&_order=asc");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();

        const coerced: Produto[] = json.map((p: any) => ({
          ...p,
          preco: Number(p.preco),
          qtd: Number(p.qtd)
        }));

        setData(coerced);
      } catch (e: any) {
        setErr(e?.message ?? "Erro ao carregar produtos");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    
  );
}
