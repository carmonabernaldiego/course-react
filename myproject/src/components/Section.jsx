import "../assets/style/section.css";
import Article from "./Article";

function Section() {
  const news = [
    {
      id: 1,
      title: "Cualidades esenciales de un Product Manager",
      description:
        "<p>En general, como gerente de producto, debe parecer seguro. Su capacidad para influir en los demás a menudo dependerá de ello. No importará si traes datos sólidos y años de experiencia contigo. Si tienes dudas o no estás seguro, tu día será mucho más difícil.</p><br /><p>La confianza es genial, pero no la confundas con Hubris. Los gerentes de producto necesitan saber cuándo están equivocados, admitirlo, entenderlo y aprender de él.</p>",
    },
    {
      id: 2,
      title:
        "El nuevo modelo IA de Nvidia genera con rapidez objetos 3D para incorporarlos a mundos virtuales",
      description:
        "<p><b>Nvidia</b> ha presentado un nuevo <b>modelo de inteligencia artificial</b> (IA) que genera objetos tridimensionales para su posterior uso en mundos virtuales de sectores como el del videojuego, la arquitectura o la robótica.</p><br /><p><b>NVIDIA GET3D</b>, el nombre que recibe este modelo, ha sido entrenado con cerca de <b>un millón de imágenes en 2D de objetos 3D</b> capturados desde distintos ángulos, usando la GPU Nvidia A100 Tensor Core, lo que llévó a los investigadores en torno a dos días.</p>",
    },
    {
      id: 3,
      title: "Windows 11 despliega su primera gran actualización",
      description:
        "<p>La primera gran actualización de Windows 11 ha empezado su despliegue, con nuevas funciones que mejoran la seguridad, la accesibilidad y la productividad, y que acompaña con la extensión de la versión anticipada de Amazon Appstore a más mercados.</p><br /><p>Windows 11 es la versión de este sistema operativo más utilizada y valorada de su historia, como ha apuntado Microsoft en un comunicado, con motivo del despliegue de la actualización, que ha lanzado este martes en más de 190 países.</p>",
    },
  ];

  return (
    <section class="main">
      <article>
        <h2 class="titulo-presentacion">
          <span>Hola, soy Diego</span>
          <br />
          <br />
          Estudiante en Software,
          <br />
          Becario en Programación
        </h2>
        <br />
        <br />
        <p>Suscríbete para un resumen mensual</p>
        <input type="email" placeholder="Su dirección de correo electrónico" />
        <button>Subscribir</button>
      </article>
      {news.map((newItem) => {
        return (
          <Article
            key={newItem.id}
            title={newItem.title}
            description={newItem.description}
          />
        );
      })}
    </section>
  );
}

export default Section;