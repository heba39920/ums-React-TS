// EditUser.tsx  
import  { useEffect, useState } from 'react';  
import { useParams, useNavigate } from 'react-router-dom';  
import axios from 'axios';  
import { SubmitHandler } from 'react-hook-form';  
import Form from '../Form/Form'; // Adjust path as necessary  
import { RotatingLines } from 'react-loader-spinner';

// Define the shape of the user data  
interface User {  
  firstName: string;  
  lastName: string;  
  age: number;  
  phone: string;  
  email: string;  
  birthDate: string;  
}  

export default function EditUser() {  
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();  
  const { id } = useParams<{ id: string }>();  
  const [user, setUser] = useState<User | null>(null); // Initialize user state as null  

  const getUser = async () => {  
    try {  

      const response = await axios.get<User>(`https://dummyjson.com/users/${id}`);  
      setUser(response.data);  
    } catch (error) {  
    
      console.error("Error fetching user data:", error);  
    } 
  };  

  useEffect(() => {  
    if (id) {  
      getUser();  
    }  
  }, [id]);  

  const onSubmit: SubmitHandler<User> = async (data) => {  
    try {  
      setIsLoading(true);
      await axios.put(`https://dummyjson.com/users/${id}`, data);  
      navigate('/dashboard/users-list');  
    } catch (error) {  
      setIsError(true);
      setError(error.toString());
      console.error("Error updating user:", error);  
    }   finally{
      setIsLoading(false);
     }
  };  
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
    <div className="container-lg">
      <div className='d-flex justify-content-between mx-3 pt-4'>  
      <h3>Update User</h3>  
    </div>  
    <hr />   
    {user && <Form onSubmit={onSubmit} defaultValues={user} >
       <div className="text-center">  
      <button type='submit' className="btn btn-warning w-50 text-white my-5">SAVE</button>  
    </div></Form>}  
    </div>  
  );  
}