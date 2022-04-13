import React from "react";
import s from './Login.module.css'
import {reduxForm} from "redux-form";
import {Field} from 'redux-form'


export function Login() {
    const onSubmitLogin = (formData: any) => {
        console.log(formData)
    }
    return (
        <div className={s.container}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmitLogin}/>
        </div>
    )
}


export const LoginForm = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} placeholder={'Login'} name={'login'}/>
            </div>
            <div>
                <Field placeholder={'Password'} component={'input'} name={'password'}/>
            </div>
            <div>

                <Field type="checkbox" component={'input'} name={'rememberMe'} id={'check'}/> <label htmlFor="check">remember me</label>
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
    )
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)