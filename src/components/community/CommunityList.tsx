'use client';

import React from 'react';
import styles from '@/styles/pages/community/community.module.scss';

import Link from 'next/link';

interface ContentType {
  id: number;
  title: string;
  content: string;
  category: string;
  file: File | null;
}
const CommunityList = ({ content }: { content: ContentType[] }) => {
  return (
    <div className={styles['community']}>
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
          {content.map((item: ContentType) => {
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
