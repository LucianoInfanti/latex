import '/Users/lucianoinfanti/latex/src/components/Sidebar/Styles/CategoryItem.css';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import ChevronIcon from '/Users/lucianoinfanti/latex/src/images/chevron-down.svg';

export default function CategoryItem ({ open, item, onClose }) {
  return(
    <button className="mainContentWrapper" aria-hidden={open ? "false" : "true"}
    onClick={() => {onClose();}}>
      <TeX className="TeX, categoryIcon" block>{ item.tex }</TeX>
      <p>{ item.name }</p> 
      <img src={ChevronIcon}/>
    </button>  
  )
};