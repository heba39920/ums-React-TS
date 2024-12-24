import React, { useEffect, useState } from 'react';  
import { useParams, useNavigate } from 'react-router-dom';  
import axios from 'axios';  
import { useForm, SubmitHandler } from 'react-hook-form';  

// Define the shape of the user data  
interface User {  
  firstName: string;  
  lastName: string;  
  age: number;  
  phone: string;  
  email: string;  
  birthDate: string;  
}  

// Define the form data type  
interface FormData extends User {  firstName: string;  
    lastName: string;  
    age: number;  
    phone: string;  
    email: string;  
    birthDate: string;  }  

export default function EditUser() {  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();  
  const navigate = useNavigate();  
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User>({  
    firstName: '',  
    lastName: '',  
    age: 0,  
    phone: '',  
    email: '',  
    birthDate: ''   
  });  

  const getUser = async () => {  
    const response = await axios.get<User>(`https://dummyjson.com/users/${id}`);  
    setUser(response.data);  
  };  

  useEffect(() => {  
    if (id) {  
      getUser();  
    }  
  }, [id]);  

  const onSubmit: SubmitHandler<FormData> = async (data) => {  
    await axios.put(`https://dummyjson.com/users/${id}`, data);   
    navigate('/dashboard/users-list');  
  };  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
    const { name, value } = e.target;  
    setUser({ ...user, [name]: value });  
  };   

  return (  
    <>  
      <div className='d-flex justify-content-between mx-3'>  
        <h3>Update User</h3>  
      </div>  
      <hr />  

      <form onSubmit={handleSubmit(onSubmit)} className="m-5 shadow-lg p-3">  
        <div className="row">  
          <div className="col-md-6">  
            <label className="mb-3 mt-3">First Name</label>  
            <input  
              type="text"  
              className="form-control mb-3"  
              placeholder="Enter Your First Name"   
              {...register("firstName", { required: "First Name is required" })}  
              onChange={handleChange}  
              value={user.firstName}  
            />  
            {errors.firstName && <span className="text-danger">{errors.firstName.message}</span>}  
          </div>  

          <div className="col-md-6">  
            <label className="mb-3 mt-3">Last Name</label>  
            <input  
              type="text"  
              className="form-control mb-3"  
              placeholder="Enter Your Last Name"   
              {...register("lastName", { required: "Last Name is required" })}  
              onChange={handleChange}  
              value={user.lastName}  
            />  
            {errors.lastName && <span className="text-danger">{errors.lastName.message}</span>}  
          </div>  
        </div>  

        <div className="row">  
          <div className="col-md-6">  
            <label className="mb-3 mt-3">Email</label>  
            <input  
              type="email"  
              className="form-control mb-3"  
              placeholder="Enter Your Email"   
              {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Email is not valid" } })}  
              onChange={handleChange}  
              value={user.email}  
            />  
            {errors.email && <span className="text-danger">{errors.email.message}</span>}  
          </div>  

          <div className="col-md-6">  
            <label className="mb-3 mt-3">Age</label>  
            <input  
              type="number"  
              className="form-control mb-3"  
              placeholder="Enter Your Age"   
              {...register("age", { required: "Age is required", valueAsNumber: true, min: { value: 0, message: "Age must be positive" } })}  
              onChange={handleChange}  
              value={user.age}  
            />  
            {errors.age && <span className="text-danger">{errors.age.message}</span>}  
          </div>  
        </div>  

        <div className="row">    
          <div className="col-md-6">  
            <label className="mb-3 mt-3">Phone Number</label>  
            <input  
              type="tel"  
              className="form-control mb-3"  
              placeholder="Enter Your Phone Number"   
              {...register("phone", { required: "Phone number is required" })}  
              onChange={handleChange}  
              value={user.phone}  
            />  
            {errors.phone && <span className="text-danger">{errors.phone.message}</span>}  
          </div>  
          
          <div className="col-md-6">  
            <label className="mb-3 mt-3">Date Of Birth</label>  
            <input  
              type="date"  
              className="form-control mb-3"  
              {...register("birthDate", { required: "Birth Date is required" })}  
              onChange={handleChange}  
              value={user.birthDate}  
            />  
            {errors.birthDate && <span className="text-danger">{errors.birthDate.message}</span>}  
          </div>  
        </div>  

        <div className="text-center">  
          <button type='submit' className="btn btn-warning w-50 text-white my-5">SAVE</button>  
        </div>  
      </form>  
    </>  
  );  
}