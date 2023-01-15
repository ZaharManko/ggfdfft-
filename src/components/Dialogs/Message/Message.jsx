import { NavLink } from 'react-router-dom'
import stylle from '.././Dialogs.module.css'

const Messages = (props) =>{
    return(
        <div className={stylle.message}>{props.message}</div>
    )
}
export default Messages