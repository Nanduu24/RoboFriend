import React from 'react'
import Card from './Card'

const CardList = ({robots}) =>{
    const CardLoop = robots.map((id,i) => {
        return (
            <Card key={i} id={robots[i].id}name={robots[i].name}email={robots[i].email}/>
        )
    })
    return(
    <div >
        { CardLoop }
    </div>
    );
}

export default CardList;