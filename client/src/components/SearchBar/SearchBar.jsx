import { getPokeByName } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import s from './SearchBar.module.css'

const SearchBar = () => {

    const [poke, setPoke] = useState('')
    const dispatch = useDispatch()

    const onChangeHandler = (event) => {
        setPoke(event.target.value) 
    }

    const functions = () => {
        dispatch(getPokeByName(poke))
        setPoke('')
    }

    return (
        <div className={s.search}>
        <form
          onSubmit={(e) => {
            functions(e);
          }}
        >
          <input
            type="text"
            placeholder="Buscar..."
            onChange={(e) => {
                onChangeHandler(e);
            }}
            value={poke}
            className={s.inputsearch}
          />
          <button type="submit" className={s.btnsearch}>
            Buscar
          </button>
          </form>
      </div>
    )
}

export default SearchBar;