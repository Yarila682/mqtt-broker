import {connect} from "react-redux";
import MenuItems  from "../MenuItems";

let mapStateToProps = (state) => {
    return{
        menuitemsPage: state.menuitemsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
      
    }
}

const MenuItemsContainer = connect(mapStateToProps, mapDispatchToProps) (MenuItems);

export default MenuItemsContainer;