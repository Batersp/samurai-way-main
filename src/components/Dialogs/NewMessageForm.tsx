import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {newMessageFields} from "./new-message-form-interface";

type NewMessageFormType = {
    sendMessage: (message: string) => void
}

export const NewMessageForm = (props: NewMessageFormType) => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm<newMessageFields>()

    const onSubmit: SubmitHandler<newMessageFields> = (data) => {
        props.sendMessage(data.message)
        reset()
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <textarea {...register("message", {required: 'Message is required field'})}
                          placeholder={'Add new message'}
                />
            </div>
            {errors.message && <div style={{color: 'red', fontWeight: 'bold'}}>{errors.message.message}</div>}
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
