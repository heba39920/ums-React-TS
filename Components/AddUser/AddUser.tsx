import axios from "axios";  
import React from "react";  
import { SubmitHandler, useForm } from "react-hook-form";  
import { toast } from "react-toastify";  

interface UserFormInput {  
  firstName: string;  
  lastName: string;  
  email: string;  
  age: number;  
  phoneNumber: string;  
  dateOfBirth: string;  
}  

const AddUser: React.FC = () => {  
  const {  
    register,  
    handleSubmit,  
    formState: { errors }  
  } = useForm<UserFormInput>();  

  const onSubmit: SubmitHandler<UserFormInput> = async (data) => {  
    try {  
      const response = await axios.post("https://dummyjson.com/auth/login", data);  
      toast.success("Login successfully!", {  
        position: "top-center",  
        autoClose: 3000,  
      });  
      console.log(response);  
    } catch (error) {  
      console.error("Login error:", error);  
      toast.error("Login failed", {  
        position: "top-center",  
        autoClose: 3000,  
      });  
    }  
  };  

  return (  
    <>  
      <div className='d-flex justify-content-between mx-3'>  
        <h3>Add User</h3>  
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
              {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Email is not valid" } })}  
            />  
            {errors.email && <span className="text-danger">{errors.email.message}</span>}  
          </div>  
          <div className="col-md-6">  
            <label className="mb-3 mt-3">Age</label>  
            <input  
              type="number"  
              className="form-control mb-3"  
              placeholder="Enter Your Age"  
              {...register("age", { required: "Age is required", min: { value: 0, message: "Age must be a positive number" } })}  
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
              {...register("phoneNumber", { required: "Phone Number is required" })}  
            />  
            {errors.phoneNumber && <span className="text-danger">{errors.phoneNumber.message}</span>}  
          </div>  
          <div className="col-md-6">  
            <label className="mb-3 mt-3">Date Of Birth</label>  
            <input  
              type="date"  
              className="form-control mb-3"  
              {...register("dateOfBirth", { required: "Date Of Birth is required" })}  
            />  
            {errors.dateOfBirth && <span className="text-danger">{errors.dateOfBirth.message}</span>}  
          </div>  
        </div>  
        <div className="text-center">  
          <button type="submit" className="btn btn-warning w-50 text-white my-5">SAVE</button>  
        </div>  
      </form>  
    </>  
  );  
};  

export default AddUser;