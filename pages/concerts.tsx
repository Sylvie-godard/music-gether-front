import React, {useState, useEffect} from "react";
import ArtistCard from "../components/ConcertComponent/ArtistCardComponent";
import axios from "axios";

const Concerts: React.FC<{}> = () => {
    const [concerts, setConcerts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchData() {
        const response = await axios.get("http://127.0.0.1:8080/concerts");
        const data = await response.data;
        setConcerts(data.data);
        setIsLoading(true);
        console.log(data);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className="container-body">
            <div className="concert_title">
                <h1>Trouve ton Compagnon</h1>
                <h2>Les concerts les plus populaires</h2>
            </div>
            {isLoading ?
                concerts.map((value, index) => {
                    return <ArtistCard key={index} value={value} />
                })
                :
                <p>...En chargement</p>
            }
        </div>
    );
};

export default Concerts;
