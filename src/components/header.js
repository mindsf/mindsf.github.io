import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faPlusSquare,faUpDown} from "@fortawesome/free-solid-svg-icons"
import {Routes,Route,Link} from 'react-router-dom'
function Header(){
        return (
            <div className="header">
                <header>
                    <Link to="/" style={{textDecoration:"none"}}><h4 style={{color:"black"}}>saeromMarket</h4></Link>
                    {/* <div className='navname'>saroMarket</div> */}
                    <Link to="/login"><div className='user'><FontAwesomeIcon icon={faUser}/></div></Link>
                </header>
            </div>
        );
}

export default Header