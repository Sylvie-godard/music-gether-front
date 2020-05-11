import React from "react";
import axios from "axios";
import {Formik, useField} from "formik";
import {useInfos} from "../components/Context";

/** Validate errors from login form */
interface IErrors {
    email?: string;
    password?: string;
}

const Login: React.FC<{}> = () => {
    const { userLogin } = useInfos();

    function postLogin(values): void {
        axios.post("http://127.0.0.1:8080/login_check", {
            username: values.email,
            password: values.password
        }).then(result => {
            if (result.status === 200) {
                userLogin({isLogin: true, jwt: result.data.token});
            } else {
                userLogin({isLogin: false});
            }
        }).catch(() => {
            userLogin({isLogin: false});
        });
    }

    function handleErrors(values): IErrors {
        const errors: IErrors = {};

        if (!values.email) {
            errors.email = 'Email requis';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'L\'addresse email est invalide';
        }

        if (!values.password) {
            errors.password = 'Mot de passe requis';
        } else if (values.password.length < 4) {
            errors.password = 'Le mot de passe doit contenir au moins 4 caractères';
        }

        return errors;
    }

    return (
        <div className='auth-model'>
            <h1>Se connecter</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={handleErrors}
                onSubmit={(values, { setSubmitting }) => {
                    postLogin(values)
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 1000);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                  }) => (
                    <form className='texBox' onSubmit={handleSubmit}>
                        <div>
                            <p className='error'>{errors.email && touched.email && errors.email}</p>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            placeholder='...email'
                        />
                        <p className='error'>{errors.password && touched.password && errors.password}</p>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            onBlur={handleBlur}
                            placeholder='...mot de passe'
                        />
                        </div>
                        <button className='send-box' type="submit" disabled={isSubmitting}>
                            Se connecter
                        </button>
                        <p><u><a href="#">Mot de passe oublié</a></u></p>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default Login