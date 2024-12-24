import axios from 'axios';
import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import React from "react";

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
  const moveToAddUser = ()=>{
           navigate("/dashboard/add");
  }
  const editUser = (id: number) => {  
    navigate(`/dashboard/edit/${id}`);
  } 
  return (
    <div className='container-fluid'>
    <div className='d-flex justify-content-between mx-3'>
      <h3>Users list</h3>
      <button onClick={moveToAddUser} className='btn btn-warning text-white'>ADD NEW USER</button>
      
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
            <MdDelete size={25} className='me-3'/>
            <MdEdit onClick={() => editUser(user.id)}  size={25}/>
            </td>
           </tr>
      ))}
      </tbody>
    </Table>
    </div>
  )
}
