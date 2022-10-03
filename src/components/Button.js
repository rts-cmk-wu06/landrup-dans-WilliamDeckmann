// Components
import TextSmall from "./TextSmall";

const Button = (props) => {
  return (
    <div className="Button w-[249px]">
      <button className="w-full p-4 bg-purple rounded-xl" onClick={props.function}>
        <TextSmall text={props.text}/>
      </button>
    </div>
  );
};

export default Button;
