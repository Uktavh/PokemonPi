import axios from 'axios'
import {
    GET_TYPES,
    GET_ALL_POKEMONS,
    GET_POKE_BY_ID,
    GET_POKE_BY_NAME,
    GET_POKES_FILTERED_TYPES,
    GET_POKES_FILTERED_ORIGIN,
    GET_POKES_ORDER_ATTACK,
    GET_POKES_ORDER_ALPHABETIC,
    POST_POKEMON,
    FETCHED_ERRORS
} from "./actionsTypes";

// action traer todos los pokes
export const getAllPokemons = () => {
    try {
        return async (dispatch) => {
            const response = await axios.get('http://localhost:3001/pokemons')
            const data = response.data
            
            return dispatch({ type: GET_ALL_POKEMONS, payload: data })
        }
    } catch (error) {
        console.log(error)
    }
}

// action traer pokes por nombres
export const getPokeByName = (name) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
        const data = response.data
        return dispatch({ type: GET_POKE_BY_NAME, payload: data })
    } catch (error) {
        console.log(error)
    }
}

// action traer pokes por id
export const getPokeById = (id) => {
    try {
        return async (dispatch) => {
            const response = await axios.get(`http://localhost:3001/pokemons/${id}`)
            console.log(response.data)
            const data = response.data
            return dispatch({ type: GET_POKE_BY_ID, payload: data })
        }
    } catch (error) {
        console.log(error)
    }
}

// action traer los types
export const getTypes = () => {
    try {
        return async (dispatch) => {
            const response = await axios.get('http://localhost:3001/types')
            const data = response.data
            return dispatch({ type: GET_TYPES, payload: data })
        }
    } catch (error) {
        console.log(error)
    }
}

// action traer pokes filtrados
export const getPokesFilteredTypes = (types) => {
    return { type: GET_POKES_FILTERED_TYPES, payload: types }
}

// cation ordenar por attack
export const getPokesOrderAttack = (value) => {
    return { type: GET_POKES_ORDER_ATTACK, payload: value }
}

// action ordenar alfabeticamente
export const getPokesOrderAlphabetic = (value) => {
    return { type: GET_POKES_ORDER_ALPHABETIC, payload: value }
}

// action filtrar por origen de api o db
export const getPokesFromApiOrDb = (value) => {
    return { type: GET_POKES_FILTERED_ORIGIN, payload: value }
}

// action post pokemon
export const postPokemon = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/pokemons', payload)
            const data = response.data
            return dispatch({ type: POST_POKEMON, payload: data })
        } catch (error) {
            console.log(error)
        }
    }
}