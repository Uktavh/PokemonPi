import React, { useEffect, useState } from 'react';
import classNameByType from '../../helpers/classNameByType';
import getEmojis from '../../helpers/getEmojis';
import s from './Card.module.css';

const ballo = ('https://64.media.tumblr.com/dd3f6857ecc417bfbea89bb8ed37a5f7/tumblr_ox6e6kF3HG1sox2ufo1_400.gif')
const shiny2 = ('https://static.thenounproject.com/png/3620453-200.png')
const makeItShiny = require('../../shiny.png')

const Card = ({ id, name, image, image_alter, hp, attack, types }) => {
    
    const [imgLoaded, setImgLoaded] = useState(false);
    const [currentImage, setCurrentImage] = useState(image);
    
    useEffect(() => {
        setCurrentImage(image);
    }, [image]);

    const handleButtonClick = () => {
        if (!isNaN(id)) { // Check if id is a valid number
            if (currentImage === image) {
                setCurrentImage(image_alter);
            } else {
                setCurrentImage(image);
            }
        }
    };

    let nameClean = name;
    name.includes('-f') && (nameClean = name.slice(0, -2));
    name.includes('-m') && (nameClean = name.slice(0, -2));

    const className = classNameByType(types,id);
    const typesEmojis = getEmojis(types);

    return (

        <div key={id} className={`${s.card} ${className} ${s.animated}`}>
                
            <div className={s.frontLayer}>

                <div className={s.top}>
                    <a>{nameClean}</a>
                    {name.includes('-f')&&<a className={s.gender}>&nbsp;Y</a>}
                    {name.includes('-m')&&<a className={s.gender}>&nbsp;Z</a>}
                </div>
                
                <img
                className={`${s.img} ${s.show}`}
                src={currentImage}
                alt={nameClean}
                onLoad={() => setImgLoaded(true)}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = ballo;
                    setImgLoaded(true);
                    e.target.style = "transform: translateY(-10%);";
                }}
                onClick={handleButtonClick} // Add onClick event here
                />

                <div className={s.bottom}>
                    <a>{`⚔️ ${attack}`}</a>
                    <a>{`❤️ ${hp}`}</a>
                    <a>{typesEmojis}</a>
                </div>

                </div>
        </div>

    );
};
          
export default Card;