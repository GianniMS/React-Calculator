import React from "react";
import "./style/calculatorTitle.css";

const CalculatorTitle = (props) => {
    return (
        <h3 className="calculator-title">{props.value}<span>.</span></h3>
    );
};

export default CalculatorTitle;
