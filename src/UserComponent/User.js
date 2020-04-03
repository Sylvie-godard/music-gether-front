import React, {useEffect, useState} from "react";
import axios from "axios";
import {Slide} from 'react-slideshow-image';

const properties = {
    duration: 0,
    transitionDuration: 8000,
    infinite: true,
    indicators: true,
    arrow: true,
};

const User = () => {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchData() {
        const response = await axios.get('http://127.0.0.1:8080/users');
        const data = await response.data;
        setUsers(data.data);
        setIsLoading(true);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className='bande-user'>
            <h2 className='center'>Accompagnez les à leurs prochains concert</h2>
            <div className='bande-user-img'>
                {isLoading ?
                    <Slide {...properties}>
                        {
                            users.map((value, index) => {
                                return <div>
                                    <img className='round_img' alt={value.photo_url}
                                         src={require(`../css/img/${value.photo_url}`)}/>
                                </div>
                            })
                        }
                    </Slide>
                    :
                    <p>patience</p>
                }
            </div>

        </div>
    );
};

export default User;
