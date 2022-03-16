import { useContext } from "react";
import { CountContext } from "../Contexts/Count";

function DataTable() {
  const { count } = useContext(CountContext);

  return <div>{count}</div>;
}

export default DataTable;
