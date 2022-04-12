import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export type PostType = {
    message: string
    likeCounts: number
}

export const MyPosts = () => {

    let postData = [
        {id: 1, message: 'hey bro lets do it', likeCounts: 20},
        {id: 2, message: 'Great game', likeCounts: 34}
    ]

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
                <Post message={postData[0].message} likeCounts={postData[0].likeCounts}/>
                <Post message={postData[1].message} likeCounts={postData[1].likeCounts}/>
            </div>
        </div>

    )
}