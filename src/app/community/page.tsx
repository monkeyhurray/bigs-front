'use client';

import React, { useState } from 'react';
import CommunityInput from '@/components/community/CommunityInput';
import CommunityList from '@/components/community/CommunityList';
import Pagination from '@/components/Pagination';
import styles from '@/styles/pages/community/community.module.scss';
import { useGetArticleList } from '@/hooks/useGetArticleQueryHook';

const CommunityPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { articleList, isLoading, isError } = useGetArticleList({
    page: 1,
    size: 1,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>로그인을 다시 시도해 주세요.</div>;
  }

  return (
    <div className={styles['community']}>
      <CommunityInput />
      <CommunityList content={articleList.content} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={Math.ceil(articleList.totalElements / 10)}
      />
    </div>
  );
};

export default CommunityPage;
