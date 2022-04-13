import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {AppType} from "../../../App";

export type PostType = {
    message: string
    likeCounts: number
    id?: number
}

export type MyPostsType = {
    posts: Array<PostType>
}


export const MyPosts: React.FC<MyPostsType> = (props) => {




    let postsElement = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)

    return (
        <div className={s.postsBlock}>
           <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>

    )
}