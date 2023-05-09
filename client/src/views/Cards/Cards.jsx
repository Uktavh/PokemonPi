import CardsContainer from "../../components/CardsContainer/CardsContainer"
import FilterButtons from "../../components/FilterButtons/FilterButtons"
import s from './Cards.module.css'

const Cards = () => {

    return (
        <div className={s.container}>
            <FilterButtons/>
            <CardsContainer/>
        </div>
    )
}

export default Cards