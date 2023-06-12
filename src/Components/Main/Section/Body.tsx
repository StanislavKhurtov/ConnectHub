import React from 'react';
import body from './Body.module.css';


export const Body = () => {
    return (
        <div className={body.content}>
            <div className={body.picture}>
                <img src="https://cdn.pixabay.com/photo/2023/05/17/08/55/tree-7999477__340.jpg"
                     alt="content image"/>
            </div>

        </div>
    );
}