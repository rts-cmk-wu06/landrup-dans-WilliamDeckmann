const TextMedium = (props) => {
  return (
    <p className={`Text-medium text-medium leading-medium text-${props.contrast ? "black" : "white"}`}>
      {props.text}
    </p>
  );
}
 
export default TextMedium;