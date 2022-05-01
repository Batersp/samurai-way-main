import {addPost, state, subscriber, updatePostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updatePostText={updatePostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree()

subscriber(rerenderEntireTree)

