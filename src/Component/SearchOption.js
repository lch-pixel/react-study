import { useContext } from "react";
import { CountContext } from "../Contexts/Count";

function SearchOption() {
  const { plusCount } = useContext(CountContext);

  let options = [];

  for (let i = 1; i <= 100; i++) {
    options.push(<option key={i}>{i}</option>);
  }

  return (
    <>
      <select>{options}</select>
      <button onClick={plusCount}>검색</button>
    </>
  );
}

export default SearchOption;
