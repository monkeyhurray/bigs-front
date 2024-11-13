'use client';
import React, { useState } from 'react';
import { useCreateContentMutation } from '@/hooks/useContentMutationHook';

import styles from '@/styles/pages/community/community.module.scss';
import CommunityDropDown from './CommunityDropDown';

interface ContentsType {
  title: string;
  content: string;
  category: string;
  file: File | null;
}

const CommunityInput = () => {
  const [selectedCategory, setSelectedCategory] = useState('카테고리');

  const [contents, setContents] = useState<ContentsType>({
    title: '',
    content: '',
    category: selectedCategory,
    file: null,
  });

  const { createContent } = useCreateContentMutation();

  const handleCreateContent = () => createContent(contents);

  return (
    <div className={styles['community-header']}>
      <input
        className={styles['community-header-input']}
        placeholder="제목을 입력해 주세요."
        onChange={(e) => setContents({ ...contents, title: e.target.value })}
      />
      <input
        className={styles['community-header-input']}
        placeholder="내용을 입력해 주세요."
        onChange={(e) => setContents({ ...contents, content: e.target.value })}
      />
      <label
        htmlFor="file-upload"
        className={styles['community-header-file-upload']}
      >
        파일 선택
      </label>
      <input
        id="file-upload"
        className={styles['community-header-file']}
        type="file"
        onChange={(e) => setContents({ ...contents, file: e.target.files![0] })}
      />
      <CommunityDropDown
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <button
        className={styles['community-header-button']}
        onClick={handleCreateContent}
      >
        만들기
      </button>
    </div>
  );
};

export default CommunityInput;
