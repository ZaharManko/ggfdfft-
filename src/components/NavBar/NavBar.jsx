import { NavLink } from 'react-router-dom'
import stylle from './NavBar.module.css'
const NavBar = () => {
    return (
        <nav className={stylle.nav}>
            <div className={stylle.item}>
                <NavLink exact to='/profile' activeClassName={stylle.active}>Profile</NavLink>
            </div>
            <div className={stylle.item} >
                <NavLink exact to='/dialogs' activeClassName={stylle.active}>Messages</NavLink>
            </div>
            <div className={stylle.item}>
                <a>News</a>
            </div>
            <div className={stylle.item}>
                <a>Setings</a>
            </div>
        </nav>
    )
}
export default NavBar