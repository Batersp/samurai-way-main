import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {newPostFields} from "../new-post-form-interface";
import s from './NewPostForm.module.css'
import {Button, TextField} from "@mui/material";


type NewPostFormType = {
    addPost: (message: string) => void
    photo: string
}

export const NewPostForm = ({addPost, photo}: NewPostFormType) => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm<newPostFields>()

    const onSubmit: SubmitHandler<newPostFields> = (data) => {
        addPost(data.message)
        reset()
    }


    return (
        <div className={s.container}>
            <form className={s.main} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.imgContainer}>
                    <img className={s.img} src={photo} alt=""/>
                </div>
                <div className={s.textFieldContainer}>
                    <TextField
                        fullWidth
                        className={s.textField}
                        {...register("message", {required: 'Message is required field'})}
                        label="Add new post" variant="outlined"
                    />
                </div>
                {/*<textarea  {...register("message", {required: 'Message is required field'})}
                         placeholder={'Add new post'}/>*/}
                {errors.message && <div style={{color: 'red', fontWeight: 'bold'}}>{errors.message.message}</div>}
                <div className={s.btnContainer}>
                    <Button
                        fullWidth
                        className={s.btn}
                        size={"small"}
                        color={"error"}
                        type={'submit'}
                        variant="contained"
                    >
                        Add Post</Button>
                    {/*<button>Add Post</button>*/}
                </div>
            </form>
        </div>
    );
};

