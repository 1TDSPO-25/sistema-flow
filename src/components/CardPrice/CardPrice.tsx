import { useEffect, useState } from "react";

interface CurrencyData {
  code: string;
  bid: string;
  pctChange: string;
}

export function CardPrice() {
  const [prices, setPrices] = useState<Record<string, CurrencyData> | null>(null);
  const [error, setError] = useState("");

  async function fetchPrices() {
    try {
      const res = await fetch(
        "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL"
      );
      if (!res.ok) throw new Error("Erro ao buscar cotações");
      const json = await res.json();
      setPrices({
        USD: { code: "USD", bid: json.USDBRL.bid, pctChange: json.USDBRL.pctChange },
        EUR: { code: "EUR", bid: json.EURBRL.bid, pctChange: json.EURBRL.pctChange },
      });
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Erro desconhecido");
    }
  }

  useEffect(() => {
    fetchPrices();
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-700 text-white rounded-xl px-4 py-2 text-sm shadow-md hover:bg-gray-600 transition-all">
      {error ? (
        <span className="text-red-400">{error}</span>
      ) : prices ? (
        <div className="flex flex-col items-start">
          <span>USD: R$ {parseFloat(prices.USD.bid).toFixed(2)} | EUR: R$ {parseFloat(prices.EUR.bid).toFixed(2)} </span>
        </div>
      ) : (
        <span>Carregando...</span>
      )}
    </div>
  );
}
