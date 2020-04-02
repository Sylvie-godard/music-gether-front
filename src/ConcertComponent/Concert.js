import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Concert = () => {
    const [concerts, setConcerts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchData() {
        const response = await axios.get('http://127.0.0.1:8080/concerts');
        const data = await response.data;
        setConcerts(data.data);
        setIsLoading(true);
    }

    useEffect(() => {
        fetchData()
    }, []);

    if (isLoading) {
        console.log(concerts[0]);
    }
    return (
        <div className='container-body'>
            {isLoading ?
                concerts.map((value, index) => {
                    return <div key={index} className='card_concert'>
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
                })
                :
                <p>En chargement ... patience</p>
            }
        </div>
    );
};

export default Concert;