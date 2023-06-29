import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchStudentdata = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

const postStudentData = (data) => {
  return axios.post("https://jsonplaceholder.typicode.com/posts", data);
};

const User = () => {
  const queryClient = useQueryClient();

  //get function
  const { isLoading, isError, data } = useQuery({
    queryKey: ["studentDetails"],
    queryFn: fetchStudentdata,
  });

  const mutation = useMutation({
    mutationFn: postStudentData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["studentDetails"] });
    },
  });
  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  console.log("first");
  return (
    <>
      <div>tanstack</div>
      {data.data.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: "Do Laundry",
          });
        }}
      >
        Add Todo
      </button>
    </>
  );
};

export default User;
