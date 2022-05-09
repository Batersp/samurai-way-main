import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StoreType} from "./redux/state";

type AppType = {
    store: StoreType
}

const App: React.FC<AppType> = (props) => {
    const state = props.store.getState()
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar sideBar={state.sideBar}/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile
                    profilePage={state.profilePage}
                    dispatch={props.store.dispatch.bind(props.store)}
                />}/>
                <Route path='/dialogs' render={() => <Dialogs
                    store={props.store}
                />}/>
            </div>
        </div>
    )

}


export default App;
