import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./SignIn.css";
import axios from "axios";
import { toast} from "react-toastify";
import { useNavigate } from "react-router-dom";
interface SignInFormData {  
  username: string;  
  password: string;  
} 
export default function SignIn() {
 
  const navigate = useNavigate();
  // validation 
  const {register, handleSubmit, formState:{errors}} = useForm<SignInFormData>();
  const onsubmit:SubmitHandler<SignInFormData> =async (data)=>{
       try {
       const response = await axios.post("https://dummyjson.com/auth/login", data)
        toast.success("login successfully!",{
          position:"top-center",
          autoClose:3000
        })
      navigate("/dashboard")
      console.log(response);
      
       } catch (error) {
        console.log(error);
        toast.error("login failed",{
          position:"top-center",
          autoClose:3000
        });
        
       }
  }
  return (
    <div className="login-container bg-warning">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-5 bg-white p-5 rounded">
            <div className="title text-center">
              <h3 className="signIn-head mb-5">User Management System</h3>
              <h4>SIGN IN</h4>
              <small>Enter your credentials to access your account</small>
            </div>
            <form onSubmit={handleSubmit(onsubmit)}>
              <label htmlFor="" className="mb-3 mt-3">Username</label>
              <input
                type="text"
                className="form-control mb-3 "
                placeholder="enter your username" 
                {...register("username",{required:"username is req"})}
              
                />
                  {errors.username && <span className="text-danger">{errors.username.message}</span>}
              <label htmlFor="" className="mb-3">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="enter your password"
                {...register("password",{required:"password is req"})}

              />
                  {errors.username && <span className="text-danger">{errors.username.message}</span>}
              <button className="btn btn-warning w-100 my-5">SIGN IN</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
