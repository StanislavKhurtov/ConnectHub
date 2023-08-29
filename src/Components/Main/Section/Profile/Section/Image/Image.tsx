import React from 'react';
import profile from "../../Profile.module.css";
import photoHeader from '../../../../../../Image/12.webp'

export const Image = () => {
    return(
        <div className={profile.content}>
            <div className={profile.picture}>
                <img src={photoHeader} alt="content image"/>
            </div>

        </div>
    )
}
