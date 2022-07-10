import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Login} from "./components/Login/Login";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {initializedApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";


class App extends React.Component<MapStateToPropsType & DispatchToPropsType> {

    componentDidMount() {
        this.props.initializedApp()
    }

    render() {

        if(!this.props.initialized) {
            return <Preloader/>
        }

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
}

type MapStateToPropsType = {
    initialized: boolean
}

type DispatchToPropsType = {
    initializedApp: () => void
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default connect<MapStateToPropsType,DispatchToPropsType, {}, AppStateType >(mapStateToProps, {initializedApp})(App);
