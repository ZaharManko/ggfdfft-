import stylle from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYv7zIb2UkyEaHORmLW3m_eOfl0IbPQ8V_5A&usqp=CAU'></img>
            </div>
            <div className={stylle.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo