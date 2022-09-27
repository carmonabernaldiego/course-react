import "../assets/style/Article.css";

function Article({ title, description }) {
  return (
    <article>
      <h2 class="titulo">{title}</h2>
      <br />
      <div dangerouslySetInnerHTML={{__html: description}}></div>
    </article>
  );
}

export default Article;