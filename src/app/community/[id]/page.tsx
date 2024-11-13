import React from 'react';

import { useGetDetailArticle } from '@/hooks/useGetArticleQueryHook';

const CommunityViewPage = ({ params }: { params: { id: number } }) => {
  const { id } = params;
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
