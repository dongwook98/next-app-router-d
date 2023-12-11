'use client';

import { useSession } from 'next-auth/react';
// import { redirect } from 'next/navigation'; // 서버 리다이렉트
import { useRouter } from 'next/navigation'; // 클라이언트 리다이렉트
import { useEffect } from 'react';
import Main from '../_component/Main';

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    router.replace('/i/flow/login');
  }, []);

  if (session?.user) {
    router.replace('/home');
    return null;
  }

  return <Main />;
}
