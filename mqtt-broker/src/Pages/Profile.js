import React from 'react';


const Profile = (props) => {
    if(!props.profile) {
        //preloader
    }
    return(
        <div className="profile"> 
            <div className = "title">
                <h1>Информация о профиле</h1>
            </div>
            <div className="information-list">
                <div className="email">
                    <h4>Email:</h4>
                </div>
            </div>
        </div>
    )
}

export default Profile;