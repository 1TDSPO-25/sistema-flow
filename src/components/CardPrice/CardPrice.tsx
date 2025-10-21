import { useEffect, useState } from "react";

interface CurrencyData {
  code: string;
  bid: string;
  pctChange: string;
}

export function HeaderPrice() {
  const [prices, setPrices] = useState<Record<string, CurrencyData> | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchPrices() {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL"
      );
      if (!res.ok) throw new Error("Erro ao buscar cotações");

      const json = await res.json();

      setPrices({
        USD: {
          code: "USD",
          bid: json.USDBRL.bid,
          pctChange: json.USDBRL.pctChange,
        },
        EUR: {
          code: "EUR",
          bid: json.EURBRL.bid,
          pctChange: json.EURBRL.pctChange,
        },
        BTC: {
          code: "BTC",
          bid: json.BTCBRL.bid,
          pctChange: json.BTCBRL.pctChange,
        },
      });
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPrices();

    const interval = setInterval(fetchPrices, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-sm text-gray-100 bg-gray-700 px-3 py-1 rounded-lg flex gap-4 items-center">
      {loading && <span>Carregando...</span>}
      {error && <span className="text-red-400">{error}</span>}

      {prices && !loading && (
        <>
          <span>
            USD: R${" "}
            {parseFloat(prices.USD.bid).toFixed(2)}{" "}
            <span
              className={
                parseFloat(prices.USD.pctChange) >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }
            >
              ({prices.USD.pctChange}%)
            </span>
          </span>

          <span>
            EUR: R${" "}
            {parseFloat(prices.EUR.bid).toFixed(2)}{" "}
            <span
              className={
                parseFloat(prices.EUR.pctChange) >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }
            >
              ({prices.EUR.pctChange}%)
            </span>
          </span>

          <span>
            BTC: R${" "}
            {parseFloat(prices.BTC.bid).toFixed(2)}{" "}
            <span
              className={
                parseFloat(prices.BTC.pctChange) >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }
            >
              ({prices.BTC.pctChange}%)
            </span>
          </span>
        </>
      )}
    </div>
  );
}
