import React, {SetStateAction, useState, Dispatch} from "react";
import axios from "axios";
import {Formik} from "formik";

/** Validate errors from login form */
interface IErrors {
    email?: string;
    password?: string;
}

const Login: React.FC<{}> = () => {
    const [isLoggedIn, setLoggedIn]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
    const [isError, setIsError]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
    const [email, setEmail]: [string, Dispatch<SetStateAction<string>>] = useState('');
    const [password, setPassword]: [string, Dispatch<SetStateAction<string>>] = useState('');

    function postLogin(): void {
        axios.post("http://127.0.0.1:8080/users/auth/login", null, { params: {
                email,
                password
            }}).then(result => {
            if (result.status === 201) {
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }

    function validateValues(values): IErrors {
        const errors: IErrors = {};

        if (!values.email) {
            errors.email = 'Email requis';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'L\'addresse email est invalide';
        }

        if (!values.password) {
            errors.password = 'Mot de passe requis';
        }

        return errors;
    }

    return (
        <div className='auth-model'>
            <h1>Se connecter</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={validateValues}
                onSubmit={(values, { setSubmitting }) => {
                    setEmail(values.email);
                    setPassword(values.password);
                    setSubmitting(true);
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
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <div className='texBox'>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            placeholder='...email'
                        />
                        {errors.email && touched.email && errors.email}
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            placeholder='...mot de passe'
                        />
                        {errors.password && touched.password && errors.password}
                        </div>
                        <button className='send-box' type="submit" disabled={isSubmitting} onClick={postLogin}>
                            Se connecter
                        </button>
                        { isError &&<p className='error'>The email or password provided were incorrect!</p> }
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default Login