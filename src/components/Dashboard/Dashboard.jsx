import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


function Dashboard() {
  return (
    <div className='h-full'>
      <Sidebar className=' bg-red-200 h-lvh'>
        <div >
          <h1 className='text-center py-5 font-bold text-xl	'>Portfolio_Admin</h1>
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