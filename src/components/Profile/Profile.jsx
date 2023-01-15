import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'
import stylle from './Profile.module.css'

const Profile = (props) => {
    //onsole.log(props.postsProfilePage.newPostText)
    return (
        <div >
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch} newPostText={props.postsProfilePage.newPostText}   posts={props.postsProfilePage.PostsData}/>
        </div>
    )
}
export default Profile