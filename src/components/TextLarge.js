const TextLarge = (props) => {
  return (
    <p className="Text-large text-large leading-large" style={{color: props.contrast ? "black" : "white"}}>
      {props.text}
    </p>
  );
}
 
export default TextLarge;