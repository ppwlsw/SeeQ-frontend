import { useNavigate } from 'react-router';
import { Hourglass } from 'lucide-react';

interface LongShopCardProps {
  img_url: string;
  name: string;
  distance: string;
  total_queue: string;
}

function LongShopCard({ img_url, name, distance, total_queue }: LongShopCardProps) {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/shop");
    };

  return (
    <div className="flex flex-col gap-2.5 border-gray-200 border-[1px] rounded-xl hover:shadow-xl transition-all pb-4" onClick={handleClick}>
      <img
        src={img_url}
        className="object-cover w-full h-48 rounded-t-xl mt-[-1px]"
      />
      <div className="flex flex-row justify-between items-center px-2.5">
        <p className="font-semibold text-lg">{name}</p>
        <div className="flex flex-row items-center text-black gap-1">
          <Hourglass width={16} height={16} />
          <p className="text-sm">คิวตอนนี้: {total_queue}</p>
        </div>
      </div>
      <p className="text-[#878787] text-sm px-2.5">ระยะห่าง: {distance} km</p>
    </div>
  );
}

export default LongShopCard;
