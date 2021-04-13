import React from 'react';
import ControlPages from './ControlePages'
import MenuItemsContainer from './Containers/MenuItemsContainer';
import SideMenuItemsContainer from './Containers/SideMenuItemsContainer'
import {Link} from 'react-router-dom';
import './Styles/Main.css';

export default function Main(props){
  return(
    <div className="main">
      <div className="menu-wrapper">
        <ul className="menu">
          <MenuItemsContainer />
        </ul>
      </div>
      <div className="menu-login">
        {
          console.log("here main")
        }
        {
          console.log(props.isAuth)
        }
        { props.isAuth ? 
          <div className="login-title">  
            <div className="wrap"><Link to="/profile">{props.email}</Link> </div>
            <ol>
              <li><Link to="/configure">Конфигурация Брокера</Link></li>
              <li onClick={props.logout}><Link to="/login">Выйти</Link></li>
            </ol>
          </div>:
          <ul className="side-menu">
            <SideMenuItemsContainer />
          </ul>
        }
  
      </div>
      <div className="renderMain">
          <ControlPages />
      </div>
    </div>    
  );
}