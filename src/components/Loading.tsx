import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress.tsx';
import DynomiteIcon from '@/assets/dynomite-icon.png';

const Loading = ({ done }: { done: boolean }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (done) return 100;
        if (prev < 90) return prev + 1;
        return prev;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [done]);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <img
          src={DynomiteIcon}
          alt="Dynomite Logo"
          width={200}
          className="rounded-3xl"
        />
        <Progress
          value={progress}
          className="w-[60%] mt-16"
        />
      </div>
    </>
  );
};

export default Loading;
