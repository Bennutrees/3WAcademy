import React, { Fragment, useState, useEffect } from 'react';

function CounterV1() {
    const [visible, setVisibility] = useState(false);

    return(
        <Fragment>
            <h1>Counter useEffect & useState</h1>
            <button onClick={() => setVisibility(!visible)}>ToggleCounter</button>
            {visible && <Counter />}
        </Fragment>
    );
}

const Counter = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCount(count => count + 1);
        }, 1000);
    }, []
    );

    return(
        <div className="container">
            <p>Counter : {count}</p>
            <button onClick={() => setCount(0)}>Start/Restart</button>
        </div>
    )
}

export default CounterV1;