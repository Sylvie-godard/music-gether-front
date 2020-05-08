import React, {useState} from "react";
import axios from "axios";
import {Formik} from "formik";

const Login = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function postLogin() {
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

    return (
        <div className='auth-model'>
            <h1>Se connecter</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Email requis';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'L\'addresse email est invalide';
                    }

                    if (!values.password) {
                        errors.password = 'Mot de passe requis';
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setEmail(values.email);
                    setPassword(values.password);
                    setSubmitting(false);
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
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder='...email'
                        />
                        {errors.email && touched.email && errors.email}
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
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