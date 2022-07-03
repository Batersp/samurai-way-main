import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Login} from "./components/Login/Login";



const App = () => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
        </div>
    )

}


export default App;
