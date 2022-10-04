import TextSmall from "./TextSmall";

const Loader = (props) => {
  return (
    <div className="Loader">
      <TextSmall text={`Loading ${props.text}...`} contrast={props.contrast} />
    </div>
  );
}
 
export default Loader;