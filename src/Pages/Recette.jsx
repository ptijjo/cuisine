import React from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import '../Styles/recette/recette.css';
import "../Styles/recette/recette-tablette.css";
import "../Styles/recette/recette-mobile.css";
import youtubeIcone from "../Assets/youtube-icon.png";


const Recette = () => {
    const id = useParams();
    const Id = id.id;
    const home = useNavigate();

    const [recette, setRecette] = useState([]);

    const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

    useEffect(() => {
        axios.get(url + Id)
            .then(res => setRecette(res.data.meals))
            .catch(error => console.log(error))
    }, [Id]);

    return (
        <ul className='recette'>
            <i className="fa-solid fa-arrow-left retour" onClick={() => { home('/') }}></i>
            {
                recette.map((plat) => (
                    <li key={plat.idMeal} className='repas'>
                        <h2 className='titre-repas'> {plat.strMeal} </h2>
                        <p className='origine-repas'> Origine : {plat.strArea}</p>
                        <p className='categorie-repas'>Catégorie : {plat.strCategory}</p>
                        <div className='image-repas'> <img src={plat.strMealThumb} alt={plat.strMealThumb} className='img-repas' /></div>
                        {/*Ingrédients et Mesure*/}
                        <div className='portions'>
                            <section className='ingredients'>
                                <p>{plat.strIngredient1}</p>
                                <p>{plat.strIngredient2}</p>
                                <p>{plat.strIngredient3}</p>
                                <p>{plat.strIngredient4}</p>
                                <p>{plat.strIngredient5}</p>
                                <p>{plat.strIngredient6}</p>
                                <p>{plat.strIngredient7}</p>
                                <p>{plat.strIngredient8}</p>
                                <p>{plat.strIngredient9}</p>
                                <p>{plat.strIngredient10}</p>
                                <p>{plat.strIngredient11}</p>
                                <p>{plat.strIngredient12}</p>
                                <p>{plat.strIngredient13}</p>
                                <p>{plat.strIngredient14}</p>
                                <p>{plat.strIngredient15}</p>
                                <p>{plat.strIngredient16}</p>
                                <p>{plat.strIngredient17}</p>
                                <p>{plat.strIngredient18}</p>
                                <p>{plat.strIngredient19}</p>
                                <p>{plat.strIngredient20}</p>
                            </section>
                            <section className='mesures'>
                                <p>{plat.strMeasure1}</p>
                                <p>{plat.strMeasure2}</p>
                                <p>{plat.strMeasure3}</p>
                                <p>{plat.strMeasure4}</p>
                                <p>{plat.strMeasure5}</p>
                                <p>{plat.strMeasure6}</p>
                                <p>{plat.strMeasure7}</p>
                                <p>{plat.strMeasure8}</p>
                                <p>{plat.strMeasure9}</p>
                                <p>{plat.strMeasure10}</p>
                                <p>{plat.strMeasure11}</p>
                                <p>{plat.strMeasure12}</p>
                                <p>{plat.strMeasure13}</p>
                                <p>{plat.strMeasure14}</p>
                                <p>{plat.strMeasure15}</p>
                                <p>{plat.strMeasure16}</p>
                                <p>{plat.strMeasure17}</p>
                                <p>{plat.strMeasure18}</p>
                                <p>{plat.strMeasure19}</p>
                                <p>{plat.strMeasure20}</p>
                            </section>
                        </div>
                        <div className='instruction'> {plat.strInstructions} </div>
                        <a href={plat.strYoutube} target="blank" className="lien-youtube"><img src={youtubeIcone} alt="icone de youtube" /> </a>
                        <div className='source-du-plat'>{plat.strSource}</div>
                    </li>
                ))
            }
        </ul>
    );
};

export default Recette;