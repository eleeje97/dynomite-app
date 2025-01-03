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

export default function SignupAccount({ onNextBtnClick } : { onNextBtnClick: () => void }) {
  return (
    <>
      <Card className="w-5/6 max-w-xl">
        <CardHeader>
          <CardTitle className="text-xl">Welcome To Dynomite!</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input id="username" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password-confirm">Confirm Password</Label>
                <Input
                  id="password-confirm"
                  type="password"
                />
              </div>
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
