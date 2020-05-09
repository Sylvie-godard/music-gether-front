import React from "react";

interface IParticipantConcert {
    age: number;
    photo_url: string;
    name: string;
}

const ParticipantConcert: React.FC<IParticipantConcert> = ({photo_url, name, age}) => (
        <div className='participant-card'>
            <img className='round_img' alt={photo_url} src={`/img/${photo_url}`}/>
            <p><strong>{name}<br/>{age} ans</strong></p>
        </div>
);

export default ParticipantConcert;
