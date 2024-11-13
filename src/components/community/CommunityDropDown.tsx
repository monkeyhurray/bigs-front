import { Dispatch, SetStateAction, useState } from 'react';
import styles from '@/styles/pages/community/community.module.scss';
import { useGetArticleCategory } from '@/hooks/useGetArticleQueryHook';
const CommunityDropDown = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const dropdownCategory = () => setIsCategoryOpen(!isCategoryOpen);

  const { articleCategory, isLoading, isError } = useGetArticleCategory();

  const handleSelect = (categorty: string) => {
    setSelectedCategory(categorty);
    setIsCategoryOpen(false);
  };

  if (isLoading) {
    <div>로딩중</div>;
  }

  if (isError) {
    return <div>로그인을 유지해주세요.</div>;
  }

  return (
    <div className={styles['community-header-dropdown']}>
      <button
        onClick={dropdownCategory}
        className={styles['community-header-dropdown-btn']}
      >
        {selectedCategory}
      </button>

      {isCategoryOpen && (
        <ul className={styles['community-header-dropdown-menus']}>
          {Object.entries(articleCategory).map(([key, value]) => {
            return (
              <li
                className={styles['community-header-dropdown-menu']}
                key={key}
                onClick={() => handleSelect(key)}
              >
                {value as React.ReactNode}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default CommunityDropDown;
