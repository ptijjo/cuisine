import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './mur.css';



const Murs = (props) => {
    const search = props.search;
    const [repas, setRepas] = useState([]);
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";



    useEffect(() => {
        axios.get(url + search)
            .then(res => setRepas(res.data.meals))
            .catch(error => console.log(error));

    }, [search]);




    return (

        <ul className='lst-repas'>
            {
                repas !== null && repas.map((list) => (
                    <Card list={list} key={list.idMeal} />
                ))
            }

            {
                repas === null && <h2 className='erreur-aliment'>Aucun repas trouvé pour cet aliment ! </h2>
            }
        </ul>


    );
};

export default Murs;