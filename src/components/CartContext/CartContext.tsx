import { createContext, useContext, useReducer, useMemo, useEffect} from 'react';
import type {PropsWithChildren} from 'react';

export type Produto = {
  id: string;
  nome: string;
  preco: number;     
  avatar: string;
};

export type ItemCarrinho = {
  produto: Produto;
  quantidade: number;
};

type CarrinhoState = {
  itens: ItemCarrinho[];
  addedTicker: number;
};

type CarrinhoContextValue = {
  itens: ItemCarrinho[];
  quantidadeTotal: number;
  valorTotal: number;
  addedTicker: number;
  adicionarProduto: (produto: Produto, quantidade?: number) => void;
  removerProduto: (produtoId: string) => void;
  atualizarQuantidade: (produtoId: string, quantidade: number) => void;
  limparCarrinho: () => void;
};

type Action =
  | { type: 'ADICIONAR'; payload: { produto: Produto; quantidade: number } }
  | { type: 'REMOVER'; payload: { produtoId: string } }
  | { type: 'ATUALIZAR'; payload: { produtoId: string; quantidade: number } }
  | { type: 'LIMPAR' };

const STORAGE_KEY = 'app:carrinho:v1';

const defaultState: CarrinhoState = { itens: [], addedTicker: 0 };

function loadInitialState(): CarrinhoState {
  if (typeof window === 'undefined') return defaultState;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw) as { itens?: ItemCarrinho[] };
    return {
      itens: Array.isArray(parsed.itens) ? parsed.itens : [],
      addedTicker: 0, 
    };
  } catch {
    return defaultState;
  }
}

function cartReducer(state: CarrinhoState, action: Action): CarrinhoState {
  switch (action.type) {
    case 'ADICIONAR': {
      const { produto, quantidade } = action.payload;
      const q = Math.max(1, quantidade || 1);

      const idx = state.itens.findIndex(i => i.produto.id === produto.id);
      let novosItens: ItemCarrinho[];

      if (idx >= 0) {
        novosItens = state.itens.map((i, k) =>
          k === idx ? { ...i, quantidade: i.quantidade + q } : i
        );
      } else {
        novosItens = [...state.itens, { produto, quantidade: q }];
      }

      return {
        ...state,
        itens: novosItens,
        addedTicker: state.addedTicker + 1,
      };
    }

    case 'REMOVER': {
      const { produtoId } = action.payload;
      return {
        ...state,
        itens: state.itens.filter(i => i.produto.id !== produtoId),
      };
    }

    case 'ATUALIZAR': {
      const { produtoId, quantidade } = action.payload;
      if (quantidade <= 0) {
        return {
          ...state,
          itens: state.itens.filter(i => i.produto.id !== produtoId),
        };
      }
      return {
        ...state,
        itens: state.itens.map(i =>
          i.produto.id === produtoId ? { ...i, quantidade } : i
        ),
      };
    }

    case 'LIMPAR':
      return { itens: [], addedTicker: state.addedTicker };

    default:
      return state;
  }
}

const CarrinhoContext = createContext<CarrinhoContextValue | null>(null);

export function CarrinhoProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(cartReducer, undefined, loadInitialState);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ itens: state.itens }));
    } catch {
      
    }
  }, [state.itens]);

  const quantidadeTotal = useMemo(
    () => state.itens.reduce((acc, item) => acc + item.quantidade, 0),
    [state.itens]
  );

  const valorTotal = useMemo(
    () => state.itens.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0),
    [state.itens]
  );

  const value = useMemo<CarrinhoContextValue>(() => ({
    itens: state.itens,
    quantidadeTotal,
    valorTotal,
    addedTicker: state.addedTicker,
    adicionarProduto: (produto, quantidade = 1) =>
      dispatch({ type: 'ADICIONAR', payload: { produto, quantidade } }),
    removerProduto: (produtoId) =>
      dispatch({ type: 'REMOVER', payload: { produtoId } }),
    atualizarQuantidade: (produtoId, quantidade) =>
      dispatch({ type: 'ATUALIZAR', payload: { produtoId, quantidade } }),
    limparCarrinho: () => dispatch({ type: 'LIMPAR' }),
  }), [state.itens, state.addedTicker, quantidadeTotal, valorTotal]);

  return (
    <CarrinhoContext.Provider value={value}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho(): CarrinhoContextValue {
  const ctx = useContext(CarrinhoContext);
  if (!ctx) {
    throw new Error('useCarrinho deve ser usado dentro de <CarrinhoProvider>');
  }
  return ctx;
}