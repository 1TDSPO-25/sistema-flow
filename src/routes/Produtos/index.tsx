import { useEffect, useState } from "react";
import type { Produto } from "../../types/produto";

const API_URL = import.meta.env.VITE_API_URL;
const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [filtro, setFiltro] = useState<Produto[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_URL}/produtos`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();

        const coerced: Produto[] = json.map((p:Produto) => ({
          ...p,
          preco: Number(p.preco),
          qtd: Number(p.qtd)
        }));

        setProdutos(coerced);
        setFiltro(coerced);
      } catch (e: unknown ) {

        if(e instanceof Error){
          setErr(e?.message  ?? "Erro ao carregar produtos");
        }

      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    const lower = search.toLowerCase();
    setFiltro(
      produtos.filter((p) => p.nome.toLowerCase().includes(lower))
    );
  }, [search, produtos]);

  return (<section style={{ padding: 16 }}>
    <h1>Produtos</h1>
 
    {loading && <p>Carregando...</p>}
    {err && <p style={{ color: "crimson" }}>{err}</p>}
 
    {!loading && !err && (
      produtos.length ? (
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 16,
            listStyle: "none",
            padding: 0,
            margin: 0
          }}
        >
          {produtos.map((p) => (
            <li
              key={p.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: 12,
                padding: 12
              }}
            >
              <img
                src={p.avatar}
                alt={p.nome}
                style={{
                  width: "100%",
                  height: 140,
                  objectFit: "cover",
                  borderRadius: 8,
                  marginBottom: 8
                }}
                loading="lazy"
              />
              <h3 style={{ margin: "4px 0" }}>{p.nome}</h3>
              <p style={{ fontSize: 14, minHeight: 40 }}>{p.descricao}</p>
              <p style={{ fontWeight: 600 }}>{brl.format(Number(p.preco))}</p>
              <p style={{ fontSize: 12, color: "#555" }}>Estoque: {p.qtd}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum produto encontrado.</p>
      )
    )}
  </section>
);
}
