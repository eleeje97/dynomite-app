import { Label } from "@/components/ui/label";

export default function Home() {
  return (
      <>
      <div className="mt-24">
        <h1 className="text-3xl font-semibold text-gray-800">Dynomite</h1>
        <p className="text-gray-600 mt-2">오늘도 멋지게 다이노해볼까요? 🦕🧨</p>
      </div>

      <div className="mt-36 flex flex-col items-center content-center">
        <Label className="text-5xl font-bold">여기는 Home 화면입니다 :D</Label>
      </div>
      </>
  )
}