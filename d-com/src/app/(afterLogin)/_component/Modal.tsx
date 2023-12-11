'use client';

import style from './modal.module.css';
import Link from 'next/link';

export default function Modal({ setIsOpen }) {
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={style.modalBackGround}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <button className={style.closeButton} onClick={onClose}>
            <svg
              width={24}
              viewBox='0 0 24 24'
              aria-hidden='true'
              className='r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03'
            >
              <g>
                <path d='M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z'></path>
              </g>
            </svg>
          </button>
        </div>
        <div className={style.modalBody}>
          <div className={style.icon}>
            <svg
              viewBox='0 0 24 24'
              aria-hidden='true'
              className='r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-h3s6tt r-rwqe4o r-1cvl2hr'
            >
              <g>
                <path d='M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zm13 4v3h2v-3h3V8h-3V5h-2v3h-3v2h3zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46z'></path>
              </g>
            </svg>
          </div>
          <div className={style.text}>
            <div>Elon Musk 님을 팔로우하고 X에서 공유하는 메시지를 확인하세요.</div>
            <div>X에 가입하여 이 사용자의 게시물을 모두 확인하세요.</div>
          </div>
          <div className={style.buttons}>
            <Link href='/i/flow/login'>로그인</Link>
            <Link href='/i/flow/signup'>회원가입</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
