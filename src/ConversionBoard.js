import React, { useEffect, useRef } from "react";
import { useCurrency } from "./Context/CurrencyContext";

function ConversionBoard({
  Inputlabel,
  setInput,
  SelectLabel,
  disabled,
  value,
}) {
  const { setFromCurr, options } = useCurrency();

  const inputEl = useRef();

  useEffect(function () {
    inputEl.current.focus();
  }, []);
  return (
    <div className="FromCurr">
      <div className="amount">
        <label>{Inputlabel}</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setInput(Number(e.target.value))}
          disabled={disabled}
          ref={inputEl}
        />
      </div>
      <div className="fromCur">
        <label>{SelectLabel}</label>
        <select>
          <option selected="selected" disabled>
            Choose type
          </option>
          {options.map((curr) => (
            <option
              key={curr}
              value={curr}
              onChange={(e) => setFromCurr(e.target.value)}
            >
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ConversionBoard;
