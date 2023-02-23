import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faHouse} from "@fortawesome/free-solid-svg-icons";
import {faComment,faAddressBook} from "@fortawesome/free-regular-svg-icons"
import {Routes,Route,Link} from 'react-router-dom'
function Footer() {
        return (
                <div className='footer'>
                    <ul className='Navbar'>
                        <Link to ="/"><li><FontAwesomeIcon icon={faHouse} className="icons"/>home</li></Link>
                        <li><FontAwesomeIcon icon={faMagnifyingGlass} className="icons"/>search</li>
                        <Link to="/chat"><li><FontAwesomeIcon icon={faComment} className="icons"/>chatting</li></Link>
                        <Link to="/board"><li><FontAwesomeIcon icon={faAddressBook} className="icons"/>board</li></Link>
                    </ul>
                </div>
        );
}

export default Footer