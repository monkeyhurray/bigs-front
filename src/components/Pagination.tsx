import React from 'react';

const Pagination = () => {
  const contents = 12;
  const pages = Math.ceil(contents / 10);
  return (
    <div>
      콘텐츠가
      {contents} 있을 때, 필요 페이지 {pages}
    </div>
  );
};

export default Pagination;
