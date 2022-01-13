import './CategoryItem.css';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// FORMA BASE DA LISTA
export default function CategoryItem ({ item }) {
    return(
    <>
        <div className="mainContentWrapper">
        <TeX className="TeX, categoryIcon" block>{ item.tex }</TeX>
        <p>{ item.name }</p> 
      </div>
    </>
    )
};

// FORMA CORRETA DE ACESSAR OS ITENS DENTRO DO ARRAY.
// <p>{categoryDetail.sections[0].categorySectionItem[0].tex}</p> 