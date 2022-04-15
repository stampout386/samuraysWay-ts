import React from "react";
import s from './Login.module.css'
import {reduxForm} from "redux-form";
import {Field} from 'redux-form'
import {Input} from "../../commons/FormsComponents/FormsComponents";
import {requairedFields} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";


export function Login(props: any) {
    const onSubmitLogin = (formData: any) => {
        props.loginThunkCreator(formData.login, formData.password, formData.rememberMe)

    }

    if (props.isAuth) return <Redirect to={'/profile'}/>

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
                <Field component={Input} placeholder={'Login'} name={'login'} validate={[requairedFields]}/>
            </div>
            <div>

                <Field placeholder={'Password'} component={Input} name={'password'} validate={[requairedFields]} type={'password'}/>
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

const mapStateToProps = (state: any) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
export const LoginContainer = connect(mapStateToProps, {loginThunkCreator})(Login)