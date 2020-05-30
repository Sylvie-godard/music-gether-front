import React, {createContext, useState, useContext, Dispatch, SetStateAction, useEffect} from "react";
import cogoToast from "cogo-toast";
import Router from "next/router";
import axios from "axios";
import {IUser} from "../pages/users";

interface IAuth {
    isLogin: boolean;
    jwt: string | null;
    jwtRefresh?: string | null;
}

const LocalStateContext = createContext(null);
const LocalStateProvider = LocalStateContext.Provider;

const AppProvider: React.FC<{}> = ({ children }) => {
    const nobody: IAuth = {isLogin: false, jwt: null, jwtRefresh: null};
    const getUserFromLocalStorage = (): IAuth => {
        // we check if localStorage exist because of the server side rendering
        if (typeof localStorage !== 'undefined') {
            const user = localStorage.getItem('user');

            return user ? JSON.parse(user) : nobody;
        }

        return nobody;
    }
    const [user, setUser]: [IAuth, Dispatch<SetStateAction<IAuth>>] = useState(getUserFromLocalStorage);
    const [currentUser, setCurrentUser]: [IUser, Dispatch<SetStateAction<IUser>>] = useState(null);

    const userLogin = (data: IAuth) => {
        if (data.isLogin && data.jwt) {
            setUser(data)
            localStorage.setItem('user', JSON.stringify(data));
            Router.push("/");
            cogoToast.success("Super ! Vous êtes connecté :)");
        } else {
            cogoToast.error("Mince ! Vous avez oublié vos identifiants  :(");
        }
    };

    const userLogout = () => {
        localStorage.removeItem('user');
        setUser(nobody);
    }

    async function getMyProfile() {
        try {
            const response = await axios.get("http://127.0.0.1:8080/users/me", {
                headers: {
                    'Authorization': `Bearer ${user.jwt}`
                }
            });
            const data = response.data;
            setCurrentUser(data.data);
        } catch (error) {
            Router.push("/login");
        }
    }

    useEffect(() => {
        getMyProfile();
    }, []);

    return (
        <LocalStateProvider
            value={{
                userLogout,
                userLogin,
                user,
                currentUser
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
