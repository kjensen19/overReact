import  Tome  from '../models/Tome'
import React from 'react'

const Book:React.FC<Tome> = (props)  => {
    return (
        <ul>
            <img src={props.cover}/>
            <li>{props.title}</li>
            <li>{props.author}</li>
        </ul>
    )
}

export default Book