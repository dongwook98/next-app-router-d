'use client';
import { SessionProvider } from 'next-auth/react';

type Props = {
  children: React.ReactNode;
};

// useSession 사용하려면 SessionProvider 만들어야함
export default function AuthSession({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
