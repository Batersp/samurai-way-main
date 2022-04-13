import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PostType} from "./components/Profile/MyPosts/MyPosts";
import {DialogPropsType, MessagePropsType} from "./components/Dialogs/Dialogs";


let posts:Array<PostType> = [
    {id: 1, message: 'hey bro lets do it', likeCounts: 20},
    {id: 2, message: 'Great game', likeCounts: 34}
]

let dialogs:Array<DialogPropsType> = [
    {id: 1, name: 'Arteta'},
    {id: 2, name: 'Bentdner'},
    {id: 3, name: 'Rio Miyachi'}
]

let messages: Array<MessagePropsType> = [
    {id: 1, message: 'Who want play against Barselona?'},
    {id: 2, message: 'I can, but whats is Barselona?'},
    {id: 3, message: 'i got you coach, i dont'}
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);