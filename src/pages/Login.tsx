import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { Separator } from '@/components/ui/separator.tsx';
import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';

export default function Login() {
  const navigate = useNavigate();

  const onSignInBtnClick = () => {
    localStorage.setItem('accessToken', 'ACCESS_TOKEN');
    navigate('/');
  };

  const onSignUpBtnClick = () => {
    navigate('/signup');
  };

  return (
    <div className="flex flex-col items-center content-center">
      <div className="mt-24 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">Dynomite</h1>
        <p className="text-gray-600 mt-2">오늘도 멋지게 다이노해볼까요? 🦕🧨</p>
      </div>

      <div className="m-10">
        <Button
          variant="outline"
          className="w-11/12 max-w-xl m-1"
        >
          <FaGithub /> Login with GitHub
        </Button>
        <Button
          variant="outline"
          className="w-11/12 max-w-xl m-1"
        >
          <FcGoogle /> Login with Google
        </Button>
        <Button
          variant="outline"
          className="w-11/12 max-w-xl m-1"
        >
          <RiKakaoTalkFill /> Login with Kakao
        </Button>
      </div>

      <Separator className="w-11/12 max-w-xl m-1" />

      <div className="m-10">
        <Input
          type="text"
          placeholder="username"
          className="w-11/12 max-w-xl m-1"
        ></Input>
        <Input
          type="password"
          placeholder="password"
          className="w-11/12 max-w-xl m-1"
        ></Input>
        <Button
          className="w-11/12 max-w-xl shadow-lg m-1"
          onClick={onSignInBtnClick}
        >
          Login
        </Button>
        <div className="flex-row">
          <Label>아직 회원이 아니신가요?</Label>
          <Button
            className="font-semibold"
            variant="link"
            onClick={onSignUpBtnClick}
          >
            회원가입하기
          </Button>
        </div>
      </div>
    </div>
  );
}
