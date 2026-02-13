import { useEffect, useState } from "react";

function FetchAPI(){

  const [data,setData] = useState(null);
  const [error,setError] = useState("");
  const [loading,setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      const apidata = async () => {
        try {
          const info = await fetch("https://jsonplaceholder.typicode.com/todos/1");
          const json = await info.json();
          setData(json);
        } catch (error) {
          console.log(error.message);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      apidata();

    },1000);

    return () => clearTimeout(timer);

  }, []);

  // 🔹 Loading UI
  if(loading){
    return <p>Loading...</p>;
  }

  // 🔹 Error UI
  if(error){
    return <p>Error: {error}</p>;
  }

  return(
    <>
      <p>{data.userId}</p>
      <p>{data.id}</p>
      <p>{data.title}</p>
      <p>{data.completed ? "true" : "false"}</p>
    </>
  );
}

export default FetchAPI;
