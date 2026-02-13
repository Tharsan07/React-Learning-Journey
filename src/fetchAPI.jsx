import { func } from "prop-types";
import { useEffect, useState } from "react";

function FetchAPI(){
    const[data,setData]=useState("");
    const[error,setError]=useState("")

useEffect(() => {

  const apidata = async () => {
    try {
      const info = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const json = await info.json();
      setData(json);
    } catch (error) {
      console.log(error.message);
      setError(error.message)
    }
  };

  apidata();

}, []);

    
    return(
        //return the data only if have an data instead of null
        //check the comditions before loading an data
        
        
              <> 
            <p>{data.userId}</p>
            <p>{data.id}</p>
            <p>{data.title}</p>
            <p>{data.completed}</p>
        </>
        
      
    );
}
export default FetchAPI;