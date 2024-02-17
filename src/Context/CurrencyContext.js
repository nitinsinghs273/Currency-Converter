import { createContext, useContext, useEffect, useState } from "react";
const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

const CurrContext = createContext();

function CurrencyProvider({ children }) {
  const [amount, setAmount] = useState("0");
  const [fromCurr, setFromCurr] = useState("inr");
  const [toCurr, setToCurr] = useState("usd");
  const [data, setData] = useState({});
  const [calculated_Amount, setCalculated_Amount] = useState("");

  const options = Object.keys(data);

  useEffect(
    function () {
      async function fetch_data() {
        const res = await fetch(`${BASE_URL}${fromCurr}.json`);
        if (!res.ok) throw new Error("Data loading Failed");
        const data = await res.json();
        setData(data[fromCurr]);
      }
      fetch_data();
    },
    [fromCurr, toCurr]
  );

  return (
    <CurrContext.Provider
      value={{
        amount,
        setAmount,
        fromCurr,
        setFromCurr,
        toCurr,
        setToCurr,
        options,
        data,
        calculated_Amount,
        setCalculated_Amount,
      }}
    >
      {children}
    </CurrContext.Provider>
  );
}

function useCurrency() {
  const context = useContext(CurrContext);
  // if (context === undefined) throw new Error("used outside the child Provided");
  return context;
}

export { CurrencyProvider, useCurrency };
