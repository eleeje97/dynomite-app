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

const PassMembershipCard = ({
  membership,
  isFocused,
  onClick,
}: {
  membership: Membership;
  isFocused: boolean;
  onClick: () => void;
}) => {
  return (
    <Card
      className="mb-2.5"
      onClick={onClick}
    >
      <CardHeader className="flex flex-row">
        <Avatar>
          <AvatarImage src={membership.climb_gym_logo} />
        </Avatar>
        <CardTitle className="ml-5 text-lg">
          {membership.climb_gym_name}
        </CardTitle>
        <div className={'ml-auto items-end'}>
          <Label className="text-3xl">{membership.remaining_usage_count}</Label>
          <Label className="text-lg">&nbsp;회</Label>
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-bold">D-82</p>
        <CardDescription>
          {membership.start_date + ' ~ ' + membership.end_date}
        </CardDescription>
      </CardContent>
      <CardFooter className={`${isFocused ? '' : 'hidden'}`}>
        <Button className="w-full">사용하기</Button>
      </CardFooter>
    </Card>
  );
};

export default PassMembershipCard;
