

const Button = ({className, onClick, type, text, style}) => {

  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      className={`${className} text-white rounded-full transform transition duration-300 ease-in-out`}
    >
      {text}
    </button>
  );
};

export default Button;
