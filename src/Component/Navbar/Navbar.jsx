import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <div className='navbar'>
      <img id='nimg' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7BogX_3Izy-_qsoO4kJAxyPlxP0d-uOs8tSkZe5fGP8in43Q6iUY79u4FiyRVxtC4h7o647SZniZHCsmRjWGpCT9anvZSROBgxm5S8QwRrFHangBdXuulwGy8pLZ4zl48afvSBPRC6SfsyQ6lDbJ3J8BdbG3oauaghl0sf2tgrCQAc_58gEViKM8j9Og/s320/580b57fcd9996e24bc43c529.png" alt="" className="logo" />
      <div className="sup">
        <ul className="menu">
            <li className="m">Home</li>
            <li className="m">About Us</li>
            <li className="m">Contact Us</li>
        </ul>
        </div>
    </div>
  )
}
