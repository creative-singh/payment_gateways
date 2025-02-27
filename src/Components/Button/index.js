import "./styles.css"

const Button = ({value, onSquareClick}) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );  
}

export default Button