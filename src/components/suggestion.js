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
        <div className="wrapper"  style={{ backgroundColor: 'white', padding: 10}}>
            <h2>Suggested number is: {num}</h2>
            <button onClick={handleClick} style={{ backgroundColor: 'black', color: 'white'}}>
                Suggest a number
            </button>
            <h2>Match the suggestion: {result}</h2>
        </div>
    );
};

export default Suggestion;