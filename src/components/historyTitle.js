import React from "react";


const HistoryTitle = (props) => {
    return (
        <div className="history">
            <h3 className="history-title">{props.value}</h3>
        </div>
    );
};

export default HistoryTitle;