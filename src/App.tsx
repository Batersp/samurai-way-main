import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {DialogPropsType, Dialogs, MessagePropsType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {PostType} from "./components/Profile/MyPosts/MyPosts";

export type AppType = {
    posts: Array<PostType>
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
}


const App: React.FC<AppType> = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )

}


export default App;
