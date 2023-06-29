import { useQuery } from "@tanstack/react-query";
import { getdataList } from "../API/API";

const StudentDataList = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["Students"],
    queryFn: getdataList,
    cacheTime: 3000,
  });

  //if you seen any error in prior code then check where u use this loading functionality
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  console.log("data", data);
  return (
    <>
      {data.data.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
    </>
  );
};

export default StudentDataList;
