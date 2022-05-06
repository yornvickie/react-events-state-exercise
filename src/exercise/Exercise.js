import {useState} from 'react';

function Exercise(){
    const [num, setNum] = useState(1);
    
    function addNum(){
        setNum(num + 1)
    }

    return (
        <div>
            <button onClick={() => alert('Congrats! You have clicked the button.')} >CLICK HERE</button>
            <button onClick={addNum}>STATE</button>
            <h1>{num}</h1>
        </div>
    )
}

export default Exercise;