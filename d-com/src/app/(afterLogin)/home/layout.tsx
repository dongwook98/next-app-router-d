import { ReactNode } from 'react';

// Home만의 레이아웃
export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      홈 레이아웃
      {children}
    </div>
  );
}

// RootLayout -> HomeLayout -> Home
