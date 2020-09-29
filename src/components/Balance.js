import React, { useState } from "react";
import store from "../store/store";
import { connect } from "react-redux";

const Balance = (props) => {
  const [balance, setB] = useState(0);
  store.subscribe(() => {
    setB(store.getState().balance);
  });

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="Balance">${balance}.00</h1>
    </>
  );
};

export default connect()(Balance);
