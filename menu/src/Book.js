import './index.css' ;

const Book = (props) => {
  const { img, titel, author, number } = props;

  return (
    <article className="book">
      <img src={img} alt={titel} />
      <h2>{titel}</h2>
      <h4> {author} </h4>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  );
};
 export default Book;