const TextMedium = (props) => {
  return (
    <p className="Text-medium text-medium leading-medium" style={{color: props.contrast ? "black" : "white"}}>
      {props.text}
    </p>
  );
}
 
export default TextMedium;