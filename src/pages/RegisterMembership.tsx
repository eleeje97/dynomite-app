import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label.tsx';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs.tsx';

const RegisterMembership = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="text-center mt-7">
          <h1 className="text-3xl font-semibold text-gray-800">회원권 추가</h1>
        </div>

        <div className="mt-7 grid w-full max-w-sm items-center gap-5">
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
              <TabsContent value="term">
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
        </div>
      </div>
    </>
  );
};

export default RegisterMembership;
