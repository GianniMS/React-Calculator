import React from "react";


const HistoryTitle = (props) => {
    return (
        <div className="history">
            <span className="history-title">{props.value}</span>
        </div>
    );
};

export default HistoryTitle;