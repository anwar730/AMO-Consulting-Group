import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { PiAddressBookFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
   
    <div className='footer  mt-14 bg-lightBlue py-16'>
      <div className='md:flex md:items-center md:justify-around space-y-4' >
      <div>
     <h1 className='font-bold text-xl'>Subscribe to Our Newsletter</h1> 
     <p>Stay updated with the latest courses and offers:</p>

     <form action="#" method="post" className=''> 
     <input type="email" id="email" name="email" placeholder="Your email address" required className='my-4 px-6 py-2 rounded-lg'/> <br/>
     <input type="submit" value="Subscribe" className='start-btn px-8 py-4'></input>
      </form>
      </div>
      <div className='space-y-4'>
      <h1  className='font-bold text-xl'>Contact Us</h1>
      <h4>Questions? We're Here to Help!</h4>
      <div className='flex items-center space-x-4'>
      <MdEmail className='size-6'/>
      <a  href="mailto:info@amoconsultinggroup.com">info@amoconsultinggroup.com</a>
      </div>
      <div  className='flex items-center space-x-4'>
      <FaPhoneAlt className='size-6'/>
      <h5>770-770-1482</h5>
      </div>
      <div className='flex items-center space-x-4'>
      <PiAddressBookFill className='size-6'/>
      <h5>Atlanta,Georgia</h5>
      </div>
      </div>
      
       <div className='space-y-4'>
        <h1  className='font-bold text-xl'>Follow Us</h1>
        <p className='hidden md:block'>Stay updated with the latest course offerings and educational tips:</p>
        <div className='flex items-center space-x-6 '>
        <a
        href="https://www.instagram.com/amoconsultinggroup/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className='size-6'/>
      </a>
      <a
        href="https://t.me/AMOConsultingGroup"
        target="_blank"
        rel="noopener noreferrer"
        
      >
        <FaTelegram  className='size-6'/>
      </a>
      <a
        href="https://www.linkedin.com/company/a-m-o-consulting-group/"
        target="_blank"
        rel="noopener noreferrer"
        
      >
        <FaLinkedin className='size-6'/>
      </a>
        
        
        </div>
       </div>
      </div>
      
      
     
      <h1 className='text-center mt-12'>© 2024 PowerPro Academy. All rights reserved.</h1>
    </div>
    
    </>
    
  )
}

export default Footer
