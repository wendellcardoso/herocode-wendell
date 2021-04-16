import React, { useEffect } from 'react';

import styles from "../styles/components/Pagination.module.css";

const Pagination = ({ charactersPerPage, totalCharacter, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCharacter / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number}>
            <a
                href={`#${currentPage}`} 
                onClick={() => paginate(number)}
                className={number == currentPage && styles.currentPage}
            >
                {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;