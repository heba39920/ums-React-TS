import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import { FaHome, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import profile from "../../src/assets/pexels-photo-2379004 1.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useState } from 'react';
import "./SideBar.css";

export default function SideBar() {
  const[isCollapsed, setIsCollapsed]= useState(false);
  const handleCollapse = ()=>{
   setIsCollapsed(!isCollapsed)
  }

  return (
    <div className='sidebar-container'>
      <Sidebar className='vh-100' collapsed={isCollapsed}>
       <div className='text-end m-2'>
        {isCollapsed? <FaRegArrowAltCircleRight className='arrow'  size={20} onClick={handleCollapse}/> : <FaRegArrowAltCircleLeft size={20} className='arrow'  onClick={handleCollapse}/> }
        
        
        </div>
        <div className="head text-center my-4">
          <img className='rounded-circle w-50' src={profile} alt="profile image" />
          <h6 className='my-2 '>Heba Saber</h6>
          <h6 className='text-warning'>Admin</h6>
        </div>
        <Menu className='p-1'>
     
            <MenuItem icon={<FaHome />} component={<NavLink to="home" />}> Home</MenuItem>
            <MenuItem icon={<FaUsersCog />} component={<NavLink to="users-list" />}> Users</MenuItem>
            <MenuItem icon={<RiUserAddFill />} component={<NavLink to="add" />}> Add User</MenuItem>
            <MenuItem icon={<CgProfile />} component={<NavLink to="profile" />}> Profile</MenuItem>
            <MenuItem icon={<IoIosLogOut />} component={<NavLink to="/" />}> Logout</MenuItem>
     


        </Menu>
      </Sidebar>

    </div>
  )
}
