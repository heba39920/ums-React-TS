import Form from '../Form/Form'
import { useAuthContext } from '../UserContext/AuthContext';
export default function Profile() {
  const {userData} = useAuthContext();
  return (
    <div className="container-lg">
    <div className='d-flex justify-content-between mx-3 pt-4'>  
      <h3>Profile</h3>  
    </div>  
    <hr />  

    <Form className="profile-form pt-5" imgClassName='d-block' profileImg={userData.image} defaultValues={userData} />
 

    </div>
  )
}
