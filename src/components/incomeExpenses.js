import React, { useState } from "react";
import { connect } from "react-redux";
import store from "../store/store";
const IncomeExpenses = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExp] = useState(0);
  store.subscribe(() => {
    setIncome(store.getState().income);
    setExp(store.getState().expenses);
  });
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income}.00
        </p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p id="money-minus" className="money minus">
          {" "}
          -${expense}.00
        </p>
      </div>
    </div>
  );
};

export default connect()(IncomeExpenses);
