import React from 'react';
import { useNavigate } from 'react-router-dom';
import './card.css';

const Card = (props) => {

    const list = props.list;
    const lien = useNavigate();



    const HandleClick = (i) => {
        lien('/recette/' + i)
    }

    return (

        <li className='carte' onClick={() => HandleClick(list.idMeal)}>
            <h2 className='nom-repas'>{list.strMeal}</h2>
            <div className='origine-repas'>Origine : {list.strArea}</div>
            <div className='img-repas'><img src={list.strMealThumb} alt={list.strMealThumb} /> </div>
            <div className='instructions-repas'> {list.strInstructions}</div>
        </li>

    );
};

export default Card;