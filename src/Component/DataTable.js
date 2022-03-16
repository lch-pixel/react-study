import { useContext, useEffect, useState } from "react";
import { CountContext } from "../Contexts/Count";

function DataTable() {
  const { id } = useContext(CountContext);
  const [userInfo, setUserInfo] = useState({
    id: null,
    name: null,
    username: null,
    email: null,
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setUserInfo(json));
  }, [id]);

  return (
    <>
      <div>{userInfo.id}</div>
      <div>{userInfo.name}</div>
      <div>{userInfo.username}</div>
      <div>{userInfo.email}</div>
    </>
  );
}

export default DataTable;
