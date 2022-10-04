const PageContainer = ({ children }) => {
  return (
    <div className="Page-container h-full p-7 mb-[66px] flex flex-col gap-[31px] bg-purple">
      {children}
    </div>
  );
}
 
export default PageContainer;