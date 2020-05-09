import React, {useState, useEffect, Dispatch, SetStateAction} from "react";
import ArtistCard from "../components/ConcertComponent/ArtistCardComponent";
import axios from "axios";
import {IUser} from "./users";

export interface IConcert {
    id: number;
    address: string;
    artist: string;
    date: string;
    photo_url: string;
    price: number;
    participants: Array<IUser>
}

const Concerts: React.FC<{}> = () => {
    const [concerts, setConcerts]: [Array<IConcert>, Dispatch<SetStateAction<Array<IConcert>>>] = useState([]);
    const [isLoading, setIsLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

    async function fetchData() {
        const response = await axios.get("http://127.0.0.1:8080/concerts");
        const data = response.data;
        setConcerts(data.data);
        setIsLoading(true);
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
                concerts.map((value: IConcert, index: number) => {
                    return <ArtistCard key={index} value={value} />
                })
                :
                <p>...En chargement</p>
            }
        </div>
    );
};

export default Concerts;
