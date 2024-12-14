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

export default function SignupInfo() {
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
                <Label htmlFor="name">Name</Label>
                <Input id="name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="nickname">Nickname</Label>
                <Input id="nickname" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="gender">Gender</Label>
                <Input id="gender" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="birthdate">Date of Birth</Label>
                <Button variant="outline">
                  <span>Pick a date</span>
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </div>
              {/*<FormLabel>Date of birth</FormLabel>*/}
              {/*<Popover>*/}
              {/*  <PopoverTrigger asChild>*/}
              {/*    <FormControl>*/}
              {/*      <Button*/}
              {/*        variant={'outline'}*/}
              {/*        className={cn(*/}
              {/*          'w-[240px] pl-3 text-left font-normal',*/}
              {/*          !field.value && 'text-muted-foreground',*/}
              {/*        )}*/}
              {/*      >*/}
              {/*        {field.value ? (*/}
              {/*          format(field.value, 'PPP')*/}
              {/*        ) : (*/}
              {/*          <span>Pick a date</span>*/}
              {/*        )}*/}
              {/*        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />*/}
              {/*      </Button>*/}
              {/*    </FormControl>*/}
              {/*  </PopoverTrigger>*/}
              {/*  <PopoverContent*/}
              {/*    className="w-auto p-0"*/}
              {/*    align="start"*/}
              {/*  >*/}
              {/*    <Calendar*/}
              {/*      mode="single"*/}
              {/*      selected={field.value}*/}
              {/*      onSelect={field.onChange}*/}
              {/*      disabled={(date) =>*/}
              {/*        date > new Date() || date < new Date('1900-01-01')*/}
              {/*      }*/}
              {/*      initialFocus*/}
              {/*    />*/}
              {/*  </PopoverContent>*/}
              {/*</Popover>*/}
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
