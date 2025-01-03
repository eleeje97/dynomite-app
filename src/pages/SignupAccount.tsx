import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Input } from '@/components/ui/input.tsx';
import { useState } from 'react';

export default function SignupAccount({ onNextBtnClick } : { onNextBtnClick: () => void }) {
  const inputDescriptionExample = {
    username: '이미 존재하는 아이디입니다.',
    password: '특수문자를 1자 이상 포함해야 합니다.',
    passwordConfirm: '비밀번호가 일치하지 않습니다.'};
  const [inputDescription, setInputDescription] = useState({username: '', password: '', passwordConfirm: ''});

  const onUsernameChange = () => {
    setInputDescription(inputDescriptionExample);
  };

  return (
    <>
      <Card className="w-5/6 max-w-xl">
        <CardHeader>
          <CardTitle className="text-xl">Welcome To Dynomite!</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">아이디</Label>
              <Input id="username" onChange={onUsernameChange} />
              <Label className="text-red-600">{inputDescription.username}</Label>
            </div>
            <div className="mt-2 flex flex-col space-y-1.5">
              <Label htmlFor="password">비밀번호</Label>
              <Input
                id="password"
                type="password"
              />
              <Label className="text-red-600">{inputDescription.password}</Label>
            </div>
            <div className="mt-2 flex flex-col space-y-1.5">
              <Label htmlFor="password-confirm">비밀번호 확인</Label>
              <Input
                id="password-confirm"
                type="password"
              />
              <Label className="text-red-600">{inputDescription.passwordConfirm}</Label>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={onNextBtnClick}
          >
            Next
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
