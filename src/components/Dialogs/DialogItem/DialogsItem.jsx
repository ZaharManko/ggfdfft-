import { NavLink } from 'react-router-dom'
import stylle from '.././Dialogs.module.css'
const DialogsItems = (propps) => {
    return(
    <NavLink to={`/dialogs/${propps.id}`} activeClassName={stylle.active} className={stylle.dialog}>
        {propps.name}
    </NavLink>
    )
}


export default DialogsItems