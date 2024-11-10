'use client';
import React from 'react';
import styles from '@/styles/components/Header.module.scss';
import { useRouter } from 'next/navigation';
const Header = () => {
  const router = useRouter();

  return (
    <main className={styles['header']}>
      <div
        className={styles['header-contents']}
        onClick={() => router.push('/')}
      >
        메인
      </div>
      <div
        className={styles['header-contents']}
        onClick={() => router.push('/login')}
      >
        로그인
      </div>
      <div
        className={styles['header-contents']}
        onClick={() => router.push('/sign-up')}
      >
        회원가입
      </div>
    </main>
  );
};

export default Header;
