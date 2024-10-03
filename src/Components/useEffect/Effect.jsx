import { useEffect, useState } from "react";

const Effect = () => {
    const [time, setTime] = useState(new Date());
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount((prev) => prev + 1);
    }
    const tick = () => {

        setTime(new Date())
    }
    useEffect(() => {
        document.title = `Count is ${count}`
    }, [count])
    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        }

    }, [])
    return (
        <div>

            <h4>Time {time.toLocaleTimeString()}</h4>
            <button type="button" onClick={addCount}>Clickk</button>

        </div>
    );
};

export default Effect;