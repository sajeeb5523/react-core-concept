import { useState } from "react"

export default function Batsman() {

    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);

    const handleSingle = () => {
        const updateRuns = runs + 1;
        setRuns(updateRuns);
    }

    const handleFour = () => {
        const updateRuns = runs + 4;
        setRuns(updateRuns);
    }

    const handleSix = () => {
        const updateRuns = runs + 6;
        setRuns(updateRuns);
        const updateSixes = sixes + 1;
        setSixes(updateSixes);
    }

    return(
        <div>
            <h3>Player: Bangla Batsman</h3> 
            <p><small>Sixes: {sixes} </small></p>
            {
                runs > 50 && <p>Your score : {runs} </p>
            }
            <h1>Score: {runs} </h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        

        </div>
    )
}