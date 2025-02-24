import { Outlet } from "react-router";
import { AlignJustify } from "lucide-react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import SidebarMenu from "~/components/sidebar-menu";

function TransparentNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    return (
        <div className="relative">
            <Outlet />
            <nav
                className={`fixed top-0 left-0 w-full bg-transparent flex flex-row justify-between items-center px-2 h-[10.4vh] z-30 transition-transform duration-300`}
            >
                <div className="text-white">
                    <AlignJustify width={20} height={20} onClick={toggleMenu} />
                </div>

                <div className="text-white text-2xl font-bold">
                    <Link to="/homepage" prefetch="intent">SeeQ</Link>
                </div>

                <div className="rounded-full bg-zinc-600 w-[47px] h-[47px]"></div>
            </nav>

            {isMenuOpen && <SidebarMenu onClose={toggleMenu} />}
        </div>
    );
}

export default TransparentNav;
