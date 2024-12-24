import { CiBellOn } from "react-icons/ci";
import { IoCaretBackCircleOutline } from "react-icons/io5";

export default function NavBar() {
  return (
    <div>
      <IoCaretBackCircleOutline />
 
            <input type="search"  className='form-control w-50'/> 
            <CiBellOn />
    </div>
  )
}
