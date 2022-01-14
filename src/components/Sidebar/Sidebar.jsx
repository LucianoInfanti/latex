import '/Users/lucianoinfanti/latex/src/components/Sidebar/Styles/Sidebar.css'
import 'katex/dist/katex.min.css';
import { useState } from 'react';
import SupportedFunctions from '/Users/lucianoinfanti/latex/src/components/Sidebar/SupportedFunctions.jsx';
import SelectedFunction from './SelectedFunction.jsx';
import Data from '/Users/lucianoinfanti/latex/src/components/Sidebar/Data/Data.json';
import SupportedSymbol from './SupportedSymbol';
import SupportedFunctionGroup from '/Users/lucianoinfanti/latex/src/components/Sidebar/SupportedFunctionGroup.jsx';

export default function Sidebar( ) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const SupportedFunctionsList = (
    <ul>
      {Data.map(( item , index ) =>
      <li key={ index }>
        <button className="SupportedFunctionsWrapper"
          onClick={() => setSelectedCategory(item)}>
          <SupportedFunctions item={ item }/>
        </button>
      </li>
      )}
    </ul>
  );

  const SymbolsList = (
    <ul>
      <h4>{Data[0].supportedFunctionGroup[0].supportedFunctionGroupName}</h4>
      {Data.map(( item ) =>
        <button className="SupportedFunctionsWrapper">
        <SupportedSymbol item={ item }
        onClose={() => setSelectedCategory(null)}/>
      </button>
      )}
    </ul>
  );

  const SupportedFunctionGroupList = (
    <ul>
      <SupportedFunctionGroup>
        <SymbolsList/>
      </SupportedFunctionGroup>
    </ul>
  )

  return( 
    <div className="panelWrapper">
      <SelectedFunction 
        onClose={() => setSelectedCategory(null)}
        open={Boolean(selectedCategory)}>
        {SymbolsList}
      </SelectedFunction>

      <h2 className="sidebarTitle">Supported<br/>functions</h2>
      {SupportedFunctionsList}
    </div>
  );
};