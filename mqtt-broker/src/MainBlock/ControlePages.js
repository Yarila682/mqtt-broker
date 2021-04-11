import Home from '../Pages/Home';
import Login from '../Pages/Login'
import HowTo from '../Pages/HowTo';
import Registration from '../Pages/Registration';
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
                <Route path='/login'  component={Login} />
                <Route path='/registration'  component={Registration} />
                <Route path='/profile' render={ () => <ProfileContainer />} />
                <Redirect from='/' to='/home'/>
            </Switch>
        </div>
    )
}