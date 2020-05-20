import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import axios from "axios";
import {useInfos} from "../components/Context";
import Router from "next/router";
import {IUser} from "./users";

const Profile: React.FC<{}> = () => {
    const { accessToken } = useInfos();
    const [currentUser, setCurrentUser]: [IUser, Dispatch<SetStateAction<IUser>>] = useState(null);
    const [isLoad, setIsLoad]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

    async function getMyProfile() {
        const response = await axios.get("http://127.0.0.1:8080/users/me", {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        const data = response.data;
        setCurrentUser(data.data);
        setIsLoad(true);
    }

    useEffect(() => {
        if (!accessToken) {
            Router.push("/login");
        }
        getMyProfile();
    }, []);

    if (isLoad) {
        return (<div>
            <p>{currentUser.id}</p>
            <p>{currentUser.name}</p>
            <p>{currentUser.lastName}</p>
            <p>{currentUser.photo_url}</p>
            <p>{currentUser.email}</p>
            <p>{currentUser.genre}</p>
            <p>{currentUser.age}</p>
        </div>)
    }
    return null;
}

export default Profile;
