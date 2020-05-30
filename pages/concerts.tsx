import React, {useState, useEffect, Dispatch, SetStateAction} from "react";
import ArtistCard from "../components/ConcertComponent/ArtistCardComponent";
import axios from "axios";
import {IUser} from "./users";
import SearchBar from "../components/SearchBar";
import Head from "next/head";

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
            <Head>
                <link rel="stylesheet"
                      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <title>Les concerts</title>
            </Head>
            <div className="concert_title">
                <h1>Trouve ton Compagnon</h1>
                <h2>Les concerts les plus populaires</h2>
                <SearchBar setConcerts={setConcerts}/>
            </div>
            {isLoading ?
                concerts.map((value: IConcert, index: number) => {
                    return <ArtistCard key={index} value={value}/>
                })
                :
                <p>...En chargement</p>
            }
        </div>
    );
};

export default Concerts;
