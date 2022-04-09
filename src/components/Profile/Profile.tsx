import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src='https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/MOTM.jpg?itok=JOg4NtNr'/>
            </div>
            <div>
                ava+discription
            </div>
            <MyPosts/>
        </div>
    )
}