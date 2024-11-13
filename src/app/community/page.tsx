import CommunityInput from '@/components/community/CommunityInput';
import CommunityList from '@/components/community/CommunityList';
import Pagination from '@/components/Pagination';
import styles from '@/styles/pages/community/community.module.scss';

import React from 'react';

const CommunityPage = () => {
  return (
    <div className={styles['community']}>
      <CommunityInput />
      <CommunityList />
      <Pagination />
    </div>
  );
};

export default CommunityPage;
