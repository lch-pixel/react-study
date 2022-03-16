function SearchOption() {
  let options = [];

  for (let i = 1; i <= 100; i++) {
    options.push(<option key={i}>{i}</option>);
  }

  return (
    <>
      <select>{options}</select>
      <button>검색</button>
    </>
  );
}

export default SearchOption;
