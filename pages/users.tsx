import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import Slider from "react-slick";

export interface IUser {
    id: number;
    name: string;
    lastName: string;
    age: number;
    email: string;
    genre: string;
    photo_url: string;
}

const properties = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
};

const User: React.FC<{}> = () => {
    const [users, setUsers]: [Array<IUser>, Dispatch<SetStateAction<Array<IUser>>>] = useState(null);
    const [isLoading, setIsLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

    async function fetchData() {
        const response: AxiosResponse = await axios.get("http://127.0.0.1:8080/users");
        const data = response.data;
        setUsers(data.data);
        setIsLoading(true);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className="bande-user">
            <h2 className="center">Accompagnez les à leurs prochains concerts</h2>
            <div>
                {isLoading ?
                    <Slider{...properties}>
                        {
                            users.map((value: IUser, index: number) => {
                                return <img key={index} className="round_img" alt={value.photo_url}
                                            src={`/img/${value.photo_url}`}/>
                            })
                        }
                    </Slider>
                    :
                    <p>Chargement...</p>
                }
            </div>

        </div>
    );
};

export default User;
