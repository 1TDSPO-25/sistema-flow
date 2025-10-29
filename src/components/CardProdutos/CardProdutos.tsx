import type { Produto } from "../../types/produto";
import AddToCart from "../../components/AddToCart/AddToCart"; 

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function CardProdutos({ produto }: { produto: Produto }) {

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 12,
      }}
    >
      <img
        src={produto.avatar}
        alt={produto.nome}
        style={{
          width: "100%",
          height: 140,
          objectFit: "cover",
          borderRadius: 8,
          marginBottom: 8,
        }}
        loading="lazy"
      />
      <div>
        <h3 style={{ margin: "4px 0" }}>{produto.nome}</h3>
        <p style={{ fontSize: 14, minHeight: 40 }}>{produto.descricao}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 8,
          }}
        >
          <div>
            <p style={{ fontWeight: 600 }}>{brl.format(Number(produto.preco))}</p>
            <p style={{ fontSize: 12, color: "#555" }}>Estoque: {produto.qtd}</p>
          </div>
          <AddToCart produto={produto} />
        </div>
      </div>
    </li>
  );
}
