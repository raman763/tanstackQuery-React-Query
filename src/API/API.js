import axios from "axios";

export const getdataList = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};
