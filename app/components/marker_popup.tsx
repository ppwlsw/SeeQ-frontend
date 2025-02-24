import { Link } from "react-router";
import { MapPin, Users, Clock } from "lucide-react";
import { marker } from "framer-motion/m";

export interface MarkerData {
  title: string;
  address: string;
  currentQueue: number;
  imgUrl?: string;
  is_open: boolean;
}

export default function MarkerPopup({
  markerData,
}: {
  markerData: MarkerData;
}) {
  return (
    <Link to={"../"}>
      <div className="absolute bottom-5 w-11/12 sm:w-1/2 min-h-[150px] z-20 m-1 rounded-lg border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm">
        <div className="p-4">
          <div className="flex items-center gap-4">
            <div className="relative w-1/3 aspect-square">
              <div className="absolute inset-0 bg-blue-100 rounded-full animate-pulse" />
              <img
                src={markerData.imgUrl || "/api/placeholder/400/400"}
                alt={markerData.title}
                className="relative w-full h-full object-cover rounded-full ring-2 ring-blue-500 ring-offset-2"
              />
            </div>

            <div className="flex-1 space-y-3">
              <h3 className="text-lg font-bold text-blue-900 line-clamp-1 group-hover:text-blue-700 transition-colors">
                {markerData.title}
              </h3>

              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-4 h-4 text-blue-500" />
                <p className="line-clamp-2 text-sm">{markerData.address}</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-semibold text-blue-700">
                    คิวตอนนี้: {markerData.currentQueue}
                  </span>
                </div>
                {markerData.is_open ? (
                  <div className="flex items-center gap-1 bg-green-50 px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-semibold text-green-700">
                      พร้อมให้บริการ
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 bg-red-50 px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-semibold text-red-700">
                      ไม่เปิดให้บริการ
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
