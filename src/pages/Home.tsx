import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TermMembershipCard from '@/components/TermMembershipCard.tsx';
import PassMembershipCard from '@/components/PassMembershipCard.tsx';

export default function Home() {
  const navigate = useNavigate();
  const memberships = [
    {
      id: 1,
      climbGymName: 'The Climb',
      climbGymLogo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmSwHSGD-USONTQVP12_ev6S4WUXriCTfeQg&s',
      startDate: '2025.05.08',
      endDate: '2026.05.07',
      totalCount: 10,
      useCount: 1,
      status: 'ACTIVE',
    },
    {
      id: 2,
      climbGymName: '서울숲 클라이밍',
      climbGymLogo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8fGBa22PEs7vRJ3mjmBg1N3YMDE9nrGcMZQ&s',
      startDate: '2025.07.01',
      endDate: '2025.07.05',
      totalCount: -1,
      useCount: 9,
      status: 'ACTIVE',
    },
    {
      id: 3,
      climbGymName: 'Peakers',
      climbGymLogo:
        'https://blog.kakaocdn.net/dn/cwCDkM/btrp6RLfVlY/eLJE8qH0G6OWeNZbPfAsf1/img.png',
      startDate: '2025.05.17',
      endDate: '2026.05.16',
      totalCount: 10,
      useCount: 8,
      status: 'ACTIVE',
    },
    {
      id: 4,
      climbGymName: 'The Climb',
      climbGymLogo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmSwHSGD-USONTQVP12_ev6S4WUXriCTfeQg&s',
      startDate: '2025.05.08',
      endDate: '2026.05.07',
      totalCount: -1,
      useCount: 3,
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

  const [focusId, setFocusId] = useState(-1);

  return (
    <>
      <div className="flex flex-col items-center content-center justify-center">
        <div className="text-center">
          <h1 className="mt-7 text-3xl font-semibold text-gray-800">🦕</h1>
        </div>

        <div className="mt-12 w-5/6 max-w-96">
          {memberships.map((value) =>
            value.totalCount == -1 ? (
              <TermMembershipCard
                key={value.id}
                membership={value}
                isFocused={focusId === value.id}
                onClick={() => setFocusId(value.id)}
              />
            ) : (
              <PassMembershipCard
                key={value.id}
                membership={value}
                isFocused={focusId === value.id}
                onClick={() => setFocusId(value.id)}
              />
            ),
          )}
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
