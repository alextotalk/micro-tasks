import React, {useState} from 'react';

const UseStat = () => {

    let [sum, setSum] = useState(0)

    const addOne = () => {
        setSum(++sum)
        console.log(sum)
    }
    const reset = () => {
        setSum(sum=0)
     }

    return (
        <>
            <h1>{sum}</h1>
            <button onClick={addOne}> push 1</button>
            <button onClick={reset}>0</button>
        </>
    );
};

export default UseStat;