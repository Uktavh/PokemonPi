import { useState } from 'react';
import style from './Pagination.module.css';

const Pagination = ({ pokesPerPage, allPokes, paginado, currentPage }) => {

    const pageNumbers = []
    // for para saber la cantidad de botones que se van a renderizar
    for (let i = 0; i < Math.ceil(allPokes / pokesPerPage); i++) {
        pageNumbers.push(i + 1)
    }

    return (
        <nav className={style.container}>
            <ul className={style.containerButtons}>
                {
                    pageNumbers &&
                    pageNumbers.map(number => (
                        <button key={number} className={currentPage === number ? style.current : style.buttons} onClick={() => paginado(number)}>{number}</button>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination