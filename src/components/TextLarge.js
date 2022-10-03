const TextLarge = (props) => {
  return (
    <p className={`Text-large text-large leading-large text-${props.contrast ? "black" : "white"}`}>
      {props.text}
    </p>
  );
}
 
export default TextLarge;