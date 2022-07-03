import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {loginFields} from "./loginInterface";

export const Login = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<loginFields>()

    const onSubmit: SubmitHandler<loginFields> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register("login", {required: 'Name is required field'})}
                       type="text"
                       placeholder={'enter login'}
                />
                <span>Login</span>
                {errors.login && <div style={{color: 'red', fontWeight: 'bold'}}>{errors.login.message}</div>}
            </div>
            <div>
                <input {...register("password", {required: 'Password is required field'})}
                       type="text"
                       placeholder={'enter password'}
                />
                <span>Password</span>
                {errors.password && <div style={{color: 'red', fontWeight: 'bold'}}>{errors.password.message}</div>}
            </div>
            <div><input {...register("rememberMe")} type="checkbox"/></div>
            <div>
                <button>Send</button>
            </div>

        </form>
    )
}