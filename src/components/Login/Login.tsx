import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {loginFields} from "./loginInterface";
import {useDispatch, useSelector} from "react-redux";
import {Loginn} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import style from './Login.module.css'

export const Login = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const messageError = useSelector<AppStateType,string>(state => state.auth.messageError)
    const captcha = useSelector<AppStateType, string | null>(state => state.auth.captcha)
    const {register, handleSubmit, reset, formState: {errors}} = useForm<loginFields>({mode: "onBlur"})

    const onSubmit: SubmitHandler<loginFields> = (data) => {
        dispatch(Loginn(data.Email, data.password, data.rememberMe, data.captcha))
        console.log(data)
        reset()
    }


    if(isAuth) return <Redirect to={'/profile'}/>

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>

                <label>
                    Email
                    <div>
                        <input {...register("Email", {
                            required: 'Name is required field',
                            minLength: {
                                value: 6,
                                message: 'minimum 6 characters'
                            }
                        })}
                               type="text"
                               placeholder={'enter Email'}
                        />
                    </div>
                </label>

                {errors.Email && <div style={{color: 'red', fontWeight: 'bold'}}>{errors.Email.message}</div>}
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
                            }
                        })}
                               type="password"
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
            <div className={style.messageError}>
                {messageError}
            </div>
            {captcha && <div>
                <img src={captcha} alt=""/>
                <div>
                    <input {...register("captcha")} type="text"/>
                </div>
            </div> }

            <div>
                <button>Send</button>
            </div>

        </form>
    )
}