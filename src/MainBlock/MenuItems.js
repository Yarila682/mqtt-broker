import {Link} from 'react-router-dom';

export default function MenuItems(props){
    let MenuElements = props.menuitemsPage.menuElements;
    let JsxMenuElements = MenuElements.map((MenuElements) => <li id = {MenuElements.name} key = {MenuElements.name} className="menu-element"><Link to={MenuElements.href}>{MenuElements.name}</Link></li> );
    return(
        <div className="element-wrapper"> {JsxMenuElements} </div> 
    );
}