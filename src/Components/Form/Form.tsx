
import React from "react";  
import { useForm, SubmitHandler } from "react-hook-form";  
import "./Form.css";
 export interface User {  
  firstName: string;  
  lastName: string;  
  age: number;  
  phone: string;  
  email: string;  
  birthDate: string;  
}  

interface UserFormProps {  
  onSubmit?: SubmitHandler<User>;  
  defaultValues?: User; 
  children?: React.ReactNode;
  className?: string;
  profileImg?: string;
  imgClassName?: string;
}  

const Form: React.FC<UserFormProps> = ({onSubmit = () => {}, defaultValues, children , className , profileImg, imgClassName}) => {  
  const { register, handleSubmit, formState: { errors } } = useForm<User>({  
    defaultValues,  
  });  

  return (  
 
    <form onSubmit={handleSubmit(onSubmit)} className={`form m-5 bg-white shadow-lg p-3 pt-5 ${className}`}>  
    <img className={`profile-img ${imgClassName}`} src={profileImg} alt="profile img" />

      <div className="row">  
        <div className="col-md-6">  
          <label htmlFor="firstName" className="mb-3 mt-3">First Name</label>  
          <input  
           id="firstName"
            type="text"  
            className="form-control mb-3"  
            placeholder="Enter Your First Name"  
            {...register("firstName", { required: "First Name is required" })}  
          />  
          {errors.firstName && <span className="text-danger">{errors.firstName.message}</span>}  
        </div>  
        <div className="col-md-6">  
          <label htmlFor="lastName" className="mb-3 mt-3">Last Name</label>  
          <input  
          id="lastName"
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
          <label  htmlFor="email" className="mb-3 mt-3">Email</label>  
          <input  
            id="email"
            type="email"  
            className="form-control mb-3"  
            placeholder="Enter Your Email"  
            {...register("email", {  
              required: "Email is required",  
              pattern: { value: /^\S+@\S+$/i, message: "Email is not valid" }  
            })}  
          />  
          {errors.email && <span className="text-danger">{errors.email.message}</span>}  
        </div>  
        <div className="col-md-6">  
          <label  htmlFor="age" className="mb-3 mt-3">Age</label>  
          <input  
         id="age"
            type="number"  
            className="form-control mb-3"  
            placeholder="Enter Your Age"  
            {...register("age", { required: "Age is required", valueAsNumber: true, min: { value: 0, message: "Age must be positive" } })}  
          />  
          {errors.age && <span className="text-danger">{errors.age.message}</span>}  
        </div>  
      </div>  
      <div className="row">  
        <div className="col-md-6">  
          <label htmlFor="phone" className="mb-3 mt-3">Phone Number</label>  
          <input 
               id="phone"
            type="tel"  
            className="form-control mb-3"  
            placeholder="Enter Your Phone Number"  
            {...register("phone", { required: "Phone number is required" })}  
          />  
          {errors.phone && <span className="text-danger">{errors.phone.message}</span>}  
        </div>  
        <div className="col-md-6">  
          <label htmlFor="birthDate" className="mb-3 mt-3">Date Of Birth</label>  
          <input  
            id="birthDate"
            type="date"  
            className="form-control mb-3"  
            {...register("birthDate", { required: "Birth Date is required" })}  
          />  
          {errors.birthDate && <span className="text-danger">{errors.birthDate.message}</span>}  
        </div>  
      </div>  
   {children}
    </form>  


  );  
};  

export default Form;