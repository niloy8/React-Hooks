import { useEffect, useState } from "react";


const useWindowwidth = (screen) => {
    const [smallScreen, setSmallScreen] = useState(false);

    useEffect(() => {
        const cheackSize = () => {
            setSmallScreen(window.innerWidth < screen)
        }
        cheackSize()
        window.addEventListener('resize', cheackSize)

        return () => {
            window.removeEventListener('resize', cheackSize)
        }
    }, [screen])
    return smallScreen;
};

export default useWindowwidth;