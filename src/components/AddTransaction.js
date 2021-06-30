import React, { useRef, useState, useContext } from "react";
import "./AddTransaction.css";

import { GlobalContext } from "../Store/GlobalState";

function AddTransaction() {
  const { addTransaction } = useContext(GlobalContext);
  console.log(addTransaction);
  const label = useRef(null);
  const amount = useRef(null);

  const [selectedType, setSelectedType] = useState("revenue");

  //handleSubmission

  const handleSubmit = (e) => {
    e.preventDefault();

    if (label.current.value.trim() == 0 || amount.current.value.trim() == 0) {
      alert("Please insert a value");
      return; //go out of function
    }

    const newTransaction = {
      id: Math.random() * 1000,
      label: label.current.value,
      value: +amount.current.value, //converts it into a string
      type: selectedType,
    };

    addTransaction(newTransaction);
    label.current.value = "";
    amount.current.value = "";
  };

  return (
    <div className="addTransactions">
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: `'Indie Flower', cursive`,
          fontWeight: "bold",
          fontSize: `20px`,
        }}
      >
        ADD NEW TRANSACTION
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Add the transaction here"
          className="input_transaction"
          ref={label}
          required
        />
        <input
          type="number"
          required
          name=""
          id=""
          placeholder="Add the amount"
          className="input_transaction"
          ref={amount}
        />
        <div className="selection">
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="expense">Expense</label>
            <input
              type="radio"
              className="radio"
              value="expense"
              name="transaction"
              id="expense"
              checked={selectedType == "expense" ? true : false}
              onChange={(e) => {
                setSelectedType(e.target.value);
              }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="revenue">Income</label>
            <input
              type="radio"
              value="revenue"
              name="transaction"
              id="revenue"
              className="radio"
              checked={selectedType == "revenue" ? true : false}
              onChange={(e) => {
                setSelectedType(e.target.value);
              }}
            />
          </div>
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
