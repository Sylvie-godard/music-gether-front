import React from "react";

interface IConcertInfos {
    artist: string;
    address: string;
    price: number;
    date: string;
}

const ConcertInfos: React.FC<IConcertInfos> = ({artist, address, price, date}) => (
    <div>
        <h2>{artist}</h2><br/>
        <strong>{address}</strong>
        <p>{price} €</p>
        <p><strong>{date}</strong></p>
    </div>
);

export default ConcertInfos;
