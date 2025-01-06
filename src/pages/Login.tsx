import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import supabase from '@/lib/supabase.ts';

export default function Login() {
  const navigate = useNavigate();

  const onSignInBtnClick = () => {
    localStorage.setItem('accessToken', 'ACCESS_TOKEN');
    navigate('/');
  };

  const onSignUpBtnClick = () => {
    navigate('/signup');
  };

  const onKakaoLoginBtnClick = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: 'http://localhost:5173/',
      },
    });
  };

  return (
    <>
      <div className="flex flex-col items-center content-center">
        <div className="mt-24 text-center">
          <h1 className="text-3xl font-semibold text-gray-800">Dynomite</h1>
          <p className="text-gray-600 mt-2">
            오늘도 멋지게 다이노해볼까요? 🦕🧨
          </p>
        </div>

        {/*소셜로그인 버튼*/}
        <div className="mt-10 mb-5 w-4/5 max-w-xl m-1">
          <Button
            variant="outline"
            className="w-full max-w-xl m-1"
          >
            <FaGithub /> Login with GitHub
          </Button>
          <Button
            variant="outline"
            className="w-full max-w-xl m-1"
          >
            <FcGoogle /> Login with Google
          </Button>
          <Button
            variant="outline"
            className="w-full max-w-xl m-1"
            onClick={onKakaoLoginBtnClick}
          >
            <RiKakaoTalkFill /> Login with Kakao
          </Button>
        </div>

        {/*구분선*/}
        <div className="flex items-center w-4/5 max-w-xl m-1">
          <div className="flex-grow border-t border-border"></div>
          <span className="px-2 text-sm text-muted-foreground">
            Or Continue With
          </span>
          <div className="flex-grow border-t border-border"></div>
        </div>

        {/*자체로그인*/}
        <div className="mt-3 w-4/5 max-w-xl m-1">
          <Input
            type="text"
            placeholder="username"
            className="w-full max-w-xl m-1"
          ></Input>
          <Input
            type="password"
            placeholder="password"
            className="w-full max-w-xl m-1"
          ></Input>
          <Button
            className="w-full max-w-xl m-1 shadow-lg"
            onClick={onSignInBtnClick}
          >
            Login
          </Button>
          {/*회원가입*/}
          <div className="flex-row text-center">
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
    </>
  );
}
