import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../Store/GlobalState";

function TransactionList() {
  const { transactions } = useContext(GlobalContext); //destructure a value

  return (
    <>
      {transactions.length == 0 ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{ fontFamily: `'Indie Flower', cursive`, fontSize: `25px` }}
          >
            No Transactions! <br />
            Try to add one
          </h1>
        </div>
      ) : (
        <span></span>
      )}
      {transactions.map((transaction) => {
        return (
          <Transaction
            key={transaction.id}
            value={transaction.value}
            type={transaction.type}
            label={transaction.label}
          />
        );
      })}
    </>
  );
}

export default TransactionList;
