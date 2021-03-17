import React, { Fragment } from "react";
import {connect} from "react-redux";
// import CounterReducer from "../Reducers/CounterReducer";
import {counterPlus} from "../Actions/CounterActions";
import {counterMinus} from "../Actions/CounterActions";
import {counterPlus2} from "../Actions/CounterActions"
import {counterMinus2} from "../Actions/CounterActions";
import {counterZero} from "../Actions/CounterActions";
import {counterMulti2} from "../Actions/CounterActions";

const Counter = ({counter, counterPlus, counterMinus, counterPlus2, counterMinus2, counterZero, counterMulti2}) => {
    return (
        <Fragment>
        <div className="qty mt-5">
            <span className="minus bg-dark" onClick={counterMinus}>-</span>
            <input type="number" className="count" name="qty" value={ counter }/>
            <span className="plus bg-dark" onClick={counterPlus}>+</span>
        </div>
        <div className="qty mt-5">
        <span className="minus bg-dark" onClick={counterMinus2}>-2</span>
        <span className="plus bg-dark" onClick={counterPlus2}>+2</span>
        <span className="plus bg-dark" onClick={counterZero}>0</span>
        <span className="plus bg-dark" onClick={counterMulti2}>*2</span>
        </div>
        </Fragment>
    )
}
const mapStateToProps = ({CounterReducer}) => {
    const {counter} = CounterReducer;
    return {counter};
}
const mapDispatchToProps = {
    counterPlus,
    counterMinus,
    counterPlus2,
    counterMinus2,
    counterZero,
    counterMulti2
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter);