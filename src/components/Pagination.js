import React, { useEffect, useState } from 'react';

import styles from "../styles/components/Pagination.module.css";

const Pagination = ({ charactersPerPage, totalCharacter, paginate, currentPage }) => {
  const pageNumbers = [];
  const sliceRange = [0, 3];

  const [limit, setLimit] = useState(window.innerWidth <= 767 ? 3 : 5);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  

  
  for (let i = 1; i <= Math.ceil(totalCharacter / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    if(windowWidth <= 767){
      setLimit(3);
    }else{
      setLimit(5);
    }
    // console.log(windowWidth);
  }, [windowWidth])

  window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

  if(limit === 3){
    if(currentPage < limit){
      sliceRange[0] = 0;
      sliceRange[1] = limit
    }else if (currentPage === pageNumbers.length){
      sliceRange[0] = currentPage - limit;
      sliceRange[1] = currentPage + 1;
    }else{
      sliceRange[0] = currentPage - 2;
      sliceRange[1] = currentPage + 1;
    }
  }else{
    if(currentPage <= Math.ceil(limit/2)){
      sliceRange[0] = 0;
      sliceRange[1] = limit;
    }else if(currentPage === pageNumbers.length){
      sliceRange[0] = currentPage - limit;
      sliceRange[1] = currentPage + 1;
    }else if(currentPage === pageNumbers.length-1){
      sliceRange[0] = currentPage - 4;
      sliceRange[1] = currentPage + 1;
    }
    else{
      sliceRange[0] = currentPage - 3;
      sliceRange[1] = currentPage + 2;
    }
  }


  return (
    <nav>

    {
      currentPage > 1 && (
        <>
        {
          currentPage !== 2 && (
            <a href="#" className={styles.pageControl} onClick={() => paginate(1)}>
              <img src="assets/first.svg" alt=""/>
            </a>
          )
        }
          <a href="#" className={styles.pageControl} onClick={() => paginate(currentPage-1)}>
            <img src="assets/prev.svg" alt=""/>
          </a>
        </>
      )
    }
      <ul className='pagination'>
        {
          pageNumbers.slice(sliceRange[0], sliceRange[1]).map(number => (
            <li key={number}>
              <a
                  href="#" 
                  onClick={() => paginate(number)}
                  className={number === currentPage ? styles.currentPage : undefined}
              >
                  {number}
              </a>
            </li>
          ))
        }
      </ul>
    {
      currentPage !== pageNumbers.length && (
        <>
          <a href="#" className={styles.pageControl} onClick={() => paginate(currentPage + 1)}>
            <img src="assets/next.svg" alt=""/>
          </a>
          {
            (currentPage+1) !== pageNumbers.length && (
              <a href="#" className={styles.pageControl} onClick={() => paginate(pageNumbers.length)}>
                <img src="assets/last.svg" alt=""/>
              </a>
            )
          }
        </>
      )
    }
    </nav>
  );

};

export default Pagination;