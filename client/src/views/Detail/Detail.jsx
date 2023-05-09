import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getPokeById } from "../../redux/actions"

const balli = ('http://i.imgur.com/VsFqty6.gif')
const funnycharizard = ('https://media0.giphy.com/media/QYn97FfN2QNd4wtGQw/200w.gif?cid=6c09b952lhdvzc8dm341ftoqjic0abr5812aiyixp7jwjnk9&rid=200w.gif&ct=g')

const style = {}

const Detail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPokeById(id))
    }, [id])

    const pokemon = useSelector(state => state.pokeDetail)
    let str = pokemon.name

    let typesQuantity = (pokemon.types.length > 1) ? 'types' : 'type';

    return pokemon.image && (
        <div key={id}>
            <div >
                <div >
                    <p>{str}</p>
                </div>
                <br />
                <div>
                    <img
                        src={pokemon.image}
                        alt={`${pokemon.name}`}
                    />
                </div>
            </div>
            <div>
                <p>Health Points {pokemon.hp}</p>
                <p>Attack Points{pokemon.attack}</p>
                <p>Defense Points {pokemon.defense}</p>
                <p>Speed Points {pokemon.speed}</p>
                <p>Height: {(pokemon.height)*10} cm</p>
                <p>Weight: {(pokemon.weight)/10} kg</p>
                <p>Types: {pokemon.types?.map((e) => e + " ")}</p>
            </div>
        </div>
    );
}

export default Detail;