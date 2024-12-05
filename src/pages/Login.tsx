import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-24">
        <h1 className="text-3xl font-semibold text-gray-800">Dynomite</h1>
        <p className="text-gray-600 mt-2">오늘도 멋지게 다이노해볼까요? 🦕🧨</p>
      </div>

      <div className="mt-36 flex flex-col items-center content-center">
        <Input
          type="text"
          placeholder="username"
          className="w-11/12 max-w-xl h-10 m-1"
        ></Input>
        <Input
          type="password"
          placeholder="password"
          className="w-11/12 max-w-xl h-10 m-1"
        ></Input>
        <Button
            className="w-11/12 max-w-xl h-10
                text-lg shadow-lg m-1
                bg-blue-600 hover:bg-blue-500 active:bg-blue-700"
            onClick={() => navigate("/")}>
            Sign In
          </Button>
        <div className="flex-row">
          <Label>아직 회원이 아니신가요?</Label>
          <Button className="font-semibold text-blue-700" variant="link" onClick={() => alert("아직 안했지롱~")}>
            회원가입하기
          </Button>
        </div>
      </div>
    </>
  );
}
