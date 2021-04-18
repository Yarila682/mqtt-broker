import React from 'react';
import './Styles/Preloader.css'

const Preloader = (props) => {
    return(
        <div className="lightbox" >
            <div className="spinner-grow" role="status">
                <span class="visually-hidden">Загрузка...</span>
            </div>
        </div>
    )
}

export default Preloader;