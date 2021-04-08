import Home from '../Pages/Home';
// import LoginContainer from '../Pages/Containers/LoginContainer';
import Login2 from '../Pages/Login2'
import HowTo from '../Pages/HowTo';
import RegistrationContainer from '../Pages/Containers/RegistrationContainer';
import ProfileContainer from '../Pages/Containers/ProfileContainer';

import {
    Route,
    Switch,
    Redirect,
} from "react-router-dom"

export default function ControlPages(props){
    return(
        <div>
            <Switch>
                <Route path='/home'  component={Home} />
                <Route path='/howto' component={HowTo} />
                {/* <Route path='/login'  render={ () => <LoginContainer />} /> */}
                <Route path='/login'  component={Login2} />
                <Route path='/registration' render={ () => <RegistrationContainer />} />
                <Route path='/profile:userId' render={ () => <ProfileContainer />} />
                <Redirect from='/' to='/home'/>
            </Switch>
        </div>
    )
}