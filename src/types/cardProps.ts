export type Produto = {
  id: number;
  nome: string;
  descricao?: string;
  preco: number;
  avatar?: string;
};

export type CardProps = {
  produto: Produto;
};
