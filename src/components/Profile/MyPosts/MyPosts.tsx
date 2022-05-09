import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {DispatchActionType, PostsType} from "../../../redux/state";
import {addPostAC, updatePostTextAC} from "../../../redux/profile-reducer";

type MyPostsType = {
    posts: Array<PostsType>
    textForNewPost: string
    dispatch: (action: DispatchActionType) => void
}


export const MyPosts: React.FC<MyPostsType> = (props) => {


    let postsElement = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        newPostElement.current?.value && props.dispatch(addPostAC())
    }

    const updatePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updatePostTextAC(e.currentTarget.value))
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.textForNewPost} onChange={updatePostText}/>
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