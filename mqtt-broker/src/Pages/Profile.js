import React from 'react';
import Preloader from '../Common/Preloader';


const Profile = (props) => {
    if(!props.profile) {
        <Preloader />
    }
    return(
        <div className="profile"> 
            <div className = "title">
                <h1>Информация о профиле</h1>
            </div>
            <div className="information-list">
                <div className="email">
                    <h4>Email:</h4>
                    {
                        props.email
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile;