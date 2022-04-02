import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export type PostType = {
    message: string
    likeCounts: number
}

export const MyPosts = () => {
    return (
        <div className={s.content}>

            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                </div>
                <div className={s.posts}>
                    <Post message={'hey bro lets do it'} likeCounts={35} />
                    <Post message={'Great game'} likeCounts={15} />


                </div>
            </div>
        </div>
    )
}