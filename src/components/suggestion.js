import React, {useState} from "react";

const Suggestion = (props) => {
    const [num, setNum] = useState(0);
    let result = "false";

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    const handleClick = () => {
        setNum(randomNumberInRange(1, 20));
    };

    if (num === props.answer) {
        result = "correct";
    } else {
        result = "false";
    }

    return (
        <div className="wrapper">
            <h2>Number is: {num}</h2>
            <button onClick={handleClick}>
                Click Me Generate
            </button>
            <h2>{result}</h2>
        </div>
    );
};

export default Suggestion;