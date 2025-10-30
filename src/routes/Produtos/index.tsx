import { useEffect, useRef, useState } from "react";
import type { Produto } from "../../types/produto";
import { CardProdutos } from "../../components/CardProdutos/CardProdutos";
import { FaSearch } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

export default function Produtos() {
  useEffect(() => {
    document.title = "Produtos — Pet Shop";
  }, []);

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [filtro, setFiltro] = useState<Produto[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_URL}/produtos`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();

        const coerced: Produto[] = json.map((p: Produto) => ({
          ...p,
          preco: Number(p.preco),
          qtd: Number(p.qtd),
        }));

        setProdutos(coerced);
        setFiltro(coerced);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setErr(e?.message ?? "Erro ao carregar produtos");
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    const lower = search.toLowerCase();
    setFiltro(produtos.filter((p) => p.nome.toLowerCase().includes(lower)));
  }, [search, produtos]);

  return (
    <section className="p-5">
      <div className="flex justify-between items-center py-5">
        <h1 className="text-5xl font-bold text-orange-400">Produtos:</h1>
        <div className="flex items-center">
          <FaSearch
            className="text-2xl text-gray-800 mx-2 cursor-pointer"
            onClick={handleIconClick}
          />
          <input
            ref={inputRef}
            type="text"
            placeholder="Pesquisar produto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-64 p-2 rounded-md border border-gray-300"
          />
        </div>
      </div>

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
              margin: 0,
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
