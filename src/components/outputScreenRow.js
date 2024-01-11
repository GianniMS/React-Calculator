import React from "react";

const OutputScreenRow = (props) => {
    return (
        <div className="screen-row">
            <input type="text" readOnly value={props.value} style={{ backgroundColor: "green", width: "100px"}}/>
        </div>
    );
};

export default OutputScreenRow;