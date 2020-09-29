import React, { useState } from "react";
import { connect } from "react-redux";
import store from "../store/store";
import * as allactions from "../store/actions/transactions";
import Transaction from "./Transaction";

const TransactionList = ({ props, dispatch }) => {
  const [lists, setList] = useState([]);

  store.subscribe(() => {
    if (store.getState().transactions.length === 0) {
      setList([]);
    } else if (!store.getState().del) {
      setList([...lists, store.getState().transaction]);
    }
  });

  const onbtnDelete = (trans) => {
    const item = lists.find((tr) => tr.id === trans.id);
    var index = lists.indexOf(item);
    const list = [...lists];

    if (index > -1) {
      list.splice(index, 1);
      setList(list);
    }

    dispatch({ type: allactions.DELETE_TRANS, trans: trans });
  };

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {lists.length > 0 &&
          lists.map((value, key) => {
            return value !== undefined ? (
              <Transaction
                transaction={value}
                key={key}
                btnDelete={() => onbtnDelete(value)}
              ></Transaction>
            ) : (
              <></>
            );
          })}
        {lists.length === 0 && (
          <div>
            <p style={{ textAlign: "center" }}>Empty</p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default connect()(TransactionList);
