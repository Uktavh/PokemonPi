import { getAllPokemons, getPokesFromApiOrDb, getPokesOrderAlphabetic, getPokesOrderRating, getTypes, getPokesFilteredTypes, getPokesOrderAttack } from "../../redux/actions"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import SearchBar from "../SearchBar/SearchBar"
import style from './FilterButtons.module.css'
import { Link } from "react-router-dom"

const FilterButtons = () => {

    const dispatch = useDispatch()

    const types = useSelector(state => state.types)
    console.log(types)

    // action para filtrar por types
    const filterByTypes = (event) => {
        dispatch(getPokesFilteredTypes(event.target.value))
    }
    // action para ordenar por attack
    const pokesOrderAttack = (event) => {
        dispatch(getPokesOrderAttack(event.target.value))
    }
    // action para ordenar alfabeticamente
    const pokesOrderAlphabetic = (event) => {
        dispatch(getPokesOrderAlphabetic(event.target.value))
    }
    // action para filtrar por origen de api o db
    const pokesFromApiOrDb = (event) => {
        dispatch(getPokesFromApiOrDb(event.target.value))
    }

    return (
        <div className={style.container}>
                <SearchBar>ACA</SearchBar>
            
                <select className={style.selects} onChange={filterByTypes}>
                    <option select disabled selected={true}>Types</option>
                    {
                        types.map(types => {
                            return <option key={types.name} value={types.name}>{types.name}</option>
                        })
                    }
                </select>
            

                <select className={style.selects} onChange={pokesFromApiOrDb}>
                    <option select disabled selected={true}>Origin</option>
                    <option value="ALL">Reset Filters</option>
                    <option value="API">From API</option>
                    <option value="DB">Created by user</option>
                </select>


                <select className={style.selects} onChange={pokesOrderAttack}>
                    <option select disabled selected={true}>Attack</option>
                    <option value="Ascendente">Ascendant</option>
                    <option value="Descendente">Descendant</option>
                </select>

                <select className={style.selects} onChange={pokesOrderAlphabetic}>
                    <option select disabled selected={true}>By Name</option>
                    <option value="Ascendente">Ascendant</option>
                    <option value="Descendente">Descendant</option>
                </select>
                <Link to="/cards/create-card">CREATE A CARD</Link>
        </div>
    )
}

export default FilterButtons