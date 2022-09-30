function TextList() {
  return (
    <>
      <input type="text" list="list" />
      <datalist id="list">
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="4"></option>
        <option value="5"></option>
        <option value="6"></option>
        <option value="7"></option>
        <option value="8"></option>
        <option value="9"></option>
        <option value="10"></option>
      </datalist>
    </>
  );
}

export default TextList;
