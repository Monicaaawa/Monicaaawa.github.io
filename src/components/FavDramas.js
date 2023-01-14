import React from 'react';

function FavDramas({ name, year, img }) {
    return (
        <div style={{textAlign:'center'}}>
                <p>{name}</p>
                <p>{year}</p>
            <img src={img} width={250} height={320} alt="drama"/>
        </div>
    )
}

export default FavDramas;