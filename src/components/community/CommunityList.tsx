'use client';

import React from 'react';
import styles from '@/styles/pages/community/community.module.scss';
import { useGetArticleList } from '@/hooks/useGetArticleQueryHook';
import Link from 'next/link';

interface ContentType {
  id: number;
  title: string;
  content: string;
}
const CommunityList = () => {
  const { articleList, isLoading, isError } = useGetArticleList();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>로그인을 다시 시도해 주세요.</div>;
  }

  return (
    <div className={styles['community']}>
      {articleList.content}
      <table className={styles['community-board']}>
        <colgroup>
          <col className={styles['community-board-colgroup-first']} />
          <col className={styles['community-board-colgroup-second']} />
          <col className={styles['community-board-colgroup-second']} />
        </colgroup>
        <thead>
          <tr>
            <th className={styles['community-board-disable']}>No</th>
            <th>제목</th>
            <th>내용</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles['community-board-disable']}>
              <h2>1</h2>
            </td>

            <td>
              <Link
                className={styles['community-board-link']}
                href={`/community/4`}
              >
                굴비{' '}
              </Link>
            </td>

            <td>보리굴비입니다.</td>
          </tr>
          {articleList.content.map((item: ContentType) => {
            return (
              <tr key={item.id}>
                <td>
                  <Link
                    className={styles['community-board-link']}
                    href={`/community/${item.id}`}
                  >
                    {item.id}
                  </Link>
                </td>
                <td>
                  <Link
                    className={styles['community-board-link']}
                    href={`/community/${item.id}`}
                  >
                    {item.title}
                  </Link>
                </td>
                <td>
                  <Link
                    className={styles['community-board-link']}
                    href={`/community/${item.id}`}
                  >
                    {item.content}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CommunityList;
