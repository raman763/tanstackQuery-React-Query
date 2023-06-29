import "./App.css";
import StudentDataList from "./StudentData/StudentDataList";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import User from "./User";

function App() {
  return (
    <>
      <StudentDataList />
      <User />
    </>
  );
}

export default App;
