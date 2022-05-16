import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";



const App = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sideBar={state.sideBar}/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile />}/>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
            </div>
        </div>
    )

}


export default App;
