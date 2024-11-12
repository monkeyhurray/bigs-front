import CommunityInput from '@/components/community/CommunityInput';
import CommunityList from '@/components/community/CommunityList';
import Pagination from '@/components/Pagination';

import React from 'react';

const CommunityPage = () => {
  const contents = 12;
  const totalPages = Math.ceil(contents % 10);

  return (
    <>
      <CommunityInput />
      <CommunityList />
      <Pagination contents={contents} />
    </>
  );
};

export default CommunityPage;
