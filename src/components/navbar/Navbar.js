import './navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const currentRoute = window.location.pathname;

    return (
        <nav className='nav'>
            <ul className='nav_list'>
                <li className={currentRoute === '/Kasa/' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link  to='/'>
                        <span className='nav_list_link-hiddenMobile'>Accueil</span>  <span className='nav_list_link-hidden'>ACCUEIL</span>
                    </Link>
                </li>
                <li className={currentRoute === '/about' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link  to='/about'>
                        <span className='nav_list_link-hiddenMobile'>A propos</span> <span className='nav_list_link-hidden'>A PROPOS</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
