import { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1

        default:
            return state
    }
}
const Counter = () => {
    const [count, dispact] = useReducer(reducer, initialState)
    return (
        <div>
            <h4>Count is - {count}</h4>
            <button id="increment" type="button" onClick={() => dispact('increment')}>Increment</button>
            <button id="decrement" type="button" onClick={() => {
                dispact('decrement')
            }}>Decrement</button>
        </div>
    );
};

export default Counter;