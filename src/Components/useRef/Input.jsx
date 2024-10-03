import { useEffect, useRef } from "react";
import Ainput from "./Ainput";

const Input = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        console.log(inputRef.current)
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <Ainput text="text" ref={inputRef} place="Type something"></Ainput>
        </div>
    );
};

export default Input;
