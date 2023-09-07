import React from 'react';
import { useState } from 'react';
import Murs from '../Components/Mur/Murs';
import '../Styles/home/home.css';


const Home = () => {

    const [search, setSearch] = useState("");

    console.log(search)
    return (
        <div className='home'>
            <h1 className='titre'> React Cook</h1>

            <input type="search" name="" id="" placeholder="Tapez le nom d'un aliment ( en anglais)" onChange={(e) => setSearch(e.target.value)} className="barre-recherche" />

            <Murs search={search} />

        </div>
    );
};

export default Home;