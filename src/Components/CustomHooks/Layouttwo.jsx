import { useEffect, useState } from "react";


const Layouttwo = () => {
    const [smallScreen, setSmallScreen] = useState(false);
    const cheackSize = () => {
        setSmallScreen(window.innerWidth < 780)
    }

    useEffect(() => {
        cheackSize()
        window.addEventListener('resize', cheackSize)

        return () => {
            window.removeEventListener('resize', cheackSize)
        }
    }, [])

    return (
        <div>
            <h1>You are browsing on {smallScreen ? "small" : "big"} device</h1>
        </div>
    );
};

export default Layouttwo;