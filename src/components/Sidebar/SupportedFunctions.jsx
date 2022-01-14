import '/Users/lucianoinfanti/latex/src/components/Sidebar/Styles/SupportedFunctions.css';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import ChevronIcon from '/Users/lucianoinfanti/latex/src/images/chevron-down.svg';

export default function SupportedFunctions ({ open, item, onClose }) {
  return(
    <button className="mainContentWrapper" aria-hidden={open ? "false" : "true"}
    onClick={() => {onClose();}}>
      <TeX className="TeX, categoryIcon" block>{ item.tex }</TeX>
      <p>{ item.supportedFunctionName }</p> 
      <img src={ChevronIcon}/>
    </button>  
  )
};