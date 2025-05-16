import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar.tsx';
import { Label } from '@/components/ui/label.tsx';

export default function Home() {
  const navigate = useNavigate();
  const memberships = [
    {
      id: 1,
      climb_gym_name: 'The Climb',
      climb_gym_logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmSwHSGD-USONTQVP12_ev6S4WUXriCTfeQg&s',
      start_date: '2025-05-08',
      end_date: '2026-05-07',
      remaining_usage_count: 9,
      status: 'ACTIVE',
    },
    {
      id: 2,
      climb_gym_name: '서울숲 클라이밍',
      climb_gym_logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8fGBa22PEs7vRJ3mjmBg1N3YMDE9nrGcMZQ&s',
      start_date: '2025-05-17',
      end_date: '2026-05-16',
      remaining_usage_count: -1,
      status: 'ACTIVE',
    },
    {
      id: 3,
      climb_gym_name: 'Peakers',
      climb_gym_logo:
        'https://blog.kakaocdn.net/dn/cwCDkM/btrp6RLfVlY/eLJE8qH0G6OWeNZbPfAsf1/img.png',
      start_date: '2025-05-17',
      end_date: '2026-05-16',
      remaining_usage_count: 2,
      status: 'ACTIVE',
    },
    {
      id: 4,
      climb_gym_name: 'The Climb',
      climb_gym_logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmSwHSGD-USONTQVP12_ev6S4WUXriCTfeQg&s',
      start_date: '2025-05-08',
      end_date: '2026-05-07',
      remaining_usage_count: -1,
      status: 'ACTIVE',
    },
    {
      id: 5,
      climb_gym_name: 'The Climb',
      climb_gym_logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmSwHSGD-USONTQVP12_ev6S4WUXriCTfeQg&s',
      start_date: '2025-05-08',
      end_date: '2026-05-07',
      remaining_usage_count: -1,
      status: 'ACTIVE',
    },
    {
      id: 6,
      climb_gym_name: 'The Climb',
      climb_gym_logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmSwHSGD-USONTQVP12_ev6S4WUXriCTfeQg&s',
      start_date: '2025-05-08',
      end_date: '2026-05-07',
      remaining_usage_count: 10,
      status: 'ACTIVE',
    },
  ];

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [navigate]);

  const onLogoutBtnClick = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <div className="flex flex-col items-center content-center justify-center">
        <div className="text-center">
          <h1 className="mt-7 text-3xl font-semibold text-gray-800">🦕</h1>
        </div>

        <div className="mt-12 w-5/6 max-w-96">
          {memberships.map((value) => (
            <Card className="mb-2.5">
              <CardHeader className="flex flex-row">
                <Avatar>
                  <AvatarImage src={value.climb_gym_logo} />
                </Avatar>
                <CardTitle className="ml-5 text-lg">
                  {value.climb_gym_name}
                </CardTitle>
                <div
                  className={`ml-auto items-end ${value.remaining_usage_count == -1 ? 'hidden' : ''}`}
                >
                  <Label className="text-3xl">
                    {value.remaining_usage_count}
                  </Label>
                  <Label className="text-lg">&nbsp;회</Label>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-bold">D-82</p>
                <CardDescription>
                  {value.start_date + ' ~ ' + value.end_date}
                </CardDescription>
              </CardContent>
              <CardFooter className="hidden">
                <Button className="w-full">사용하기</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="m-5 text-center">
          <Button
            variant="destructive"
            className="h-10 shadow-lg m-1"
            onClick={onLogoutBtnClick}
          >
            Logout
          </Button>
        </div>
      </div>
    </>
  );
}
