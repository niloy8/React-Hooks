
import withCounter from "./withCounter";

const HoverCounter = props => {
    const { count, increment } = props;
    return (
        <div>
            <h1 onMouseOver={increment}>Hovered {count} times</h1>
        </div>

    )

};


export default withCounter(HoverCounter);