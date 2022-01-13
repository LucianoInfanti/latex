import '/Users/lucianoinfanti/latex/src/components/Sidebar/Styles/CategoryItem.css';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import ChevronIcon from '/Users/lucianoinfanti/latex/src/images/chevron-down.svg';

export default function CategoryItem ({ item }) {
  return(
    <div className="mainContentWrapper">
      <TeX className="TeX, categoryIcon" block>{ item.tex }</TeX>
      <p>{ item.name }</p> 
      <img src={ChevronIcon}/>
    </div>  
  )
};