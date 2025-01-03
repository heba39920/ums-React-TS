import { SubmitHandler, useForm } from "react-hook-form";
import "./SignIn.css";
import axios from "axios";
import { toast} from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../UserContext/AuthContext";
import { RotatingLines } from "react-loader-spinner";
import { useState } from "react";
interface SignInFormData {  
  username: string;  
  password: string;  
} 
export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [error, setError] = useState(false);
 const {saveData} = useAuthContext();
  const navigate = useNavigate();
  // validation 
  const {register, handleSubmit, formState:{errors}} = useForm<SignInFormData>();
  const onsubmit:SubmitHandler<SignInFormData> =async (data)=>{
       try {
        setIsLoading(true);
       const response = await axios.post("https://dummyjson.com/auth/login", data)
        toast.success("login successfully!",{
          position:"top-center",
          autoClose:3000
        })
      navigate("/dashboard")
     localStorage.setItem("userToken",response?.data?.accessToken);
     
      saveData();
       } catch (error:any) {
        setIsError(true);
        setError(error.toString());
        console.log(error);
        toast.error("login failed",{
          position:"top-center",
          autoClose:3000
        }
      );
        
       }finally{
        setIsLoading(false);
       }
  }
  if(isLoading){
    return <div className="d-flex justify-content-center align-items-center vh-100">
       <RotatingLines
    visible={true}
    height ="96"
    width="96"
    color="grey"
    strokeWidth="5"
    animationDuration="0.75"
    ariaLabel="rotating-lines-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
    </div>
  }
  if(isError){
    return <h1>{error}</h1>
  }
  return (
    <div className="login-container bg-warning">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-5 bg-white p-5 rounded">
            <div className="title">
              
              <h3 className="signIn-head mb-5"><span className="head-span"></span> User Management System</h3>
             <div className="text-center">
             <h4>SIGN IN</h4>
             <small>Enter your credentials to access your account</small>
             </div>
            </div>
            <form onSubmit={handleSubmit(onsubmit)}>
              <label htmlFor="username" className="mb-3 mt-3">Username</label>
              <input
                type="text"
                id="username"
                className="form-control mb-3 "
                placeholder="enter your username" 
                {...register("username",{required:"username is req"})}
              
                />
                  {errors.username && <span className="text-danger">{errors.username.message}</span>}
              <label htmlFor="password" className="mb-3">Password</label>
              <input
                type="password"
                id="password"
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
