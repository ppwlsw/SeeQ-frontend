import { Link, Outlet } from 'react-router';
import { AlignJustify } from 'lucide-react';
import { useState } from 'react';
import SidebarMenu from '~/components/sidebar-menu';

function Nav(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    return <div className='flex flex-col'>
            <nav className='flex flex-row bg-primary-dark justify-between items-center px-2 h-[10.4vh]'>
                <div className='text-white' onClick={toggleMenu}>
                    <AlignJustify width={20} height={20}></AlignJustify>
                </div>

                <div className='text-white text-2xl font-bold'>
                    <Link to="/homepage" prefetch="intent">SeeQ</Link>
                </div>

                <div className='rounded-full bg-zinc-600 w-[47px] h-[47px]'>
                </div>
            </nav>
        <Outlet></Outlet>

        {isMenuOpen && (
                <SidebarMenu onClose={toggleMenu}></SidebarMenu>
        )}
    </div>
}

export default Nav