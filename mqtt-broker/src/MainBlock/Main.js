import ControlPages from './ControlePages'
import MenuItemsContainer from './Containers/MenuItemsContainer';
import SideMenuItemsContainer from './Containers/SideMenuItemsContainer'
import './Styles/Main.css';
import React from 'react';

export default function Main(props){
  return(
    <div className="main">
      <div className="menu-wrapper">
        <ul className="menu">
          <MenuItemsContainer />
        </ul>
      </div>
      <div className="menu-login">
        { props.isAuth ? 
          <div className="login-title">
            <p>{props.email}</p>
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