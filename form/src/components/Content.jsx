import Text from "../components/Text";
import TextList from "../components/TextList";
import Image from "../components/Image";
import Select from "../components/Select";
import MultipleSelect from "../components/MultipleSelect";
import TextArea from "../components/TextArea";
import Radio from "../components/Radio";
import CheckBox from "../components/CheckBox";
import "../assets/style/content.css";

function Content() {
  return (
    <>
      <fieldset>
        <section>
          <label class="label">Nombre</label>
          <label class="input">
            <Text />
          </label>
        </section>

        <section>
          <label class="label">Imagen</label>
          <label for="file" class="input input-file">
            <Image />
          </label>
        </section>

        <section>
          <label class="label">Cuatrimestre</label>
          <label class="input">
            <TextList />
          </label>
        </section>
      </fieldset>

      <fieldset>
        <section>
          <label class="label">Carrera</label>
          <label class="select">
            <Select />
          </label>
        </section>

        <section>
          <label class="label">Materias</label>
          <label class="select select-multiple">
            <MultipleSelect />
          </label>
        </section>
      </fieldset>

      <fieldset>
        <section>
          <label class="label">Observacionés</label>
          <label class="textarea">
            <TextArea />
          </label>
        </section>
      </fieldset>

      <fieldset>
        <section>
          <label class="label">Documentos</label>
          <Radio />
        </section>
      </fieldset>

      <fieldset>
        <section>
          <label class="label">Actividades Extracurriculares</label>
          <CheckBox />
        </section>
      </fieldset>
    </>
  );
}

export default Content;
