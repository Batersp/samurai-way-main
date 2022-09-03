import React from 'react';
import {Box, Paper} from "@mui/material";
import s from "./Photo.module.css";
import profilePhoto from "../../../../assets/images/profile.png";

type PropsType = {
    photos: string

}

export const Photo = ({photos}: PropsType) => {
    return (
        <Box className={s.container}>
            <Paper elevation={3} className={s.main}>
                <img className={s.photo} src={photos || profilePhoto}  alt={'profile'}/>
            </Paper>
        </Box>
    );
};

