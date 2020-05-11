import React, {createContext, useState, useContext, Dispatch, SetStateAction} from "react";
import cogoToast from 'cogo-toast';
import Router from "next/router";
import { setCookie } from 'nookies';
import {IUser} from "../pages/users";

interface IAuth {
    isLogin: boolean;
    jwt?: string;
}

const LocalStateContext = createContext(null);
const LocalStateProvider = LocalStateContext.Provider;

const AppProvider: React.FC<{}> = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser]: [string, Dispatch<SetStateAction<string>>] = useState(null);

    const userLogin = (data: IAuth) => {
        setIsLogin(data.isLogin);

        if (data.isLogin && data.jwt) {
            setUser(data.jwt);
            setCookie(null, 'fromClientSide', 'isLogin', {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });
            Router.push('/');
            cogoToast.success('Super ! Vous êtes connecté :)');
        } else {
            cogoToast.error('Mince ! Vous avez oublié vos identifiants  :(');
        }
    };

    return (
        <LocalStateProvider
            value={{
                userLogin,
                isLogin,
                user
            }}
        >
            {children}
        </LocalStateProvider>
    );
};

const useInfos = () => {
    return useContext(LocalStateContext);
};

export { AppProvider, useInfos };
