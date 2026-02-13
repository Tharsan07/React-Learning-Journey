import useFetchAPI from "./useFetchAPI";

function FetchAPI(){

  const {data,error,loading} =
    useFetchAPI("https://jsonplaceholder.typicode.com/todos/1");

  if(loading){
    return <p>Loading...</p>;
  }

  if(error){
    return <p>Error: {error}</p>;
  }

  return(
    <>
      <p>UserId: {data.userId}</p>
      <p>ID: {data.id}</p>
      <p>Title: {data.title}</p>
      <p>Completed: {data.completed ? "true" : "false"}</p>
    </>
  );
}

export default FetchAPI;
