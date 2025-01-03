import { CiBellOn } from "react-icons/ci";
import { IoCaretBackCircleOutline } from "react-icons/io5";

export default function NavBar() {
  return (
    <div className="d-flex justify-content-between align-items-center py-3 px-4 bg-white">
      <IoCaretBackCircleOutline size={20} />
 <div className="d-flex align-items-center">
  
 <input type="search"  placeholder="Search" className='form-control w-100 me-2'/> 
            <CiBellOn size={30} />
 </div>
    </div>
  )
}
