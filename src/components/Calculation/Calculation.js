import React from 'react';

const Calculation = (props) => {
    return (
        <div>
            <button onClick={() => props.handleBreakTime(props.time)}>{props.time}sec</button>
        </div>
    );
};

export default Calculation;