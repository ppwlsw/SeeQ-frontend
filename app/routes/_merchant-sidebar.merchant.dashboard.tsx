import ReservationCard from "../components/reservation-card";
import StatCard from "~/components/stat-card";

function DashboardPage() {
  return (
    <div className="flex flex-col h-[100vh] gap-10">
      <div className="grid grid-cols-4 gap-7 items-center justify-center">
        <StatCard />
        <StatCard />
        <StatCard />
        <StatCard />
      </div>

      <div className="flex flex-col bg-white w-fit rounded-lg p-4 shadow-md">
        <div className="flex flex-row justify-between p-4">
          <h1 className="text-2xl font-bold text-blue-900">All Queues</h1>
          <a className="text-black rounded-lg underline cursor-pointer">View All</a>
        </div>
        {/* Scrollable Section */}
        <div className="flex flex-col rounded-lg p-4 gap-6 overflow-y-auto max-h-[60vh]">
          <ReservationCard />
          <ReservationCard />
          <ReservationCard />
          <ReservationCard />
          <ReservationCard />
          <ReservationCard />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
