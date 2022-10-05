import TextSmall from "./TextSmall";

const Loader = (props) => {
  return (
    <div className="Loader">
      <TextSmall text={`Loader ${props.text}...`} contrast={props.contrast} />
    </div>
  );
}
 
export default Loader;