import React from 'react';
import styles from '../styles/Header.module.css'; // CSS 모듈을 가져옵니다.

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* 빈 상단바이므로 아무 내용도 넣지 않습니다. */}
    </header>
  );
};

export default Header;