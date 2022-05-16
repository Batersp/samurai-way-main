import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {DispatchToPropsType, StateToPropsType} from "./MyPostsContainer";



export const MyPosts = (props: StateToPropsType & DispatchToPropsType  ) => {


    let postsElement = props.profilePage.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost()
    }

    const updatePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePostText(e.currentTarget.value)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.profilePage.textForNewPost} onChange={updatePostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>

    )
}