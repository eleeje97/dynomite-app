import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      navigate('/login');
    }
  }, []);

  const onLogoutBtnClick = () => {
    localStorage.removeItem('accessToken');
    navigate('/login');
  };

  return (
    <>
      <div className="mt-24 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">Dynomite</h1>
        <p className="text-gray-600 mt-2">오늘도 멋지게 다이노해볼까요? 🦕🧨</p>
      </div>

      <div className="mt-36 flex flex-col items-center content-center">
        <Label className="text-3xl font-bold">여기는 Home 화면입니다 :D</Label>
      </div>

      <div className="mt-24 text-center">
        <Button
          className="h-10 shadow-lg m-1"
          onClick={onLogoutBtnClick}
        >
          Logout
        </Button>
      </div>
    </>
  );
}
