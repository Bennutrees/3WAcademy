import React, { useReducer } from 'react';

const initialState = {
    number1: '',
    number2: '',
    result: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'setNumber1':
            return { ...state, number1: action.value };
        case 'setNumber2':
            return { ...state, number2: action.value };
        case 'add':
            return { ...state, result: Number(state.number1) + Number(state.number2) };
        case 'times':
            return { ...state, result: Number(state.number1) * Number(state.number2) };
        case 'reset':
            return { ...state, ...initialState };
        default:
            return state;
    }
}

const Calculatrice = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { number1, number2 } = state;

    return (
        <div className="container">
            <div className="container inputs my-4">
                <h1>Calculatrice</h1>
                <div className="form-group my-3">
                    <label htmlFor="number1">Number 1</label>
                    <input className="form-control" id="number1" type="number" value={number1} onChange={event => dispatch({ type: 'setNumber1', value: event.target.value})}></input>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="number2">Number 2</label>
                    <input className="form-control" id="number2" type="number" value={number2} onChange={event => dispatch({ type: 'setNumber2', value: event.target.value})}></input>
                </div>
            </div>
            <div className="container actions my-4">
                <button type="button" className="btn btn-primary mx-1" onClick={() => dispatch({ type: 'add' })}>+</button>
                <button type="button" className="btn btn-primary mx-1" onClick={() => dispatch({ type: 'times' })}>×</button>
            </div>
            <div className="container results my-4">
                {/* <p>Number 1 : {state.number1}</p>
                <p>Number 2 : {state.number2}</p> */}
                <p>Result : {state.result}</p>
                <button type="button" className="btn btn-primary mx-1" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
        </div>
    );
}

export default Calculatrice;