import { useState } from "react";

export default function Even() {
    const [add, setAdd] = useState(0);

    const handleEven = () => {
        const newAdd = add + 2;
        setAdd(newAdd)
    }

    const handleOdd = () => {
        setAdd(add % 2)
    }

    const handleReset = () => {
        setAdd(add * 0)
    }

    return (
        <div style = {{border: '2px solid black',
        padding: '15px'
        }}>
            <h2>{add}</h2>
            <button onClick = {handleEven}>Even Number</button>
            <button onClick = {handleOdd}>Odd Number</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    ) ;
}


