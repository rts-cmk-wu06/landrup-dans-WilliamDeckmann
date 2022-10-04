const TextSmall = (props) => {
  return (
    <p className="Text-small text-small leading-small" style={{color: props.contrast ? "black" : "white"}}>
      {props.text}
    </p>
  );
}
 
export default TextSmall;