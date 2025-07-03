import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { Avatar, AvatarImage } from '@/components/ui/avatar.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Membership } from '@/interfaces/Membership.ts';
import { differenceInCalendarDays, parse } from 'date-fns';

const PassMembershipCard = ({
  membership,
  isFocused,
  onClick,
}: {
  membership: Membership;
  isFocused: boolean;
  onClick: () => void;
}) => {
  const remainDate = differenceInCalendarDays(
    parse(membership.endDate, 'yyyy.MM.dd', new Date()),
    new Date(),
  );

  return (
    <Card
      className="mb-2.5"
      onClick={onClick}
    >
      <CardHeader className="flex flex-row">
        <Avatar>
          <AvatarImage src={membership.climbGymLogo} />
        </Avatar>
        <CardTitle className="ml-5 text-lg">
          {membership.climbGymName}
        </CardTitle>
        <div className={'ml-auto items-end'}>
          <Label className="text-3xl">
            {membership.totalCount - membership.useCount}
          </Label>
          <Label className="text-lg">&nbsp;회</Label>
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-bold">D-{remainDate}</p>
        <CardDescription>
          {membership.startDate + ' - ' + membership.endDate}
        </CardDescription>
      </CardContent>
      <CardFooter className={`${isFocused ? '' : 'hidden'}`}>
        <Button className="w-full">사용하기</Button>
      </CardFooter>
    </Card>
  );
};

export default PassMembershipCard;
