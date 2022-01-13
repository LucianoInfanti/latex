import './NavBar.css';

import MenuIcon from '/Users/lucianoinfanti/latex/src/images/menu.svg';
import DownloadIcon from '/Users/lucianoinfanti/latex/src/images/download.svg';

const NavBar = () => {
    return (
        <div className="menuWrapper">
            <p>Latex Online</p>
            <div className="menuContainer">
                <button> Download <img src={DownloadIcon} className="IconColor"/></button>
                <a href="#"><img src={MenuIcon}/></a>
            </div>
        </div>
    );
}
 
export default NavBar;