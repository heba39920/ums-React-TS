import AuthLayout from "../Components/Layouts/AuthLayout/AuthLayout"
import MasterLayout from "../Components/Layouts/MasterLayout/MasterLayout"
import NotFound from "../Components/NotFound/NotFound";
import Home from "../Components/Home/Home";
import UsersList from "../Components/UsersList/UsersList";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddUser from "../Components/addUser/addUser";
import Profile from "../Components/profile/profile";
import SignIn from "../Components/SignIn/SignIn";
import { ToastContainer } from "react-toastify";
import EditUser from "../Components/EditUser/EditUser";




function App() {
const routes = createBrowserRouter([{path:"/", element: <AuthLayout/>,
  errorElement: <NotFound/>,
  children:[
    {index: true,element: <SignIn/>},
    {path: "signin",element: <SignIn/>}

  ]

},{
  path:"dashboard", element: <MasterLayout/>,
  errorElement: <MasterLayout/>,
  children:[
    {index: true,element: <Home/>},
    {path: "home",element: <Home/>},
    {path: "users-list",element: <UsersList/>},
    {path: "add",element: <AddUser/>},
    {path: "profile",element: <Profile/>},
    {path: "edit/:id",element: <EditUser/>}


  ]
}])

  return (
    <>
      <ToastContainer/>
 <RouterProvider router={routes}/>
    </>
  )
}

export default App
