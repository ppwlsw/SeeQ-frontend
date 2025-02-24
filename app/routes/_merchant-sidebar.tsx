import { Outlet, Link, useLocation } from "react-router";
import { ChartSpline, UsersRound, Pencil, Bell } from "lucide-react";
import { SidebarItem } from "~/components/merchant-sidebar-item";

const MerchantNav = () => {
  const location = useLocation();

  // Function to get the current page title based on pathname
  const getCurrentPageTitle = () => {
    switch (location.pathname) {
      case "/merchant/dashboard":
        return "ภาพรวมร้านค้า";
      case "/merchant/queue":
        return "จัดการคิว";
      case "/merchant/store-management":
        return "จัดการร้านค้า";
      default:
        return "ภาพรวมร้านค้า";
    }
  };

  return (
    <div className="flex flex-row h-screen">
      {/* Sidebar */}
      <nav className="w-64 border-r border-gray-200 flex flex-col">
        <section
          id="header"
          className="h-fit flex flex-row items-center p-4 border-b-[1px] border-gray-200"
        >
          <iframe src="../../public/merchant-logo.svg" className="w-11 h-10" />
          <div className="text-xl font-bold">SeeQ-Merchant</div>
        </section>
        <section id="items" className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-8">
            <label htmlFor="dashboard-items">
              <h1 className="mx-4 mt-8 font-bold text-gray-500">Home</h1>
            </label>
            <SidebarItem
              icon={<ChartSpline className="w-5 h-5" />}
              label="ภาพรวมร้านค้า"
              path="/merchant/dashboard"
            />
            <SidebarItem
              icon={<UsersRound className="w-5 h-5" />}
              label="จัดการคิว"
              path="/merchant/queue"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="manage-store">
              <h1 className="mx-2 mt-4 p-4 font-bold text-gray-500 border-b-[1px] border-gray-200 mb-4">
                Setting
              </h1>
            </label>
            <SidebarItem
              icon={<Pencil className="w-5 h-5" />}
              label="จัดการร้านค้า"
              path="/merchant/store-management"
            />
          </div>
        </section>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="border-b border-gray-200 px-6 py-3 flex items-center justify-between bg-white">
          <h1 className="text-xl font-semibold">{getCurrentPageTitle()}</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center border-[1px] overflow-hidden">
                <img
                  src="../public/teenoi.png"
                  className="object-cover w-full h-full "
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">
                  สุกี้ตี๋น้อย สาขาพหลโยธิน 19
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-gray-50 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MerchantNav;
