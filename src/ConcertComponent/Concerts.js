import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ArtistCard from "./ArtistCardComponent";

const Concerts = () => {
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

    return (
        <div className='container-body'>
            <div className='concert_title'>
                <h1>Trouve ton Compagnon</h1>
                <h2>Les concerts les plus populaires</h2>
            </div>
            {isLoading ?
                concerts.map((value, index) => {
                    return <ArtistCard key={index} value={value} index={index}/>
                })
                :
                <p>...En chargement</p>
            }
        </div>
    );
};

export default Concerts;