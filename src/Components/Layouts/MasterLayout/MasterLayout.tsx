import { Outlet } from "react-router-dom";
import NavBar from "../../NavBar/NavBar"
import SideBar from "../../SideBar/SideBar";
import "./Master.css";
import { useSidebar } from "../../SideBar/SidebarProvider";
export default function MasterLayout() {
  const { isCollapsed ,collapse} = useSidebar();
  return (
     <div className="d-flex m-0" style={{ height: "100vh" }}> 
    <div>  
      <SideBar />  
    </div>  
    <div className={`overLay ${isCollapsed && 'd-none'}`} onClick={collapse} />  
    <div className={`w-100 main flex-grow-1 ${isCollapsed ? 'expanded' : ''}`}>  
      <NavBar />  
      <Outlet />  
    </div>  
  </div>  
  )
}
