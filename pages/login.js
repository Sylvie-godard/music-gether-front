import React, {useState} from "react";
import axios from "axios";

const Login = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setAuthTokens } = useState(null);

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
            <div className='texBox'>
                <input
                    type="userName"
                    value={email}
                    onChange={e => {
                        setEmail(e.target.value);
                    }}
                    placeholder='...email'
                />
                <input
                    type='password'
                    value={password}
                    id='pass'
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    placeholder='...mot de passe'/>
            </div>
            <input className='send-box' onClick={postLogin} type="submit" value="Se connecter"/>
            { isError &&<p className='error'>The email or password provided were incorrect!</p> }
        </div>
    );
}

export default Login