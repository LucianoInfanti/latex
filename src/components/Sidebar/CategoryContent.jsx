import '/Users/lucianoinfanti/latex/src/components/Sidebar/CategoryContent.css';

const CategoryContent = ({ open, subCategoryTitle, onClose, children  }) => {
    return (
     <div className='categoryContentWrapper' aria-hidden={open ? "false" : "true"}>
         <h3>{subCategoryTitle}</h3>
         <button onClick={() => {onClose();}}>Go back</button>
         {open && children}
     </div>
    );
  }
 
export default CategoryContent;