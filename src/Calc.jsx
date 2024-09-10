import { useState } from "react";
import { calcUtil } from "./utils/Calc";

const Calc = ()=>{
    const [result, setResult]= useState(0);
    const [target, setTarget] = useState(0);
    const onChangeTarger = (e) => setTarget(Number(e.target.value))
    const onChangeResult= (targetFunc)=>{
        const newResult = targetFunc(result,target)
        setResult(newResult)
    }
    return <div>
        <h1>{result}</h1>
        <input type="number"  onChange={onChangeTarger}/>
        {calcUtil.map(obj=> 
            <button onClick={()=>onChangeResult(obj.func)}>{obj.name}</button>
        )}
    </div>

}

export default Calc;