import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/MOTM.jpg?itok=JOg4NtNr'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+discription
            </div>
        </div>
    );
};

