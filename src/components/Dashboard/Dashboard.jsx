// import {
//   ArrowLeftEndOnRectangleIcon,
//   ArrowLeftIcon,
//   ArrowRightIcon,
//   HomeIcon,
// } from "@heroicons/react/24/solid";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";
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
        collapsedWidth="100px"

      >
        <div className="flex items-center justify-center	">
          <span className='text-center py-5 font-bold text-xl	'>
            {menuCollapse ? ('Admin' ):'Portfolio_Admin'}
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

        <Menu className='font-bold'>
          <MenuItem>Dashboard</MenuItem>
          <SubMenu className='' label="Projects">
            <MenuItem> All Projects</MenuItem>
            <MenuItem>Add New Projects</MenuItem>
          </SubMenu>
          <SubMenu className='' label="Skills">
            <MenuItem>All Skills</MenuItem>
            <MenuItem>Add New Skills</MenuItem>
          </SubMenu>
          <SubMenu className='' label="Blogs">
            <MenuItem>All Blogs</MenuItem>
            <MenuItem>Add New Blogs</MenuItem>
          </SubMenu>
          <MenuItem className=''>Manage Contacts</MenuItem>
          <MenuItem className=''>Calendar</MenuItem>
          <MenuItem>Profile</MenuItem>
        </Menu>
      </Sidebar>;
    </div>
  )
}

export default Dashboard