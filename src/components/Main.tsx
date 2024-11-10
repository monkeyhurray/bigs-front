'use client';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { articleCheck, articleListCheck } from '@/api/write';
import { useContentMutation } from '@/hooks/useContentMutationHook';

interface ContentsType {
  title: string;
  content: string;
  category: string;
  file: File | null;
}

const Main = () => {
  const [contents, setContents] = useState<ContentsType>({
    title: '',
    content: '',
    category: 'NOTICE',
    file: null,
  });

  const { createContent } = useContentMutation();

  const {
    data: articleList,
    isLoading,
    isError,
  } = useQuery({
    queryFn: articleListCheck,
    queryKey: ['write'],
    retry: 1,
  });

  const { data: article } = useQuery({
    queryFn: articleCheck,
    queryKey: ['write'],
  });

  const createContentBtn = () => {
    createContent(contents);
  };
  if (isLoading) {
    return <div>로딩중..</div>;
  }

  if (isError) {
    return <div>오류발생</div>;
  }
  console.log(article);
  console.log(articleList);
  return (
    <div>
      <input
        onChange={(e) => setContents({ ...contents, title: e.target.value })}
      />
      <input
        onChange={(e) => setContents({ ...contents, content: e.target.value })}
      />
      <input
        type="file"
        onChange={(e) => setContents({ ...contents, file: e.target.files![0] })}
      />
      <button onClick={createContentBtn}>만들기</button>
      {articleList.content}
    </div>
  );
};

export default Main;
