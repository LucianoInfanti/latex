import '/Users/lucianoinfanti/latex/src/components/Sidebar/Styles/CategoryContent.css';

const SelectedFunction = ({ open, subCategoryTitle, onClose, children  }) => {
    return (
     <div className='categoryContentWrapper' aria-hidden={open ? "false" : "true"}>
         <button onClick={() => {onClose();}}>Go back</button>
         {open && children}
     </div>
    );
  }
 
export default SelectedFunction;