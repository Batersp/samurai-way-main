import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {AppStateType} from "../../redux/redux-store";
import {NavBarType} from "../../redux/sidebar-reducer";

export type StateToPropsType = {
    NavBar: NavBarType
}

const mapStateToProps = (state: StateToPropsType): StateToPropsType => {
    return {
        NavBar: state.NavBar
    }
}


export const NavbarContainer = connect<StateToPropsType, {}, {}, AppStateType>(mapStateToProps)(Navbar)