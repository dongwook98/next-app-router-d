import { ReactNode } from 'react';
import styles from '@/app/(beforeLogin)/_component/main.module.css';

type Props = { children: ReactNode; modal: ReactNode };

export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {/**
       * 패러렐 라우트를 사용하면 한 페이지에 여러 개의 화면을 띄울 수 있음
       * 패러렐 라우트는 layout에서 사용 가능!
       * 단, 패러렐 라우트와 layout이 같은 폴더에 있어야함
       * */}
      {modal}
    </div>
  );
}

// 주소 localhost:3000일 때는 children -> page.tsx, modal -> @modal/default.tsx
// 주소 localhost:3000/i/flow/login일 때는 children -> i/flow/login/page.tsx, modal -> @modal/i/flow/login/page.tsx
