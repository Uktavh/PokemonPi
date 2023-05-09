import s from '../components/Card/Card.module.css'

const classNamesByType = {
    bug: s.bug,
    dark: s.dark,
    dragon: s.dragon,
    electric: s.electric,
    fairy: s.fairy,
    fighting: s.fighting,
    flying: s.flying,
    fire: s.fire,
    ghost: s.ghost,
    grass: s.grass,
    ground: s.ground,
    ice: s.ice,
    normal: s.normal,
    poison: s.poison,
    psychic: s.psychic,
    rock: s.rock,
    shadow: s.shadow,
    unknown: s.unknown,
    water : s.water,
    default: s.unknown,
};

const classNameByType = ([type, subType], id) => {

    let classNames = classNamesByType[type] || classNamesByType.default;
  
    if (type === 'normal') classNames = classNamesByType[subType] || classNamesByType.normal;
    if (type === 'ice' || subType === 'ice') classNames = classNamesByType.ice;
      
    classNames = isNaN(id) ? s.created : classNames;
  
    return classNames;
};

export default classNameByType;