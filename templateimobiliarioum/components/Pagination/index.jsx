import React, { useState, useEffect } from "react";
import styles from '@/styles/components/PaginationSearch/PaginationSearch.module.css'

export default function PaginationSearch({ items, itemsPerPage, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(items.length / itemsPerPage));
  }, [items, itemsPerPage]);

  const handleClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
    onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
    onPageChange(currentPage + 1);
  };

  const renderPagination = () => {
    const pages = [];
    let startPage, endPage;

    if (totalPages <= 3) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 2) {
        startPage = 1;
        endPage = 3;
      } else if (currentPage >= totalPages - 1) {
        startPage = totalPages - 3;
        endPage = totalPages;
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li
          key={i}
          className={`${styles.pageItem}${currentPage === i ? ` ${styles.active}` : ""}`}
        >
          <button className={`${styles.pageLink}`} onClick={() => handleClick(i)}>
            <p>{i}</p>  
          </button>
        </li>
      );
    }

    return pages;
  };

  return (
    <nav className={styles.MainNavigation}>
      <ul className={`${styles.pagination} justify-content-center`}>
        <li
          className={`${styles.pageItem}${currentPage === 1 ? ` ${styles.disabled}` : ""}`}
        >
          <button className={`${styles.pageLink}`} style={{transform: 'rotate(0deg)', backgroundColor:'var(--Main-Color)' }} onClick={handlePrevClick}>
            <p>&lt;</p>
          </button>
        </li>
        {renderPagination()}
        <li
          className={`${styles.pageItem}${currentPage === totalPages ? ` ${styles.disabled}` : ""}`}
        >
          <button className={`${styles.pageLink}`} style={{transform: 'rotate(180deg)', backgroundColor:'var(--Main-Color)' }} onClick={handleNextClick}>
            <p>&lt;</p>
          </button>
        </li>
      </ul>
    </nav>
  );
}
