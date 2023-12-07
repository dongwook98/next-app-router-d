'use client';

// import { redirect } from 'next/navigation'; // 서버 리다이렉트
import { useRouter } from 'next/navigation'; // 클라이언트 리다이렉트
import Main from '../_component/Main';

export default function Login() {
  const router = useRouter();
  router.replace('/i/flow/login');
  return <Main />;
}
