import React, { Fragment, useState, useEffect, useRef } from 'react';

function CounterV2() {
    const [visible, setVisibility] = useState(false);

    return(
        <Fragment>
            <h1>Counter useEffect & useState</h1>
            <button onClick={() => setVisibility(!visible)}>ToggleCounter</button>
            {visible ? <Counter /> : null}
        </Fragment>
    );
}

const Counter = (props) => {
    const [count, setCount] = useState(0);
    const [activated, setActivation] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (activated) {
            intervalRef.current = setInterval(() => {
                setCount(count => count + 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }
    }, [activated]
    );

    return(
        <div className="container">
            <p>Counter : {count}</p>
            <button onClick={() => setActivation(true)} disabled = {activated}>Start</button>
            <button onClick={() => setActivation(false)} disabled = {!activated}>Stop</button>
            <button onClick={() => setCount(0)} disabled = {count < 1}>Reset</button>
        </div>
    )
}

export default CounterV2;