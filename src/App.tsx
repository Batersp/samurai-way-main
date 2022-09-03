import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Login} from "./components/Login/Login";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {initializedApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";

/*import DialogsContainer from "./components/Dialogs/DialogsContainer";*/
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))


class App extends React.Component<MapStateToPropsType & DispatchToPropsType> {

    componentDidMount() {
        this.props.initializedApp()
    }

    render() {

        /* if (!this.props.initialized) {
             return <Preloader/>
         }*/

        return (
            <div className='app-wrapper'>
                <NavbarContainer/>
                <div className={'header-and-content'}>
                <HeaderContainer/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/' render={() => <ProfileContainer/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => {
                            return <React.Suspense fallback={<Preloader/>}>
                                <DialogsContainer/>
                            </React.Suspense>
                        }}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='*' render={() => <div>404 Not Found Page</div>}/>
                    </Switch>
                </div>
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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default connect<MapStateToPropsType, DispatchToPropsType, {}, AppStateType>(mapStateToProps, {initializedApp})(App);
