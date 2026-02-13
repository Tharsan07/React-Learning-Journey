import React, { useEffect, useState } from "react";
import '../src/Counter.css'

function Counter(){
    const [count,setCount]=useState(0);
    const [color,setColor]=useState('green')

    useEffect(()=>{
        document.title=`Count:${count}`
    })

    const handleAdd = ()=>{
        setCount(count+1);
    }

     const handleSubract = ()=>{
        setCount(count-1);
    }

    const handleReset=()=>{
        setCount(0)
    }

    const handleColor=()=>{
            setColor(
                color=='green'?'red':'green'
            )
    }

    return(
       <>
       <div className="container">
        <p style={{color}}>Count :{count}</p>
       <button onClick={handleAdd}>Add</button>
       <button onClick={handleSubract}>Subract</button>
       <button onClick={handleReset}>Reset</button><br/>
       <button onClick={handleColor}>Color Change</button>
       </div>

       

       </>

    );
}
export default Counter;