import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {loginFields} from "./loginInterface";

export const Login = () => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm<loginFields>({mode: "onBlur"})

    const onSubmit: SubmitHandler<loginFields> = (data) => {
        console.log(data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>

                <label>
                    Login
                    <div>
                        <input {...register("login", {
                            required: 'Name is required field',
                            minLength: {
                                value: 6,
                                message: 'minimum 6 characters'
                            }
                        })}
                               type="text"
                               placeholder={'enter login'}
                        />
                    </div>
                </label>

                {errors.login && <div style={{color: 'red', fontWeight: 'bold'}}>{errors.login.message}</div>}
            </div>
            <div>
                <label>
                    Password
                    <div>
                        <input {...register("password", {
                            required: 'Password is required field',
                            minLength: {
                                value: 6,
                                message: 'minimum 6 characters'
                            },
                            maxLength: {
                                value: 20,
                                message: 'maximum 20 characters'
                            },
                            pattern: {
                                value: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/,
                                message: 'password must contain at least one number, one special character, uppercase and lowercase letters'
                            }
                        })}
                               type="text"
                               placeholder={'enter password'}
                        />
                    </div>
                </label>
                {errors.password && <div style={{color: 'red', fontWeight: 'bold'}}>{errors.password.message}</div>}
            </div>
            <label>
                <input {...register("rememberMe")} type="checkbox"/>
                Remember me
            </label>
            <div>
                <button>Send</button>
            </div>

        </form>
    )
}