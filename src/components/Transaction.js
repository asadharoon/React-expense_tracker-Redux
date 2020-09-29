import React from "react";
import { connect } from "react-redux";
const Transaction = ({ transaction, btnDelete }) => {
  const sign = transaction.type === "debit" ? "-" : "+";
  return (
    <li
      className={transaction.type === "debit" ? "minus" : "plus"}
      key={transaction.id}
    >
      {transaction.name}{" "}
      <span>
        {sign}${transaction.cash}.00
      </span>
      <button className="delete-btn" onClick={btnDelete}>
        x
      </button>
    </li>
  );
};

export default connect()(Transaction);
