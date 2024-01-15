import React from "react";
import OutputScreenRow from "./outputScreenRow";
import "./style/outputScreen.css";

const OutputScreen = (props) => {
    return (
        <div className="screen">
            <OutputScreenRow value={props.question}/>
            <OutputScreenRow value={props.answer}/>
        </div>
    );
};

export default OutputScreen;