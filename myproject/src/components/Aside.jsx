import screen1 from "../assets/img/screen_1.png";
import screen2 from "../assets/img/screen_2.jpg";
import screen3 from "../assets/img/screen_3.jpg";
import screen4 from "../assets/img/screen_4.png";
import "../assets/style/aside.css";

function Section() {
  return (
    <aside>
      <span>Proyectos recientes</span>
      <div class="widget">
        <div class="imagen">
          <img src={screen1} width="100%" alt=""></img>
        </div>
      </div>

      <div class="widget">
        <div class="imagen">
          <img src={screen2} width="100%" alt=""></img>
        </div>
      </div>

      <div class="widget">
        <div class="imagen">
          <img src={screen3} width="100%" alt=""></img>
        </div>
      </div>

      <div class="widget">
        <div class="imagen">
          <img src={screen4} width="100%" alt=""></img>
        </div>
      </div>
    </aside>
  );
}

export default Section;