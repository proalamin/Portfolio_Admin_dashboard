// import {
//   ArrowLeftEndOnRectangleIcon,
//   ArrowLeftIcon,
//   ArrowRightIcon,
//   HomeIcon,
// } from "@heroicons/react/24/solid";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { DiCodeigniter } from "react-icons/di";
import { SiBloglovin } from "react-icons/si";
import { RiContactsBookLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { IoMdHome } from "react-icons/io";

import { HiChevronDoubleLeft, HiChevronDoubleRight, HiChevronLeft } from "react-icons/hi2";
import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


function Dashboard() {

  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    setMenuCollapse(!menuCollapse);
  }


  return (
    <div className='h-full'>
      <Sidebar className=' bg-red-200 h-lvh'
        collapsed={menuCollapse}
        collapsedWidth="85px"

      >
        <div className="flex items-center justify-center	">
          <span className='text-center py-5 font-bold text-xl	'>
            {menuCollapse ? (<IoMdHome/>) : 'Portfolio_Admin'}
          </span>
          <span className="flex justify-end pt-2 mx-2 font-extrabold text-xl" onClick={menuIconClick}>
            {
              menuCollapse ? (
                <HiChevronDoubleRight />
              ) : (

                <HiChevronDoubleLeft />
              )
            }
          </span>
        </div>

        <Menu className='font-bold border-double	rounded-md border-slate-400	m-2 bg-red-200'>
          <MenuItem icon={<MdOutlineDashboardCustomize />}>Dashboard</MenuItem>
          <SubMenu icon={<GoProjectSymlink />
          } className='' label="Projects">
            <MenuItem> All Projects</MenuItem>
            <MenuItem>Add New Projects</MenuItem>
          </SubMenu>
          <SubMenu icon={<DiCodeigniter />
          } label="Skills">
            <MenuItem icon={<MdOutlineDashboardCustomize />}>All Skills</MenuItem>
            <MenuItem icon={<MdOutlineDashboardCustomize />}>Add New Skills</MenuItem>
          </SubMenu>
          <SubMenu icon={< SiBloglovin />} label="Blogs">
            < MenuItem > All Blogs</MenuItem>
            <MenuItem>Add New Blogs</MenuItem>
          </SubMenu>
          <MenuItem icon={<RiContactsBookLine/>} >Manage Contacts</MenuItem>
          <MenuItem icon={<SlCalender  />} >Calendar</MenuItem>
          <MenuItem icon={<CgProfile />}>Profile</MenuItem>
        </Menu>

        {/* <div className="flex justify-center">
          <button className="btn btn-outline btn-error">Error</button>
        </div> */}

        <div className="text-center">
          {menuCollapse ? (<button className="btn btn-outline btn-error btn-xs text-xs mt-5"><HiChevronLeft />
            Log out</button>) :
            (<button className="btn btn-outline btn-error btn-sm mt-5 "><HiChevronLeft />
              Log out</button>)}
        </div>
      </Sidebar >;
    </div >
  )
}

export default Dashboard