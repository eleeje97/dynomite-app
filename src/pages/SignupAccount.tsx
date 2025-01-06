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
import { useRef, useState } from 'react';
import accountApi from '@/apis/accountApi.ts';

export default function SignupAccount({ showNextSignupComponent } : { showNextSignupComponent: () => void }) {
  const password = useRef(null);
  const [isValid, setIsValid] = useState({
    username: false,
    password: false,
    passwordConfirm: false,
  });

  const [inputDescription, setInputDescription] = useState({
    username: '',
    password: '',
    passwordConfirm: ''
  });

  const onUsernameBlur = (username) => {
    accountApi.validateUsername(username)
      .then((response) => {
        let description = response.data.errMsg;
        if (response.data.valid) {
          description = '';
        }
        setIsValid((prev) => ({
          ...prev,
          username: response.data.valid,
        }))
        setInputDescription((prev) => ({
          ...prev,
          username: description}));
      })
  }

  const onPasswordBlur = (password) => {
    accountApi.validatePassword(password)
      .then((response) => {
        let description = response.data.errMsg;
        if (response.data.valid) {
          description = '';
        }
        setIsValid((prev) => ({
          ...prev,
          password: response.data.valid,
        }))
        setInputDescription((prev) => ({
          ...prev,
          password: description}));
      })
  }

  const onPasswordConfirmBlur = (passwordConfirm) => {
    let isValid = false;
    let description = '비밀번호가 일치하지 않습니다.';
    if (password?.current.value == passwordConfirm) {
      isValid = true;
      description = '';
    }
    setIsValid((prev) => ({
      ...prev,
      passwordConfirm: isValid,
    }))
    setInputDescription((prev) => ({
      ...prev,
      passwordConfirm: description}));
  }

  const onNextBtnClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // onUsernameBlur(formData.get('username'));
    // onPasswordBlur(formData.get('password'));
    onPasswordConfirmBlur(formData.get('password-confirm'));
    const signUpData = {
      username: formData.get('username'),
      password: formData.get('password')
    }
    console.log(signUpData);
    console.log(isValid);

    if (isValid.username && isValid.password && isValid.passwordConfirm) {
      showNextSignupComponent();
    }
  };

  return (
    <>
    <Card className="w-5/6 max-w-xl">
      <form onSubmit={onNextBtnClick}>
        <CardHeader>
          <CardTitle className="text-xl">Welcome To Dynomite!</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="username">아이디</Label>
            <Input name="username" onBlur={(e) => onUsernameBlur(e.target.value)} />
            <Label className="text-red-600">{inputDescription.username}</Label>
          </div>
          <div className="mt-2 flex flex-col space-y-1.5">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              ref={password}
              name="password"
              type="password"
              onBlur={(e) => onPasswordBlur(e.target.value)}
            />
            <Label className="text-red-600">{inputDescription.password}</Label>
          </div>
          <div className="mt-2 flex flex-col space-y-1.5">
            <Label htmlFor="password-confirm">비밀번호 확인</Label>
            <Input
              name="password-confirm"
              type="password"
              onBlur={(e) => onPasswordConfirmBlur(e.target.value)}
            />
            <Label className="text-red-600">{inputDescription.passwordConfirm}</Label>
          </div>
    </CardContent>
    <CardFooter>
      <Button
        className="w-full"
        type="submit">
            Next
          </Button>
        </CardFooter>
      </form>
      </Card>
    </>
  );
}
