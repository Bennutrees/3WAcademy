import React, { useReducer } from 'react';

const initialState = {count: 0};

const reducer = (state, action) => {

  switch (action.type) {
    case 'incr':
      return {count: state.count + 1};
    case 'decr':
      return {count: state.count - 1};
    default:
      return state;
  }
}

function CounterV3() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container">
      <p>Counter : {state.count}</p>
      <button type="button" className="btn btn-primary mx-1" onClick={() => dispatch({type: 'decr'})}>-</button>
      <button type="button" className="btn btn-primary mx-1" onClick={() => dispatch({type: 'incr'})}>+</button>
    </div>
  );
}

export default CounterV3;