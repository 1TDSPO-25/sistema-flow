export type Produto = {
  id: number | string;
  nome: string;
  descricao: string;
  preco: number;
  avatar?: string;
  imagem?: string;
  qtd?: number;
  categoria?: string;
};