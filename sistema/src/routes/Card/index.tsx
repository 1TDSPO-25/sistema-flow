import type { CardProps } from "../../types/cardProps";

export default function CardProdutos({ produto }: CardProps) {
  return (
    <article className="">
      {produto.avatar && (
        <img
          src={produto.avatar}
          alt={produto.nome}
          className=""
        />
      )}

      <h2 className="">{produto.nome}</h2>
      <p className="">ID: {produto.id}</p>
      <p className="">
        R$ {produto.preco.toFixed(2)}
      </p>
    </article>
  );
}
