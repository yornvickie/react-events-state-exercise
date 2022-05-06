import { useState } from "react";

function Bonus(){
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const [letter, setLetter] = useState(0);

    const addLetter = () => {
        setLetter(a => {
            if (a === letters.length - 1){
                return 0;
            } else {
                return a + 1;
            }
        })
    }

    return (
        <div>
            <h1>{letters[letter]}</h1>
            <button onClick={addLetter}>NEXT LETTER</button>
        </div>
    )
}
export default Bonus;