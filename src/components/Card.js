import React from "react";


const Card = (props) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-1'>
            <img alt='robots' src={`https://robohash.org/${props.id}?200*200`} />
            <div>
                <h2>{props.id}</h2>
                <p>{props.name}</p>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;