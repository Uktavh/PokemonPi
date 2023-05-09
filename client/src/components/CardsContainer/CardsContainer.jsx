import Card from "../Card/Card"
import style from './CardsContainer.module.css'
import Pagination from "../../components/Pagination/Pagination";
import { getAllPokemons } from '../../redux/actions'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

const CardsContainer = () => {
    
    const allPokes = useSelector(state => state.allPokes)
    
  const [currentPage, setCurrentPage] = useState(1)
  const [pokesPerPage, setPokesPerPage] = useState(12)
  const indexOfLastPoke = currentPage * pokesPerPage
  const indexOfFirstPoke = indexOfLastPoke - pokesPerPage
  const currentPokes = allPokes.slice(indexOfFirstPoke, indexOfLastPoke)
  const paginado = (pageNumber) => {
      setCurrentPage(pageNumber)
  }

  // solo para saber la cantidad de paginas en este componente
  const pageNumbers = []
  for (let i = 0; i < Math.ceil(allPokes.length / pokesPerPage); i++) {
      pageNumbers.push(i)
  }

  // handler para las flechas de prev y next
  const clickHandler = (event) => {
      if (event.target.name === 'prev') {
          if (currentPage - 1 === 0) return
          setCurrentPage(currentPage - 1)
      }
      else {
          if (currentPage + 1 === pageNumbers.length + 1) return
          setCurrentPage(currentPage + 1)
      }
  }

      



    return (
      <div className={style.container}>

        <div className={style.cardsContainer}>

            {currentPokes.map((pokemon,index) =>{
              return <Card
              key={index}
              id={pokemon.id}
              image={pokemon.image}
              image_alter={pokemon.image_alter}
              name={pokemon.name}
              types={pokemon.types}
              
              hp={pokemon.hp}
              attack={pokemon.attack}
              defense={pokemon.defense}
              speed={pokemon.speed}
              height={pokemon.height}
              weight={pokemon.weight}
              />})}
        </div>
        <div className={style.containerButtons}>
                {currentPokes.length !== 0 && <button name="prev" onClick={clickHandler}>←</button>}
                <Pagination
                    pokesPerPage={pokesPerPage}
                    allPokes={allPokes.length}
                    paginado={paginado}
                    currentPage={currentPage}
                />
                {currentPokes.length !== 0 && <button  name="next" onClick={clickHandler}>→</button>}
                {currentPokes.length === 0 && <div>Loading</div>}
            </div>
              </div>
    )
}

export default CardsContainer