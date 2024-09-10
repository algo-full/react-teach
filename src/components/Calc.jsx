import { useState } from "react";
import { calc } from "../feature/Calc";
import ResultView from "./calc/ResultView";
import CalcHandler from "./calc/CalcHandler";


const Calc = () => {
    console.log("Calc")
    const [result, setResult]= useState(0);
    return <div>
        <ResultView result={result}/>
        <CalcHandler result={result} setResult={setResult} />
        
    </div>

}

export default Calc;