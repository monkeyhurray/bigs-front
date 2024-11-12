'use client';

import React from 'react';

import { useGetArticleList } from '@/hooks/useGetArticleListQueryHook';
const CommunityList = () => {
  const { articleList, isLoading, isError } = useGetArticleList();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  return <div>{articleList.data}</div>;
};

export default CommunityList;
