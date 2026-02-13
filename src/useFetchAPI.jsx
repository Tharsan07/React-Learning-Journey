import { useEffect, useState } from "react";

function useFetchAPI(url){

  const [data,setData] = useState(null);
  const [error,setError] = useState("");
  const [loading,setLoading] = useState(true);

  useEffect(()=>{

    const timer = setTimeout(()=>{

      const apidata = async()=>{
        try{
          const info = await fetch(url);
          const json = await info.json();
          setData(json);
        }catch(err){
          setError(err.message);
        }finally{
          setLoading(false);
        }
      };

      apidata();

    },1000);

    return ()=> clearTimeout(timer);

  },[url]);

  return {data,error,loading};
}

export default useFetchAPI;
