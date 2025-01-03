import axios from 'axios';
import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

 interface Users{
  age: number;
 image : string;
  id: number,
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
  birthDate: string,
}
export default function UsersList() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [userId, setUserId] = useState<number | null>(null);
  const [userData, setUserData] = useState<Partial<Users>>({});

  const handleShow = (user:Users) => {
    setShow(true);
   setUserId(user.id);
   setUserData(user);
  }
  const [users, setUsers]= useState<Users[]>([]);
  const getUsers= async()=>{
    try {
      const response = await axios.get("https://dummyjson.com/users")
     setUsers(response?.data?.users);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
getUsers();
  },[])
  const navigate = useNavigate();

  const editUser = (id: number) => {  
    navigate(`/dashboard/edit/${id}`);
  } 
  const deleteUser = async()=>{
    try {
      const response = await axios.delete(`https://dummyjson.com/users/${userId}`);
      console.log(response);
      handleClose();
      toast.success("User deleted successfully",{
        position: "top-center",
        autoClose: 2000,
      });
      getUsers();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete user",{
        position: "top-center",
        autoClose: 2000,
      });
    }
  }
  return (
    <div className='container-fluid pt-3'>
    <div className='d-flex justify-content-between mx-3'>
      <h3>Users list</h3>
      <Link to="/dashboard/add" className='btn btn-warning text-white'>ADD NEW USER</Link>
      
    </div>
    <hr />
    <Table striped bordered hover className='text-center'>
      <thead>
        <tr className='text-uppercase'>
          <th>id</th>
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>email</th>
          <th>phone</th>
          <th>date of birth</th>
          <th>Actions</th>


        </tr>
      </thead>
      <tbody>
      {users.map((user)=>(
           <tr key={user.id}>
            <td>{user.id}</td>
            <td><img src={user.image} className='w-25' alt="profile image" /></td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.birthDate}</td>
            <td className='text-warning'>
            <MdDelete  onClick={()=>handleShow(user)} size={25} className='me-3'/>
            <MdEdit onClick={() => editUser(user.id)}  size={25}/>
            </td>
           </tr>
      ))}
      </tbody>
    </Table>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>DELETE USER</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure that you want to delete {userData?.firstName} {userData?.lastName}?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
          <Button variant="danger" onClick={()=>deleteUser()}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
