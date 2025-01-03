// AddUser.tsx  
import axios from "axios";  
import React, { useState } from "react";  
import { SubmitHandler } from "react-hook-form";  
import { toast } from "react-toastify";  
import Form, { User } from "../Form/Form";  
import { RotatingLines } from "react-loader-spinner";  

const AddUser: React.FC = () => {  
    const [isLoading, setIsLoading] = useState(false);  
    const [isError, setIsError] = useState(false);  
    const [error, setError] = useState<string | null>(null);

    const onSubmit: SubmitHandler<User> = async (data) => {  
        try {  
            setIsLoading(true);  
            const response = await axios.post("https://dummyjson.com/users/add", data);  
            toast.success("User added successfully!", {  
                position: "top-center",  
                autoClose: 3000,  
            });  
            console.log(response.data);  
        } catch (error: any) { 
            setIsError(true);  
            setError(error.response ? error.response.data.message : "Failed to add user"); 
            console.error("Add user error:", error);  
            toast.error(error.message || "Failed to add user", { 
                position: "top-center",  
                autoClose: 3000,  
            });  
        } finally {  
            setIsLoading(false);  
        }  
    };  
    
    if (isLoading) {  
        return (  
            <div className="d-flex justify-content-center align-items-center vh-100">  
                <RotatingLines  
                    visible={true}  
                    height="96"  
                    width="96"  
                    color="grey"  
                    strokeWidth="5"  
                    animationDuration="0.75"  
                    ariaLabel="rotating-lines-loading"  
                />  
            </div>  
        );  
    }  

    if (isError) {  
        return <h1 className="text-danger">{error}</h1>;  
    }  

    return (  
        <div className="container-lg">  
            <div className='d-flex justify-content-between mx-3 py-2 '>  
                <h3 className="mt-3">Add User</h3>  
            </div>  
            <hr />  
            <Form onSubmit={onSubmit}>   
                <div className="text-center">  
                    <button type='submit' className="btn btn-warning w-50 text-white my-5">SAVE</button>  
                </div>  
            </Form>   
        </div>  
    );  
};  

export default AddUser;