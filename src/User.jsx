import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchStudentdata = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

const User = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["studentDetails"],
    queryFn: fetchStudentdata,
  });
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  console.log("first");
  return (
    <>
      <div>tanstack</div>
      {data.data.map((item) => {
        console.log(item);
      })}
    </>
  );
};

export default User;
