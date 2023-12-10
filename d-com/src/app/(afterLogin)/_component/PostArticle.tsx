'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import style from './post.module.css';

type Props = {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
};

export default function PostArticle({ children, post }: Props) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };
  return (
    // 이벤트캡처링으로 이름 클릭해도 상세 페이지로 안가게함
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  );
}
