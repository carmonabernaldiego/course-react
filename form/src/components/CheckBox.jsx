function CheckBox() {
  return (
    <>
      <div class="row">
        <div class="col col-4">
          <label class="checkbox">
            <input type="checkbox" name="checkbox" checked />
            <i></i>Marimba
          </label>
          <label class="checkbox">
            <input type="checkbox" name="checkbox" />
            <i></i>Atletismo
          </label>
          <label class="checkbox">
            <input type="checkbox" name="checkbox" />
            <i></i>Karate Do
          </label>
        </div>
      </div>
    </>
  );
}

export default CheckBox;
