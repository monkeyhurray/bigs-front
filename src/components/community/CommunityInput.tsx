'use client';
import React, { useState } from 'react';
import { useCreateContentMutation } from '@/hooks/useContentMutationHook';

interface ContentsType {
  title: string;
  content: string;
  category: string;
  file: File | null;
}

const CommunityInput = () => {
  const [contents, setContents] = useState<ContentsType>({
    title: '',
    content: '',
    category: 'NOTICE',
    file: null,
  });

  const { createContent } = useCreateContentMutation();

  const handleCreateContent = () => {
    createContent(contents);
  };

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
      <button onClick={handleCreateContent}>만들기</button>
    </div>
  );
};

export default CommunityInput;
