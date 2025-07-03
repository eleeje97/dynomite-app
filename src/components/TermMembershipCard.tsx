import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { Avatar, AvatarImage } from '@/components/ui/avatar.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Membership } from '@/interfaces/Membership.ts';
import { Progress } from '@/components/ui/progress.tsx';
import { differenceInCalendarDays, parse } from 'date-fns';

const TermMembershipCard = ({
  membership,
  isFocused,
  onClick,
}: {
  membership: Membership;
  isFocused: boolean;
  onClick: () => void;
}) => {
  const term = differenceInCalendarDays(
    parse(membership.endDate, 'yyyy.MM.dd', new Date()),
    parse(membership.startDate, 'yyyy.MM.dd', new Date()),
  );

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
      </CardHeader>
      <CardContent>
        <p className="font-bold">D-{remainDate}</p>
        <CardDescription>
          {membership.startDate + ' - ' + membership.endDate}
        </CardDescription>
        <Progress
          value={((term - remainDate) / term) * 100}
          className="mt-3"
        />
      </CardContent>
      <CardFooter className={`${isFocused ? '' : 'hidden'}`}>
        <Button className="w-full">사용하기</Button>
      </CardFooter>
    </Card>
  );
};

export default TermMembershipCard;
