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
        <div>
            <div style={{height: "30rem", width: "100%"}}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2615.5319294591864!2d2.069248915311351!3d49.03850879596203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6f5215847acf5%3A0xe2172b9b1c254c8e!2s1%20Avenue%20du%20Ponceau%2C%2095000%20Cergy!5e0!3m2!1sfr!2sfr!4v1589129095746!5m2!1sfr!2sfr"
                    frameBorder="0" style={{width: "100%", height: "30rem"}}>
                </iframe>
            </div>
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
        </div>
    );
};

export default ConcertInfos;
