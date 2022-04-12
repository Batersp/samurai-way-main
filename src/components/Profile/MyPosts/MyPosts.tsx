import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export type PostType = {
    message: string
    likeCounts: number
}


export const MyPosts = () => {

    let posts = [
        {id: 1, message: 'hey bro lets do it', likeCounts: 20},
        {id: 2, message: 'Great game', likeCounts: 34}
    ]


    let postsElement = posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)

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