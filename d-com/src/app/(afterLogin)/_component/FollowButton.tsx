'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';
import style from './followButton.module.css';
import Modal from './Modal';

export default function FollowButton() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  console.log(session);

  const onFollow = () => {
    // 로그인하지않았을때
    if (!session?.user) {
      setIsOpen(true);
      console.log('로그인 모달 실행');
    }
  };
  return (
    <>
      <button className={style.followButton} onClick={onFollow}>
        팔로우
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
}
