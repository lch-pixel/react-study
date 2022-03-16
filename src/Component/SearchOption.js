import { createRef, useContext } from "react";
import { CountContext } from "../Contexts/Count";

function SearchOption() {
  const { search } = useContext(CountContext);
  const idSelectRef = createRef();

  let options = [];

  for (let i = 1; i <= 10; i++) {
    options.push(<option key={i}>{i}</option>);
  }

  return (
    <>
      <select ref={idSelectRef}>{options}</select>
      <button onClick={() => search(idSelectRef.current.value)}>검색</button>
    </>
  );
}

export default SearchOption;
