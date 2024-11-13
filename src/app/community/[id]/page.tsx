'use client';
import React, { use } from 'react';

import { useGetDetailArticle } from '@/hooks/useGetArticleQueryHook';

const CommunityViewPage = ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = use(params);
  const { articleDetail, isLoading, isError } = useGetDetailArticle(id);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <div>오류 발생</div>;
  }

  return <div>{articleDetail}</div>;
};

export default CommunityViewPage;
