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
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group.tsx';

export default function SignupInfo() {
  const [date, setDate] = useState<Date>();

  return (
    <>
      <Card className="w-5/6 max-w-xl">
        <CardHeader>
          <CardTitle className="text-xl">Welcome To Dynomite!</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
              <div className="mt-2 flex flex-col space-y-1.5">
                <Label htmlFor="name">이름</Label>
                <Input id="name" />
              </div>
              <div className="mt-2 flex flex-col space-y-1.5">
                <Label htmlFor="nickname">닉네임</Label>
                <Input id="nickname" />
              </div>
              <div className="mt-2 flex flex-col space-y-1.5">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  type="email"
                />
              </div>
              <div className="mt-2 flex flex-col space-y-1.5">
                <Label htmlFor="phone">휴대폰 번호</Label>
                <Input id="phone" />
              </div>
              <div className="mt-2 flex flex-col space-y-1.5">
                <Label htmlFor="gender">성별</Label>
                <ToggleGroup id="gender" defaultValue="male" type="single">
                  <ToggleGroupItem variant="outline" className="w-1/2" value="male">남</ToggleGroupItem>
                  <ToggleGroupItem variant="outline" className="w-1/2" value="female">여</ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="mt-2 flex flex-col space-y-1.5">
                <Label htmlFor="birthdate">생년월일</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'outline'}
                      className="text-muted-foreground"
                      id='birthdate'
                    >
                      <CalendarIcon />
                      {date ? format(date, 'PPP') : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Sign Up</Button>
        </CardFooter>
      </Card>
    </>
  );
}
