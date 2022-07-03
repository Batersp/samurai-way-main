import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {newPostFields} from "./new-post-form-interface";


type NewPostFormType = {
    addPost: (message: string) => void
}

export const NewPostForm = (props: NewPostFormType) => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm<newPostFields>()

    const onSubmit: SubmitHandler<newPostFields> = (data) => {
        props.addPost(data.message)
        reset()
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <textarea  {...register("message", {required: 'Message is required field'})}
                         placeholder={'Add new post'}/>
            </div>
            {errors.message && <div style={{color: 'red', fontWeight: 'bold'}}>{errors.message.message}</div>}
            <div>
                <button>Add Post</button>
            </div>
        </form>
    );
};

