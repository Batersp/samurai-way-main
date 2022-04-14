import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/state";

type AppType = {
    state:RootStateType
}



const App: React.FC<AppType> = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar sideBar={props.state.sideBar} />
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )

}


export default App;
