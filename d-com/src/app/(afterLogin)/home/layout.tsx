// Home만의 레이아웃
export default function HomeLayout({ children }) {
  return (
    <div>
      홈 레이아웃
      {children}
    </div>
  );
}

// RootLayout -> HomeLayout -> Home
