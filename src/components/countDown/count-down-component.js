import React from 'react';
import ReactCountdownClock from "react-countdown-clock";

const CountDownComponent = ({count}) => {
    console.log(count)
    return (
        <div>
            <div>
                <ReactCountdownClock seconds={60} color="#000" alpha={0.9} size={300}/>
            </div>
            <div>
                <h2>counter is {count}</h2>
            </div>
        </div>
    )
};

export default CountDownComponent;