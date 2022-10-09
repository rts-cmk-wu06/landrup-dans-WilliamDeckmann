const PageHeader = ({ children }) => {
  return (
    <div className="Page-header w-full px-7 py-9 fixed top-0 bg-purple">
      {children}
    </div>
  );
}
 
export default PageHeader;