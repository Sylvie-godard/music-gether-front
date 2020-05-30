import React from "react";
import EventIcon from "@material-ui/icons/Event";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import axios from "axios";
import {useInfos} from "../Context";
import Router from "next/router";
import cogoToast from "cogo-toast";

interface IConcertInfos {
    id: number;
    artist: string;
    address: string;
    price: number;
    date: string;
}

const ConcertInfos: React.FC<IConcertInfos> = (
    {
        id,
        artist,
        address,
        price,
        date
    }) => {
    const { user, currentUser } = useInfos();
    function addParticipant() {
        if (user.isLogin === false) {
            Router.push("/login");
        }
        const bodyFormData = new FormData();
        bodyFormData.set('user_id', currentUser.id);
        bodyFormData.set('concert_id', id.toString());
        axios.post("http://127.0.0.1:8080/concertParticipants", bodyFormData).then(result => {
            if (result.status === 201) {
                cogoToast.success("Super ! Vous avez rejoins le concert");
            }
        }).catch(() => {
        });
    }

    return (
        <div className="concert-infos">
            <div>
                <p className="blue-color">
                    <EventIcon fontSize={"large"}/>
                    <strong>{date}</strong>
                </p>
                <h2>{artist}</h2>
                <p className="blue-color">
                    <LocationOnIcon/>
                    <strong>{address}</strong>
                </p>
                <p>{price} €</p>
            </div>
            <div className="button-participation">
                <h2>Participation</h2>
                <button onClick={addParticipant}>Oui</button>
                <button>Peut-être</button>
                <button>Non</button>
            </div>
        </div>
    );
};

export default ConcertInfos;
