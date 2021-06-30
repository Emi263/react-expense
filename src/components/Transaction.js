import React from "react";
import "./Transactions.css";
function Transaction({ label, value, type }) {
  const sign = type == "expense" ? "-" : "+";
  const classe = type === "expense" ? "minus" : "plus";
  return (
    <div>
      <div className="transaction">
        <span>{label}</span>
        <span className={classe}>
          {sign}${value}
        </span>
      </div>
    </div>
  );
}

export default Transaction;
