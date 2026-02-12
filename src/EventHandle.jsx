import React from "react";
function EventHandle(){
    const handleClick = (e)=>e.currentTarget.textContent="unclick"
    return(
        <>
        <button onClick={(e)=>handleClick(e)}>
            Click Me
        </button>
        </>
    )
}
export default EventHandle;
