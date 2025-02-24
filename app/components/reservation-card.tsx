import { MapPin, Phone } from "lucide-react";

function ReservationCard() {
  return (
    <div className="flex flex-col w-[38vh] h-[24vh] rounded-lg border-gray-200 border-[1px] p-4 justify-between bg-white">
      <section
        id="upper-section"
        className="border-b-[1px] border-gray-200 flex flex-col  h-2/3"
      >
        <div className="flex flex-row justify-between items-center">
          <div className="font-bold">Table A (6-8 Persons)</div>
          <div className="px-4 py-2 rounded-md bg-[#DAFFD9] text-[#33D117] text-xs font-bold">
            Completed
          </div>
        </div>

        <div className="flex flex-col my-7">
          <div className="text-2xl font-bold overflow-ellipsis">Preshit Pimple</div>
          <div className="text-[#718EBF] text-sm font-semibold">
            10:30AM| Today
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
              <p>088-888-8888</p>
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
