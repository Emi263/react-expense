import React, { useContext, useState } from "react";
import { useEffect } from "react";
import "./Total.css";
import { GlobalContext } from "../Store/GlobalState";
function Total() {
  const { transactions } = useContext(GlobalContext);

  ///state
  const [total, setTotal] = useState({
    expense: 0,
    revenue: 0,
  });

  useEffect(() => {
    let expenseValues = null,
      revenueValues = null;
    if (transactions.length > 0) {
      //check whether there are transcations or not
      if (transactions.some((trans) => trans.type === "expense")) {
        //check whether there is at least one transaction of type EXPENSE
        const expenseTransactions = transactions.filter(
          (transaction) => transaction.type === "expense"
        );

        expenseValues = expenseTransactions.map((trans) => trans.value);
      }
      if (transactions.some((trans) => trans.type === "revenue")) {
        //check whether there is at least one transaction of type EXPENSE
        const revenueTransactions = transactions.filter(
          (transaction) => transaction.type === "revenue"
        );
        revenueValues = revenueTransactions.map((trans) => trans.value);
      }
      setTotal({
        ...total,
        expense: expenseValues
          ? expenseValues.reduce((acc, curr) => acc + curr)
          : 0,
        revenue: revenueValues
          ? revenueValues.reduce((acc, curr) => acc + curr)
          : 0,
      });
    }
  }, [transactions]);

  return (
    <div className="total">
      <div style={{ color: "red", fontSize: `18px` }}>
        Expenses: ${total.expense}
      </div>
      <div style={{ color: "green", fontSize: `18px` }}>
        Revenue: ${total.revenue}
      </div>
      <div
        className="balance"
        style={
          total.revenue > total.expense
            ? { color: "green", fontSize: `18px`, margin: `0 auto` }
            : { color: "red", fontSize: `18`, margin: `0 auto` }
        }
      >
        Balance:{" "}
        {total.revenue > total.expense ? (
          `$${total.revenue - total.expense}`
        ) : `$${total.expense > total.revenue}` ? (
          `$${total.expense - total.revenue}`
        ) : (
          <span>0</span>
        )}
      </div>
    </div>
  );
}

export default Total;
