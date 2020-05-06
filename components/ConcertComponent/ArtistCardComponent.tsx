import React from "react";

interface Artist {
    photo_url: string;
    address: string;
    date: string;
    price: number;
    artist: string;
}

interface Props {
    value: Artist;
}

const ArtistCard: React.FC<Props> = ({value}) => {
    console.log(value.photo_url);
    return (
        <div className='card_concert'>
            <img className='round_img' alt={value.photo_url} src={`/img/${value.photo_url}`}/>
            <div>
                <h2>{value.artist}</h2><br/>
                <strong>{value.date}</strong>
                <p>{value.address}</p>
                <p><strong>{value.price} €</strong></p>
            </div>
            <div>
                <button>Trouver un compagnon</button>
                <button>Réserver un billet</button>
            </div>
        </div>
    )
};

export default ArtistCard;
