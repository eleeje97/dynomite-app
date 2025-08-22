import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs.tsx';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Calendar } from '@/components/ui/calendar.tsx';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';

const RegisterMembership = () => {
  const [startDateCalendarOpen, setStartDateCalendarOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);

  const [endDateCalendarOpen, setEndDateCalendarOpen] = useState(false);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="text-center mt-7">
          <h1 className="text-3xl font-semibold text-gray-800">회원권 추가</h1>
        </div>

        <div className="mt-7 grid w-5/6 max-w-sm items-center gap-5">
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="climb_gym">암장 검색</Label>
            <Input
              type="text"
              id="climb_gym"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="climb_gym">회원권 선택</Label>
            <Tabs
              defaultValue="pass"
              className="w-full"
            >
              <TabsList className="w-full">
                <TabsTrigger
                  className="w-full"
                  value="pass"
                >
                  횟수권
                </TabsTrigger>
                <TabsTrigger
                  className="w-full"
                  value="term"
                >
                  기간권
                </TabsTrigger>
              </TabsList>
              <TabsContent value="pass">
                <div className="mt-5 grid w-full max-w-sm items-center gap-3">
                  <Label htmlFor="total_count">횟수</Label>
                  <Input
                    type="number"
                    id="total_count"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="climb_gym">이용기간</Label>
            <div className="flex justify-between">
              <Popover
                open={startDateCalendarOpen}
                onOpenChange={setStartDateCalendarOpen}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date"
                    className="w-40 justify-between font-normal"
                  >
                    {startDate ? startDate.toLocaleDateString() : 'Select date'}
                    <CalendarIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={startDate}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      setStartDate(date);
                      setStartDateCalendarOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
              -
              <Popover
                open={endDateCalendarOpen}
                onOpenChange={setEndDateCalendarOpen}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date"
                    className="w-40 justify-between font-normal"
                  >
                    {endDate ? endDate.toLocaleDateString() : 'Select date'}
                    <CalendarIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={endDate}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      setEndDate(date);
                      setEndDateCalendarOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <Button className="mt-5">등록</Button>
        </div>
      </div>
    </>
  );
};

export default RegisterMembership;
