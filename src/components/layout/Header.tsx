'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/components/Header.module.scss';
import Link from 'next/link';

const Header = () => {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken') ?? '');
  }, []);

  const parseJwt = () => {
    if (!accessToken) return null;
    const base64Url = accessToken.split('.')[1];

    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  };
  const currentTime = new Date();
  const { name, exp } = parseJwt() || {};

  const expiration = new Date(exp * 1000);

  return (
    <main className={styles['header']}>
      <Link href="/" className={styles['header-contents']}>
        메인
      </Link>
      {expiration > currentTime ? (
        <p className={styles['header-contents']}>{name}님</p>
      ) : (
        <>
          <Link href="/login" className={styles['header-contents']}>
            로그인
          </Link>
          <Link href="/sign-up" className={styles['header-contents']}>
            회원가입
          </Link>
        </>
      )}
      <Link href="/community" className={styles['header-contents']}>
        커뮤니티
      </Link>
    </main>
  );
};

export default Header;
