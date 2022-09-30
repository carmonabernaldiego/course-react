function Radio() {
  return (
    <>
      <div class="row">
        <div class="col col-4">
          <label class="radio">
            <input type="radio" name="radio" checked />
            <i></i>Acta de nacimiento
          </label>
          <label class="radio">
            <input type="radio" name="radio" />
            <i></i>Comprobante de estudios
          </label>
          <label class="radio">
            <input type="radio" name="radio" />
            <i></i>Reglamento escolar
          </label>
        </div>
        <div class="col col-4">
          <label class="radio">
            <input type="radio" name="radio" />
            <i></i>CURP
          </label>
          <label class="radio">
            <input type="radio" name="radio" />
            <i></i>Certificado Secundaria
          </label>
          <label class="radio">
            <input type="radio" name="radio" />
            <i></i>Pago Inscripción
          </label>
        </div>
      </div>
    </>
  );
}

export default Radio;
