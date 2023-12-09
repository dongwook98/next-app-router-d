import { ReactNode } from 'react';
import style from './layout.module.css';
import Link from 'next/link';
import Image from 'next/image';
import ZLogo from '../../../public/zlogo.png';
import NavMenu from './_component/NavMenu';
import LogoutButton from './_component/LogoutButton';
import TrendSection from './_component/TrendSection';
import FollowRecommend from './_component/FollowRecommend';
import RightSearchZone from './_component/RightSearchZone';

type Props = { children: ReactNode; modal: ReactNode };

export default function AfterLoginLayout({ children, modal }: Props) {
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link className={style.logo} href='/home'>
              <div className={style.logoPill}>
                <Image src={ZLogo} alt='z.com로고' width={40} height={40} />
              </div>
            </Link>
            <nav>
              <ul>
                {/* 브라우저 주소마다 다르게 디자인하기위해 클라이언트 컴포넌트로 분리 */}
                <NavMenu />
              </ul>
              <Link href='/compose/tweet' className={style.postButton}>
                게시하기
              </Link>
            </nav>
            {/* 훅을 쓰거나 이벤트 리스너 쓰면 클라이언트 컴포넌트로 분리하자. */}
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSection}>
            <RightSearchZone />
            <TrendSection />
            <div className={style.followRecommend}>
              <h3>팔로우 추천</h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}
