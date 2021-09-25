import { CalendarToday, MailOutline, PermIdentity, Phone, PinDrop, Publish } from "@material-ui/icons"
import { Link } from "react-router-dom"
import "./user.css"

export default function User() {
 return (
 <div className="user">
   <div className="userTitleContainer">
     <h1 className="userTitle">Edit User</h1>
     <Link to="/newUser">
     <button className="userAddButton">Create</button>
     </Link>
   </div>
   <div className="userContainer">
     <div className="userShow">
       <div className="userShowTop">
         <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="userShowImg" />
         <div className="userShowTopTitle">
           <span className="userShowUsername">Jose Perreira</span>
           <span className="userShowUserTitle">Job Title</span>
        </div>        
       </div>
       <div className="userShowBottom">
         <span className="userShowTitle">Account Details</span>
         <div className="userShowInfo">
          <PermIdentity className="userShowIcon" />
          <span className="userShowInfoTitle">zerreira30</span>
         </div>
         <div className="userShowInfo">
          <CalendarToday className="userShowIcon" />
          <span className="userShowInfoTitle">21/02/1992</span>
         </div>
         <span className="userShowTitle">Contact Details</span>
         <div className="userShowInfo">
          <Phone className="userShowIcon" />
          <span className="userShowInfoTitle">+55 6363 6363</span>
         </div>
         <div className="userShowInfo">
          <MailOutline className="userShowIcon" />
          <span className="userShowInfoTitle">perreira30@gmail.com</span>
         </div>
         <div className="userShowInfo">
          <PinDrop className="userShowIcon" />
          <span className="userShowInfoTitle">Sao Paulo | Brazil</span>
         </div>
       </div>
     </div>
     <div className="userUpdate">
       <span className="userUpdateTitle">Edit</span>
       <form className="userUpdateForm">
         <div className="userUpdateLeft">
           <div className="userUpdateItem">
             <label>Username</label>
             <input type="text" placeholder="zerreira30" className="userUpdateInput"/>
           </div>
           <div className="userUpdateItem">
             <label>Full Name</label>
             <input type="text" placeholder="Jose Perreira" className="userUpdateInput"/>
           </div>
           <div className="userUpdateItem">
             <label>Email</label>
             <input type="text" placeholder="perreira30@gmail.com" className="userUpdateInput"/>
           </div>
           <div className="userUpdateItem">
             <label>Address</label>
             <input type="text" placeholder="Sao Paulo | Brazil" className="userUpdateInput"/>
           </div>
         </div>
           <div className="userUpdateRight">
             <div className="userUpdateUpload">
               <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="userUpdateImg" />
               <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
               <input type="file" id="file" style={{display:"none"}} />
             </div>
             <button className="userUpdateButton">Update</button>
           </div>
       </form>
     </div>
   </div>
 </div>
 )
}