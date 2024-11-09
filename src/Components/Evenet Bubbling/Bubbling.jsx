
const Bubbling = () => {
    const handleClick = e => {
        console.log("Parent : ", e);
    }

    const handleButtonClick = e => {
        e.stopPropagation()
        console.log("Child : ", e);
    }
    return (
        <div className="parent" onClick={handleClick}>
            <h1>React Bubbling</h1>
            <button onClick={handleButtonClick}>+</button>
        </div>
    );
};

export default Bubbling;