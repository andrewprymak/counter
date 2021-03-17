const initialState = {
    counter: 0
}

const CounterReducer = (state = initialState, action) => {
    switch(action.type){
        case "PLUS": 
        return {
            counter: state.counter += 1
        }
        case "MINUS":
            return {
                counter: state.counter -= 1
            }
        case "PLUS2": 
            return {
                counter: state.counter += 2
            }
        case "MINUS2":
            return {
                counter: state.counter -= 2
            }
        case "ZERO":
            return {
                counter: state.counter *= 0
            }
        case "MULTI2":
            return {
                counter: state.counter *= 2
            }
        default: 
            return state;
    }
}

export default CounterReducer;