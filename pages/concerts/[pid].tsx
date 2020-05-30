import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {useRouter} from 'next/router'
import axios, {AxiosResponse} from "axios";
import {ParsedUrlQuery} from "querystring";
import {NextRouter} from "next/dist/next-server/lib/router/router";
import {IConcert} from "../concerts";
import {IUser} from "../users";
import ParticipantConcert from "../../components/ConcertComponent/ParticipantConcert";
import ConcertInfos from "../../components/ConcertComponent/ConcertInfos";

const Concert: React.FC<{}> = () => {
    const router: NextRouter = useRouter()
    const {pid}: ParsedUrlQuery = router.query
    const [concert, setConcert]: [IConcert, Dispatch<SetStateAction<IConcert>>] = useState(null);
    const [isLoading, setIsLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

    async function fetchData() {
        if (pid) {
            const response: AxiosResponse = await axios.get(`http://127.0.0.1:8080/concerts/${pid}`);
            const data = response.data;
            setConcert(data.data);
            setIsLoading(true);
        }
    }

    useEffect(() => {
        fetchData();
    }, [pid]);

    if (isLoading) {
        return (
            <div className='concert-participant'>
                <img className='img-width' alt={concert.photo_url} src={`/img/${concert.photo_url}`}/>
                <ConcertInfos
                    id={concert.id}
                    address={concert.address}
                    artist={concert.artist}
                    date={concert.date}
                    price={concert.price}
                />
                <div className='buttons-concert'>
                    <button className='big-buttons'>Compagnons</button>
                    <button className='big-buttons'>Billeterie</button>
                </div>
                <h2>{concert.participants.length} Participants</h2>
                <div className='participants-concert'>
                    {
                        concert.participants.map((value: IUser, index: number) => {
                            return <ParticipantConcert
                                key={index}
                                age={value.age}
                                name={value.name}
                                photo_url={value.photo_url}
                            />
                        })
                    }
                </div>
            </div>)
    } else {
        return null
    }
};

export default Concert;
