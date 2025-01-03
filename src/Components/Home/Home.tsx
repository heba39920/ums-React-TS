import "./Home.css";
export default function Home() {
  return (
    <section className="home d-flex align-items-center justify-content-center">
   <div className="container m-md-0 p-md-0 p-5">
     <div className='d-flex flex-column home-head align-items-center justify-content-center m-md-0 p-md-0'>

      <div className="col-lg-6 col-md-12   home-main p-3 rounded-5">

           <h1>User Management System</h1>
           <p>A user management system is a crucial component of software applications that enables administrators to create, manage, and oversee user accounts and permissions within a platform.</p>
           <div className="d-flex justify-content-center">
              <button className="btn btn-warning me-1">View More</button>
              <button className="btn btn-warning">Contact Us</button>
           </div>
      </div>
    </div>
   </div>
   </section>
  )
}
