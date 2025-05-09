import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {children}
    </div>
  );
};

export default MainLayout;
