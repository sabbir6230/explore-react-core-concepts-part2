import { useState } from "react"

export default function Counter() {
    const [add, setAdd] = useState(0); 


    const handleAdd = () =>{
        const newAdd = add + 1;
        setAdd(newAdd);
    }

    const handleVulHose = () => {
        setAdd(add - 1);
    }

    return (
        <div>
            <h3>{add}</h3>
            <button onClick = {handleAdd}>Subhanallah</button>
            <button onClick = {handleVulHose}>VullHoyese</button>
        </div>
    )

}

