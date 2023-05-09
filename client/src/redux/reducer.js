import {
    GET_TYPES,
    GET_ALL_POKEMONS,
    GET_POKE_BY_ID,
    GET_POKE_BY_NAME,
    GET_POKES_FILTERED_TYPES,
    GET_POKES_FILTERED_ORIGIN,
    GET_POKES_ORDER_ATTACK,
    GET_POKES_ORDER_ALPHABETIC,
    FETCHED_ERRORS
} from "./actionsTypes";

const initialState = {
    allPokes: [],
    allPokesToFilter: [],
    pokeDetail: [],
    types: [],
    errors: '',
    apiOrDB: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokes: action.payload,
                allPokesToFilter: action.payload
            }

        case GET_POKE_BY_NAME:
            return {
                ...state,
                allPokes: action.payload
            }

        case GET_POKE_BY_ID:
            return {
                ...state,
                pokeDetail: action.payload
            }

        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }

        case GET_POKES_FILTERED_TYPES:
            return {
                ...state,
                allPokes: [...state.allPokesToFilter.filter(poke => poke.types.includes(action.payload))]
            }
        case GET_POKES_ORDER_ATTACK:
            if (action.payload === 'Ascendente') {
                return {
                    ...state,
                    allPokes: [...state.allPokes.sort((a, b) => a.attack - b.attack)]
                }
            }
            else {
                return {
                    ...state,
                    allPokes: [...state.allPokes.sort((a, b) => b.attack - a.attack)]
                }
            }

        case GET_POKES_ORDER_ALPHABETIC:
            if (action.payload === 'Ascendente') {
                return {
                    ...state,
                    allPokes: [...state.allPokes.sort((a, b) => a.name.localeCompare(b.name))]
                }
            }
            else {
                return {
                    ...state,
                    allPokes: [...state.allPokes.sort((a, b) => b.name.localeCompare(a.name))]
                }
            }

        case GET_POKES_FILTERED_ORIGIN:
            if (action.payload === 'API') {
                return {
                    ...state,
                    allPokes: [...state.allPokesToFilter.filter(poke => !isNaN(poke.id))]
                }
            } else if (action.payload === 'DB') {
                return {
                    ...state,
                    allPokes: [...state.allPokesToFilter.filter(poke => isNaN(poke.id))]
                }
            }
            else {
                return {
                    ...state,
                    allPokes: state.allPokesToFilter.map(p => p)
                }
            }

        case FETCHED_ERRORS:
            return {
                ...state,
                allPokes: [],
                errors: action.payload
            }

        default: return { ...state }
    }
}

export default reducer