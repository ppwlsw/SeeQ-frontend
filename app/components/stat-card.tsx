import { Users } from "lucide-react";

function StatCard() {
  return (
    <div className="flex flex-row px-4 py-5 gap-5 bg-white rounded-lg h-fit w-fit shadow-md">
      <div className="w-14 h-14 rounded-full bg-[#C8C3F4] flex justify-center items-center">
        <Users />
      </div>
      <div className="flex flex-col">
        <div className="text-[#718EBF] text-lg">Today Customers</div>
        <div className="text-[#2D2D2D] text-xl font-bold">9128</div>
      </div>
    </div>
  );
}

export default StatCard;
