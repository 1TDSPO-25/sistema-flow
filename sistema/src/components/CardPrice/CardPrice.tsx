import { useEffect, useState } from "react";

interface CurrencyData {
  code: string;
  bid: string;
  pctChange: string;
}

export default function HeaderPrice() {
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
        BTC: { code: "BTC", bid: json.BTCBRL.bid, pctChange: json.BTCBRL.pctChange },
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido");
      }
    }
  }

  useEffect(() => {
    fetchPrices();
  }, []);

  return (
    <header
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "10px 20px",
        fontSize: "14px",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      {error && <span style={{ color: "red" }}>{error}</span>}
      {prices ? (
        <>
          <span>USD: R$ {parseFloat(prices.USD.bid).toFixed(2)} ({prices.USD.pctChange}%)</span>
          <span>EUR: R$ {parseFloat(prices.EUR.bid).toFixed(2)} ({prices.EUR.pctChange}%)</span>
          <span>BTC: R$ {parseFloat(prices.BTC.bid).toFixed(2)} ({prices.BTC.pctChange}%)</span>
        </>
      ) : (
        <span>Carregando cotações...</span>
      )}
    </header>
  );
}
