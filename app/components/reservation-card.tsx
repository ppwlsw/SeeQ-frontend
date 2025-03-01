import { MapPin, Phone } from "lucide-react";

interface ReservationCardProps {
  id: number;
  name: string;
  time: string;
  date: string;
  table: string;
  capacity: string;
  status: string;
  phone: string;
}

function ReservationCard({ reservation } : { reservation: ReservationCardProps }) {
  // Destructure reservation data with defaults
  const {
    name = "Preshit Pimple",
    time = "10:30AM",
    date = "Today",
    table = "Table A",
    capacity = "6-8 Persons",
    status = "Completed",
    phone = "088-888-8888",
  } = reservation || {};

  // Status styling logic
  const getStatusStyles = (status : string) => {
    switch (status) {
      case "Completed":
        return "bg-[#DAFFD9] text-[#33D117]";
      case "Waiting":
        return "bg-[#FFE9D9] text-[#FF8A00]";
      case "Seated":
        return "bg-[#D9EAFF] text-[#2D60FF]";
      default:
        return "bg-[#DAFFD9] text-[#33D117]";
    }
  };

  return (
    <div className="flex flex-col w-[38vh] h-[24vh] rounded-lg border-gray-200 border-[1px] p-4 justify-between bg-white">
      <section
        id="upper-section"
        className="border-b-[1px] border-gray-200 flex flex-col h-2/3"
      >
        <div className="flex flex-row justify-between items-center">
          <div className="font-bold">
            {table} ({capacity})
          </div>
          <div
            className={`px-4 py-2 rounded-md text-xs font-bold ${getStatusStyles(
              status
            )}`}
          >
            {status}
          </div>
        </div>
        <div className="flex flex-col my-7">
          <div className="text-2xl font-bold overflow-ellipsis">{name}</div>
          <div className="text-[#718EBF] text-sm font-semibold">
            {time} | {date}
          </div>
        </div>
      </section>
      {/* //================= Lower Section ================= */}
      <section id="lower-section" className="">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <MapPin />
            <div className="flex flex-col">
              <p>Telephone</p>
              <p>{phone}</p>
            </div>
          </div>
          <div className="bg-[#2D60FF] p-2 rounded-full">
            <Phone className="text-white" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReservationCard;
