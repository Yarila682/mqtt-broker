import {connect} from "react-redux";
import SideMenuItems  from "../SideMenuItems";

let mapStateToProps = (state) => {
    return{
        menuitemsPage: state.menuitemsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
      
    }
}

const SideMenuItemsContainer = connect(mapStateToProps, mapDispatchToProps) (SideMenuItems);

export default SideMenuItemsContainer;