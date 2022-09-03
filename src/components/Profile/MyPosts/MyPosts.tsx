import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {DispatchToPropsType, StateToPropsType} from "./MyPostsContainer";
import {NewPostForm} from "./NewPostForm/NewPostForm";



export const MyPosts = React.memo( (props: StateToPropsType & DispatchToPropsType) => {



    console.log('render')
    let postsElement = props.profilePage.posts.map(p => <Post key={p.id} message={p.message}
                                                              likeCounts={p.likeCounts}/>)

    return (
        <div className={s.postsBlock} >
            <NewPostForm photo={props.profilePage.profile.photos.large} addPost={props.addPost}/>
            <h3>My posts</h3>

            <div className={s.posts}>
                {postsElement}
            </div>
        </div>

    )
})