import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {SideBarType} from "../../redux/sidebar-reducer";
import {AppStateType} from "../../redux/redux-store";

export type StateToPropsType = {
    sideBar: SideBarType
}

const mapStateToProps = (state: StateToPropsType): StateToPropsType => {
    return {
        sideBar: state.sideBar
    }
}


export const NavbarContainer = connect<StateToPropsType, {}, {}, AppStateType>(mapStateToProps)(Navbar)