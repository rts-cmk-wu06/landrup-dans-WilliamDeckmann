const PageContainer = (props) => {
  return (
    <div className="Page-container h-full p-7 pt-0 mb-[66px] flex flex-col gap-[31px]"
      style={props.topMargin && {marginTop: props.topMargin}}
    >
      {props.children}
    </div>
  );
}
 
export default PageContainer;