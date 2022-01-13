import './Sidebar.css'
import 'katex/dist/katex.min.css';
import Search from './Search';
import { useState } from 'react';
import CategoryItem from './CategoryItem';
import CategoryContent from './CategoryContent.jsx';
import ChevronIcon from '/Users/lucianoinfanti/latex/src/images/chevron-down.svg';
import CategoryData from '/Users/lucianoinfanti/latex/src/components/Sidebar/Data/Category.json';

export function CategoryList() {
  const listItems = CategoryData.map(( item, id ) =>
    <button className="categoryCardWrapper" item={ id } onClick={setSelectedCategory( item )}>
      <CategoryItem item={ item }/>
      <img src={ChevronIcon}/>
    </button>
  );
  return <>{listItems}</>;
}

export default function Sidebar( ) {
  const [showMore, setShowMore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleSelectedCategory() {
    setSelectedCategory(CategoryList());
  }

  function handleShowMoreClick() {
    setShowMore(!showMore);
  }

  return( 
    <div className="panelWrapper">
        <CategoryContent 
          categoryTitle={CategoryData[0].sections[0].categorySectionItem[0].tex}>
        </CategoryContent>

        <Search />

        <h2 className="sidebarTitle">Supported<br/> functions</h2>

        <CategoryList/>
    </div>
  );
};

// {showMore && <p>{CategoryData[index].tex}</p>}

// <CategoryList  onClick={handleSelectedCategory(CategoryList({item})), handleShowMoreClick(index)}/>