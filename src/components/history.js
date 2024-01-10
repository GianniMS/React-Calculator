import React from "react";

const History = ({ history }) => {
    return (
        <div className="history">
            <ul>
                {history.map((entry, index) => (
                    <li key={index}>
                        {entry.calculation} = {entry.result}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default History;