import React from 'react';
import { useEffect } from 'react';

export default function MakeApi() {

    const[swData, setSwData] = React.useState({})
    const[count, setCount] = React.useState(0);

    useEffect(function () {
        console.log("https://swapi.dev/api/people/" + count);
        fetch("https://swapi.dev/api/people/" + count)
        .then(res => res.json())
        .then(data => setSwData(data));
    }, [count]);

    function handlecount() {
        setCount(prevCount => {
            return prevCount + 1
        });
    }

    return (
        <div>
            <pre>{JSON.stringify(swData, null, 2)}</pre>
            <br/>
            <div>Current Number: {count} </div>
            <div onClick={handlecount}>+</div>
        </div>
    )
}