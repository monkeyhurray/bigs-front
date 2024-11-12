import React from 'react';
import styles from '@/styles/components/Header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <main className={styles['header']}>
      <Link href="/" className={styles['header-contents']}>
        메인
      </Link>
      <Link href="/login" className={styles['header-contents']}>
        로그인
      </Link>
      <Link href="/sign-up" className={styles['header-contents']}>
        회원가입
      </Link>
      <Link href="/community" className={styles['header-contents']}>
        커뮤니티
      </Link>
    </main>
  );
};

export default Header;
