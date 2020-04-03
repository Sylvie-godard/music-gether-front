import React, {useEffect, useState} from "react";
import axios from "axios";
import {Slide} from 'react-slideshow-image';

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
        paritialVisibilityGutter: 30
    }
};

const properties = {
    duration: 0,
    transitionDuration: 5000,
    infinite: true,
    indicators: false,
    arrows: false,
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
            <div>
                {isLoading ?
                    <Slide{...properties}>
                        {
                            users.map((value, index) => {
                                return <img key={index} className='round_img' alt={value.photo_url}
                                            src={require(`../css/img/${value.photo_url}`)}/>
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
