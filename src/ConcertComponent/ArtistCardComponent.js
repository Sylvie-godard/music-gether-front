import React from 'react';

const ArtistCard = ({value, index}) => {
    return (
    <div key={index} className='card_concert'>
        <img className='round_img' src={ require(`../css/img/${value.photo_url}`) } />
        <div>
            <p>
                <h2><strong>{value.artist}</strong></h2><br/>
                <strong>{value.date}</strong>
            </p>
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
