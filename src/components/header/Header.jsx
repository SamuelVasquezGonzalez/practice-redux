import { Link } from 'react-router-dom'
import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faUsers } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <nav>
            <ul>
                <li><Link to='/'><FontAwesomeIcon icon={faBriefcase} /> Seleccionar Candidatos</Link></li>
                <li><Link to='/seleccionados'><FontAwesomeIcon icon={faUsers} /> Futuros Candidatos</Link></li>
            </ul>
        </nav>
    )
}
