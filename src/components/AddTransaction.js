import React, { useState } from "react";
import * as allactions from "../store/actions/transactions";
import store from "../store/store";
import { connect } from "react-redux";

const AddTransaction = ({ dispatch }) => {
  const [amount, setAmount] = useState(0);
  const [text, setText] = useState("");
  const [balance, setB] = useState(0);
  store.subscribe(() => {
    setB(store.getState().balance);
  });
  const onbtnClicked = () => {
    if (amount > balance || balance === 0) {
      alert("Transaction not possible as your balance is " + balance);
    } else {
      dispatch({ type: allactions.DEBIT, cash: amount, name: text });
    }

    setText("");
    setAmount(0);
  };
  return (
    <div>
      <h3>Add Transaction</h3>

      <div className="form-control">
        <label>Text</label>
        <input
          type="text"
          id="text"
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>

      <div className="form-control">
        <label>Amount</label>
        <input
          type="number"
          id="amount"
          placeholder="Enter amount..."
          min="0"
          max="1000000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
      </div>
      <div style={{}}>
        <button
          className="btn"
          style={{
            backgroundColor: "green",
            marginRight: 25,
            marginLeft: 26,
            fontFamily: "Montserrat",
          }}
          onClick={() => {
            if (amount === 0) {
              alert("You have entered zero amount");
            } else if (amount !== 0 && text !== "") {
              dispatch({ type: allactions.ADD_CASH, cash: amount, name: text });
              setText("");
              setAmount(0);
            } else {
              alert("Please enter transaction Name");
            }
          }}
        >
          Add Income
        </button>
        <button
          className="btn"
          onClick={onbtnClicked}
          style={{ backgroundColor: "red", fontFamily: "Montserrat" }}
        >
          Add Expenses
        </button>
      </div>
    </div>
  );
};

export default connect()(AddTransaction);
