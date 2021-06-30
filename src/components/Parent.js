import React from "react";
import "./Parent.css";
import Total from "./Total";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
function Parent() {
  return (
    <div className="parent">
      <TransactionList />
      <Total />
      <AddTransaction />
    </div>
  );
}

export default Parent;
