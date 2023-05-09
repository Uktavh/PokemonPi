import CardsContainer from "../../components/CardsContainer/CardsContainer"
import FilterButtons from "../../components/FilterButtons/FilterButtons"
import style from './Home.module.css'

const Home = (props) => {

    return (
        <div className={style.container}>
            <FilterButtons allGenres={props.allTypes} />
            <CardsContainer allGames={props.allPokes} />
        </div>
    )
}

export default Home