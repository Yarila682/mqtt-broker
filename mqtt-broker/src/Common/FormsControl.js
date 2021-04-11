import React from 'react';


export const Input = ({input, title, meta, ...props}) => {
    return(
        <div className="input-group mb-3">
            <span className="input-group-text" id="mailLabel">{title}</span>
            <input {...input} {...props} required/>
        </div>
    )
}