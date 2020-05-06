import React, {useEffect, useState} from "react";
import axios from "axios";
import Slider from "react-slick";


const properties = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
};


const User: React.FC<{}> = () => {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchData() {
        const response = await axios.get("http://127.0.0.1:8080/users");
        const data = await response.data;
        setUsers(data.data);
        setIsLoading(true);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className="bande-user">
            <h2 className="center">Accompagnez les à leurs prochains concert</h2>
            <div>
                {isLoading ?
                    <Slider{...properties}>
                        {
                            users.map((value, index) => {
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
