import { auth } from './auth';
import { NextResponse } from 'next/server';

// 로그인 접근 권한 설정
export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect('http://localhost:3000/i/flow/login');
  }
}

// See "Matching Paths" below to learn more
export const config = {
  // 미들웨어를 적용할 페이지들
  matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
};
