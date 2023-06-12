import React from 'react';
import profile from "../../Profile.module.css";

export const Image = () => {
    return(
        <div className={profile.content}>
            <div className={profile.picture}>
                <img src="https://cdn.pixabay.com/photo/2023/05/17/08/55/tree-7999477__340.jpg"
                     alt="content image"/>
            </div>

        </div>
    )
}
