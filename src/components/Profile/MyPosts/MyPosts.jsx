import stylle from './MyPosts.module.css'
import Posts from './Post/MyPosts'
import React from 'react'
import { addPostActionCreator, appDateNewPostCreator } from '../../../redux/state';


const MyPosts = (props) => {
    let newPostElemet = React.createRef();

    let addPostF = () =>{
        let text = newPostElemet.current.value;
        //props.addPost(text)
        //newPostElemet.current.value = ''
        //props.dispatch(text)
        console.log('Post was added')
        let action = addPostActionCreator() 
        //let action = (addPostActionCreator());
        props.dispatch(action);
        //newPostElemet.current.value = ''
    }

    let onPostChange = () =>{
        let newText  = newPostElemet.current.value;
        let action = appDateNewPostCreator(newText);
        props.dispatch(action);
    }
    const PostsElement = props.posts.map(post => <Posts message={post.message} likeCount={post.likeCount}/> );
    return (
        <div >
            <h3>My Posts</h3> 
            <div className={stylle.formContainer}>
                <div>
                    <input onChange={onPostChange} value={props.newPostText} ref={newPostElemet} className={stylle.input} type="text" />
                </div>
                <div>
                    <button onClick={addPostF} className={stylle.button}>Add post</button>
                </div>
            </div>
            <div className={stylle.postsContainer}>
                {PostsElement}
            </div>
            

        </div>
    )
}
export default MyPosts