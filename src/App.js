import './App.css';
import TextEditor from './components/TextEditor/TextEditor';
import NavBar from "./components/NavBar/NavBar";
import Sidebar from "./components/Sidebar/Sidebar";
import SupportedFunctions from './components/Sidebar/SupportedFunctions';

function App() {
  
  return(
  <div className="contentContainer">

    <div className="leftWrapper">
          <NavBar/>
      <div className="equationContainer">
        <TextEditor/>               
      </div>
    </div>

    <div className="panelContainer">
      <Sidebar/>
    </div>
  </div>
    );
}

export default App;
