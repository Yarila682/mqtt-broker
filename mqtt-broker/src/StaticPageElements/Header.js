import './Styles/Header.css';
import logo from '../Images/logo.png';

function Header(props) {
  return(
    <div className="header">
      <div className="wrapper">
        <div className="logo-wrapper">
          <img className="logo" src={logo}/>
        </div>
        <div className="title-wrapper">
          <h2 className="title">MQTT Broker</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;