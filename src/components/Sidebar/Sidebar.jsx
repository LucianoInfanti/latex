import '/Users/lucianoinfanti/latex/src/components/Sidebar/Styles/Sidebar.css'
import 'katex/dist/katex.min.css';
import { useState } from 'react';
import CategoryItem from './CategoryItem';
import CategoryContent from './CategoryContent.jsx';
import CategoryData from '/Users/lucianoinfanti/latex/src/components/Sidebar/Data/Category.json';
import SectionContent from './SectionContent';

export default function Sidebar( ) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [value, setValue] = useState('');

  const addLatexArgument = (latexArgument) => {
        setValue(value + '\\' + latexArgument);
    }
  
  function Teste(params) {
    
  }

  const CategoryList = (
    <ul>
      {CategoryData.map(( item , index ) =>
      <li key={ index }>
        <button className="categoryCardWrapper"
          onClick={() => setSelectedCategory(item)}>
          <CategoryItem item={ item }/>
        </button>
      </li>
      )}
    </ul>
  );

  const SubCategoryList = (
    <ul>
      <h4>{CategoryData[0].sections[0].name}</h4>
      {CategoryData.map(( item, index ) =>
        <button className="categoryCardWrapper"
        onClick={() => addLatexArgument({ item })}>
        <SectionContent item={ item }
        onClose={() => setSelectedCategory(null)}/>
      </button>
      )}
    </ul>
  );

  return( 
    <div className="panelWrapper">
      <CategoryContent 
        onClose={() => setSelectedCategory(null)}
        open={Boolean(selectedCategory)}
        subCategoryTitle={CategoryData[0].sections[0].categorySectionItem[0].tex}>
        {SubCategoryList}
      </CategoryContent>

      <h2 className="sidebarTitle">Supported<br/>functions</h2>
      {CategoryList}
    </div>
  );
};

// {showMore && <p>{CategoryData[index].tex}</p>}
// <CategoryList  onClick={handleSelectedCategory(CategoryList({item})), handleShowMoreClick(index)}/>