import React from "react";

const Concert: React.FC<{}> = () => {
    return (
        <div className='concert-participant'>
            <img alt='' src='/img/ayo1.jpg'/>
            <div>
                <h2>"gfg"</h2><br/>
                <strong>"dfdd"</strong>
                <p>'okok'</p>
                <p><strong>'ojokokok'</strong></p>
            </div>
            <div>
                <button className='big-buttons'>Compagnons</button>
                <button className='big-buttons'>Billeterie</button>
            </div>
        </div>
    )
};

export default Concert;
