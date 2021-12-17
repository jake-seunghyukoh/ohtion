import { ReactNode } from 'react';

export function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <>Default Layout</>
      {children}
    </div>
  );
}

export default HomeLayout;
