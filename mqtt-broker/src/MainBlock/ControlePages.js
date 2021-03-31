import Home from '../Pages/Home';
import LoginContainer from '../Pages/Containers/LoginContainer';
import Block1 from '../Pages/Block1';
import RegistrationContainer from '../Pages/Containers/RegistrationContainer';

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
                <Route path='/block1' component={Block1} />
                <Route path='/login'  render={ () => <LoginContainer />} />
                <Route path='/registration' render={ () => <RegistrationContainer />} />
                <Redirect from='/' to='/home'/>
            </Switch>
        </div>
    )
}