import React from 'react'
import "../styles/ProfileScreen.css"
import Nav from '../components/Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
function ProfileScreen(){
const user=useSelector(selectUser) 
  return (
    <div className='profileScreen'>
        <Nav />
        <div className="body">
            <h1>Edit Profile</h1>
            <div className="info">
                <img src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt="" />
                <div className="details">
                    <h2>{user.email}</h2>
                    <div className="plans">
                       <h3>Plans (Not implemented yet)</h3>
                        <button  onClick={()=>auth.signOut()} className='signout'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen