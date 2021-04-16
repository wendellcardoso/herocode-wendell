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
      sliceRange[0] = currentPage - 3;
      sliceRange[1] = currentPage + 1;
    }else{
      sliceRange[0] = currentPage - 2;
      sliceRange[1] = currentPage + 1;
    }
  }else{
    if(currentPage < limit){
      sliceRange[0] = 0;
      sliceRange[1] = limit;
    }else if(currentPage === pageNumbers.length){
      sliceRange[0] = currentPage - limit;
      sliceRange[1] = currentPage + 1;
    }
    else{
      sliceRange[0] = currentPage - 3;
      sliceRange[1] = currentPage - 2;
    }
  }


  return (
    <nav>
      <ul className='pagination'>
        {
          pageNumbers.slice(sliceRange[0], sliceRange[1]).map(number => (
            <li key={number}>
              <a
                  href={`#${currentPage}`} 
                  onClick={() => paginate(number)}
                  className={number == currentPage ? styles.currentPage : undefined}
              >
                  {number}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );

};

export default Pagination;