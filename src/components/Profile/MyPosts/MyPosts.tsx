import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export type PostType = {
    message: string
    likeCounts: number
}

export const MyPosts = () => {
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
                <Post message={'hey bro lets do it'} likeCounts={35}/>
                <Post message={'Great game'} likeCounts={15}/>
            </div>
        </div>

    )
}