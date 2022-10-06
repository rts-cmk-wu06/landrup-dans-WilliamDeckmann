const TextLargeSnippet = (props) => {
  return (
    <p className="Text-large text-large leading-large whitespace-nowrap" style={{color: props.contrast ? "black" : "white"}}>
      {props.text}
    </p>
  );
}
 
export default TextLargeSnippet;