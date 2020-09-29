var initialState = {
  id: 0,
  balance: parseInt(0),
  income: parseInt(0),
  expenses: parseInt(0),
  transactions: [],
};
const Trans = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CASH": {
      state.balance += parseInt(action.cash);
      state.income += parseInt(action.cash);
      var a = state.transactions;
      var obj = {
        name: action.name,
        cash: parseInt(action.cash),
        type: "credit",
        id: state.id++,
      };
      a.push(obj);
      state.transactions = a;
      return { ...state, transaction: obj, del: false };
    }
    case "DEBIT": {
      state.balance -= parseInt(action.cash);
      state.expenses += parseInt(action.cash);
      var b = state.transactions;
      var obj2 = {
        name: action.name,
        cash: parseInt(action.cash),
        type: "debit",
        id: state.id++,
      };
      b.push(obj2);
      if (state.balance === 0 && state.expenses > 0) {
        state.expenses = 0;
      }
      state.transactions = b;

      return { ...state, transaction: obj2, del: false };
    }
    case "DELETE_TRANS": {
      const getobj = state.transactions.find(
        (transaction) => transaction.id === action.trans.id
      );

      const i = state.transactions.indexOf(getobj);
      if (i > -1) {
        if (getobj.type === "credit") {
          state.balance -= getobj.cash;
          state.income -= getobj.cash;
        } else {
          state.balance += getobj.cash;
        }
        if (state.balance === 0 && state.expenses > 0) {
          state.expenses = 0;
        } else if (getobj.type !== "credit" && state.balance > 0) {
          state.expenses -= getobj.cash;
        }
        var t = state.transactions;
        t.splice(i, 1);
        state.transactions = t;
      }
      state.transaction = {};

      return { ...state, transaction: getobj, del: true };
    }

    default:
      return state;
  }
};
export default Trans;
