import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHome, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";

import { FaRegArrowAltCircleRight } from "react-icons/fa";

import "./SideBar.css";
import { useSidebar } from './SidebarProvider';
import { useAuthContext } from '../UserContext/AuthContext';


export default function SideBar() {
  const navigate = useNavigate();
  const { isCollapsed, handleCollapse } = useSidebar();
 const {userData} = useAuthContext();
  const logout =()=>{
    localStorage.removeItem("userToken");
     navigate("/signin");
  }
   
 
  return (
   
    <div className='sidebar-container'>
      <Sidebar className='vh-100' collapsed={isCollapsed}>
<div className='d-flex justify-content-center align-items-center logo'>
<div className="sidebar-span"></div>
<div className="sidebar-span2">UMS</div>
  </div> 
       <div className='text-end m-2'>
        {isCollapsed? <FaRegArrowAltCircleRight className='arrow'  size={20} onClick={handleCollapse}/> : <FaRegArrowAltCircleLeft size={20} className='arrow'  onClick={handleCollapse}/> }
        
        
        </div>
        <div className="head text-center my-5">
          <img className='rounded-circle w-50 mt-5' src={userData?.image} alt="profile image" />
          <h6 className='my-2 '>{userData?.firstName} {userData?.lastName} </h6>
          <h6 className='text-warning'>Admin</h6>
        </div>
        <Menu className='p-1'>
     
            <MenuItem icon={<FaHome />} component={<NavLink to="home" />}> Home</MenuItem>
            <MenuItem icon={<FaUsersCog />} component={<NavLink to="users-list" />}> Users</MenuItem>
            <MenuItem icon={<RiUserAddFill />} component={<NavLink to="add" />}> Add User</MenuItem>
            <MenuItem icon={<CgProfile />} component={<NavLink to="profile" />}> Profile</MenuItem>
            <MenuItem icon={<IoIosLogOut />} component={<NavLink to="/" />} onClick={logout}> Logout</MenuItem>
     


        </Menu>
      </Sidebar>

    </div>
  )
}
