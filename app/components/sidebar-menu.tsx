import { Link, useLocation } from "react-router";
import GapController from "./gap-control";
import {
  House,
  ScanQrCode,
  Map,
  User,
  Store,
  type LucideIcon,
} from "lucide-react";
import { useEffect } from "react";

interface SidebarMenuProps {
  onClose: () => void;
}

interface SidebarItemProps {
  icon: LucideIcon;
  gap: number;
  y_axis: boolean;
  width: number;
  height: number;
  text: string;
  path: string;
  currentPath: string;
}

function SidebarItem({
  icon: Icon,
  gap,
  y_axis,
  width,
  height,
  text,
  path,
  currentPath,
}: SidebarItemProps) {
  const isCurrentPage = currentPath.startsWith(path);

  return (
    <Link to={path} prefetch="viewport">
      <div
        className={`p-2 cursor-pointer rounded-md ${
          isCurrentPage
            ? "bg-white text-black"
            : "bg-transparent text-white hover:bg-gray-700"
        }`}
      >
        <GapController gap={gap} y_axis={y_axis}>
          <Icon width={width} height={height} />
          <h1>{text}</h1>
        </GapController>
      </div>
    </Link>
  );
}

function SidebarMenu({ onClose }: SidebarMenuProps) {
  const currentPath = useLocation().pathname;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      aria-hidden="true"
    >
      <div
        className="fixed left-0 top-0 h-screen max-w-[56.8vw] w-[300px] bg-primary-dark shadow-lg z-50 p-5 flex flex-col transition-transform duration-300 ease-in-out py-8 px-2.5"
        onClick={(e) => e.stopPropagation()}
        aria-label="Sidebar navigation"
      >
        <div className="p-2 flex items-center gap-3">
          <img src="/logo.svg" alt="logo" className="w-6 h-6" />
          <h1 className="text-white font-semibold text-lg">SeeQ</h1>
        </div>

        <div className="mt-6 space-y-2 text-white">
          <SidebarItem
            icon={House}
            gap={16}
            y_axis={false}
            width={20}
            height={20}
            text="Home"
            path="/homepage"
            currentPath={currentPath}
          />
          <SidebarItem
            icon={ScanQrCode}
            gap={16}
            y_axis={false}
            width={20}
            height={20}
            text="Scan QR"
            path="/scan"
            currentPath={currentPath}
          />
          <SidebarItem
            icon={Map}
            gap={16}
            y_axis={false}
            width={20}
            height={20}
            text="Map"
            path="/map"
            currentPath={currentPath}
          />
          <SidebarItem
            icon={User}
            gap={16}
            y_axis={false}
            width={20}
            height={20}
            text="Profile"
            path="/profile"
            currentPath={currentPath}
          />
        </div>

        <div className="h-full flex flex-col-reverse">
          <SidebarItem
            icon={Store}
            gap={16}
            y_axis={false}
            width={20}
            height={20}
            text="Become Merchant"
            path="/#"
            currentPath={currentPath}
          />
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
