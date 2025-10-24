import { useEffect, useState } from "react";
import type { Produto } from "../../types/produto";
import { CardProdutos } from "../../components/CardProdutos/CardProdutos";

const API_URL = import.meta.env.VITE_API_URL;

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
    <input type="text" placeholder="Pesquisar produto..." value={search} onChange={(e) => setSearch(e.target.value)} style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: "8px 12px",
        marginBottom: 16,
        width: "100%",
        maxWidth: 400,
        fontSize: 16
      }}/>
    {loading && <p>Carregando...</p>}
    {err && <p style={{ color: "crimson" }}>{err}</p>}
 
    {!loading && !err && (
      filtro.length ? (
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
          {filtro.map((p) => (
            <CardProdutos key={p.id} produto={p} />
          ))}
        </ul>
      ) : (
        <p>Nenhum produto encontrado.</p>
      )
    )}
  </section>
);
}
