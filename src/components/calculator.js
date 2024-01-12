import React from "react";
import Button from "./button";
import CalculatorTitle from "./calculatorTitle";
import OutputScreen from "./outputScreen";
import HistoryTitle from "./historyTitle";
import History from "./history";
import Suggestion from "./suggestion";

class Calculator extends React.Component {

    constructor() {
        super();
        //Set default state
        this.state = {
            question: '',
            answer: '',
            history: []
        }

        this.handleClick = this.handleClick.bind(this);
    }

    function

    handleClick(event) {
        // get the value from the target element (button)
        const value = event.target.value;

        switch (value) {
            case "=": {
                if (this.state.question !== "") {
                    var ans = "";
                    try {
                        ans = eval(this.state.question);
                    } catch (err) {
                        this.setState({answer: "Math Error"});
                    }
                    if (ans === undefined) this.setState({answer: "Math Error"});
                    else {
                        this.setState((prevState) => ({
                            answer: ans,
                            question: "",
                            history: [...prevState.history, {calculation: prevState.question, result: ans}],
                        }));
                    }
                    break;
                }
            }

            case "Clear": {
                // if it's the Clears sign, just clean our
                // question and answer in the state
                this.setState({question: "", answer: ""});
                break;
            }

            case "Delete": {
                var str = this.state.question;
                str = str.substr(0, str.length - 1);
                this.setState({question: str});
                break;
            }

            default: {
                // for every other command, update the answer in the state
                this.setState({question: (this.state.question += value)});
                break;
            }
        }
    }

    render() {
        return (
            <div className="frame"
                 style={{padding: 20, display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
                <div style={{marginLeft: "50px"}}>
                    <Suggestion answer={this.state.answer}/>
                </div>
                <div style={{display: "flex", flexDirection: "column", marginLeft: "50px"}}>
                    <CalculatorTitle value="Calculator"/>
                    <div className="mainCalc"
                         style={{backgroundColor: 'gray', padding: 20, width: "110px"}}>
                        <OutputScreen question={this.state.question} answer={this.state.answer}/>
                        <div className="button-row">
                            <Button label={"Clear"} handleClick={this.handleClick}/>
                            <Button label={"Delete"} handleClick={this.handleClick}/>
                        </div>
                        <div className="button-row">
                            <Button label={"7"} handleClick={this.handleClick}/>
                            <Button label={"8"} handleClick={this.handleClick}/>
                            <Button label={"9"} handleClick={this.handleClick}/>
                            <Button label={"*"} handleClick={this.handleClick}/>
                        </div>
                        <div className="button-row">
                            <Button label={"4"} handleClick={this.handleClick}/>
                            <Button label={"5"} handleClick={this.handleClick}/>
                            <Button label={"6"} handleClick={this.handleClick}/>
                            <Button label={"-"} handleClick={this.handleClick}/>
                        </div>
                        <div className="button-row">
                            <Button label={"1"} handleClick={this.handleClick}/>
                            <Button label={"2"} handleClick={this.handleClick}/>
                            <Button label={"3"} handleClick={this.handleClick}/>
                            <Button label={"+"} handleClick={this.handleClick}/>
                        </div>
                        <div className="button-row">
                            <Button label={"0"} handleClick={this.handleClick}/>
                            <Button label={"="} handleClick={this.handleClick}/>
                            <Button label={"."} handleClick={this.handleClick}/>
                            <Button label={"/"} handleClick={this.handleClick}/>
                        </div>
                    </div>
                    <div>
                        <HistoryTitle value={"History"}/>
                        <History history={this.state.history}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;