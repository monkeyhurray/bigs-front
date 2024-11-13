import React, { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';

import styles from '@/styles/components/Pagination.module.scss';
const Pagination = ({
  setCurrentPage,
  currentPage,
  totalPage,
}: {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  totalPage: number;
}) => {
  const noPrev = currentPage === 1;
  const noNext = totalPage;
  const pageRange = [...Array(5)].map(
    (_, i) => currentPage + i <= totalPage && currentPage + i
  );

  return (
    <div className={styles['pagination']}>
      <ul className={styles['pagination-pages']}>
        <li>
          <Link
            className={
              noPrev
                ? styles['pagination-pages-page-diable']
                : styles['pagination-pages-page']
            }
            href={`?page=${currentPage - 1}`}
            onClick={(e) => {
              e.preventDefault();

              if (!noPrev) setCurrentPage(currentPage - 1);
            }}
          >
            이전
          </Link>

          {pageRange.map((_, i) => {
            const pageNumber = currentPage + i;
            return pageNumber <= totalPage ? (
              <li key={i}>
                <Link
                  className={`${styles['pagination-pages-page']} ${
                    currentPage === pageNumber ? styles.active : ''
                  }`}
                  href={`?page=${pageNumber}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(pageNumber);
                  }}
                >
                  {pageNumber}
                </Link>
              </li>
            ) : null;
          })}

          <Link
            className={
              noNext
                ? styles['pagination-pages-page-diable']
                : styles['pagination-pages-page']
            }
            href={`?page=${currentPage + 1}`}
            onClick={(e) => {
              e.preventDefault();
              if (!noNext) setCurrentPage(currentPage + 1);
            }}
          >
            다음
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
