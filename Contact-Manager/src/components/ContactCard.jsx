import React from 'react'
import user from '../images/user.jpg'
const ContactCard = (props) => {
  const {id, name,mobile, email} = props.contact;
  return (
    <div className='item'>
            <div className="contact">
                <div className="header"><img className='ui avatar image' src={user} alt="User" />  {name}</div>
                <div>{mobile}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon" style={{color: "red",fontSize:"30px", float:"right"}}></i>
        </div>
  )
}

export default ContactCard
