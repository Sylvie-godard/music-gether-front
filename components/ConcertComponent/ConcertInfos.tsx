import React from "react";
import EventIcon from "@material-ui/icons/Event";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import axios from "axios";

interface IConcertInfos {
    artist: string;
    address: string;
    price: number;
    date: string;
}

const ConcertInfos: React.FC<IConcertInfos> = ({artist, address, price, date}) => {
    function addParticipant() {

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
