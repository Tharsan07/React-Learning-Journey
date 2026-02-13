// import React, { useEffect, useState } from "react";

import { func } from "prop-types";
import { useEffect, useState } from "react";

// function FetchAPI() {

//   const [data, setData] = useState(null);

//   useEffect(() => {

//     const fetchData = async () => {
//       try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const json = await res.json();
//         console.log(json);
//         setData(json);   // ✅ store full object
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();

//   }, []);

//   return (
//     <>
//       {data && (
//         <>
//           <p>UserId: {data.userId}</p>
//           <p>Id: {data.id}</p>
//           <p>Title: {data.title}</p>
//           <p>Completed: {data.completed.toString()}</p>
//         </>
//       )}
//     </>
//   );
// }

// export default FetchAPI;


function FetchAPI(){
    const[data,setData]=useState("");

    useEffect(()=>{
        const apidata=async()=>{
            const info= await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const json= await info.json();
            console.log(json);
            setData(json);
        }
        apidata();
        
    },[])
    
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