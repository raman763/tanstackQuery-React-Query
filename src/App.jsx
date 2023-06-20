import "./App.css";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import User from "./User";

// const studentList = [
//   {
//     id: "1",
//     name: "raman",
//     email: "raman@gmail.com",
//   },
//   {
//     id: "2",
//     name: "ankit",
//     email: "ankit@gmail.com",
//   },
// ];
function App() {
  // const queryClient = useQueryClient();
  // const studentQuery = useQuery({
  //   queryKey: ["studentLists"],
  //   queryFn: () => wait(1000).then(() => [...studentList]),
  //   // queryFn: () => Promise.reject("error"),
  // });

  // const newPostMutation = useMutation({
  //   mutationFn: (data) => {
  //     const { name, email } = data;
  //     console.log("name", name, email);
  //     return wait(1000).then(() =>
  //       studentList.push({ id: crypto.randomUUID(), name, email })
  //     );
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["studentLists"]);
  //   },
  // });

  // if (studentQuery.isLoading) return <div>Loading...</div>;
  // if (studentQuery.isError) {
  //   return <pre>{JSON.stringify(studentQuery.error)}</pre>;
  // }

  return (
    <>
      {/* {studentQuery.data.map((student, index) => (
        <div key={index}>
          <div>
            {student.name} and {student.email}
          </div>
        </div>
      ))}

      <button
        disabled={newPostMutation.isLoading}
        onClick={() =>
          newPostMutation.mutate({ name: "ankit", email: "ankit@gmail.com" })
        }
      >
        Add New Student
      </button>
   */}
      <User />
    </>
  );
}

export default App;
{
  /* 
function wait(time) {
  return new Promise((resolve, reject) => setTimeout(resolve, 1000));
} */
}
