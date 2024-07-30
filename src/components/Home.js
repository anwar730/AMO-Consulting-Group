import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { IoBookSharp } from "react-icons/io5";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaQuoteLeft } from "react-icons/fa";
function Home() {
  return (
    <>
      <div className="container mx-auto mt-4 flex items-center justify-between  md:flex-row flex-col-reverse ">
        <div className="sm:mt-12 flex flex-col">
          <h1 className="font-bold text-3xl py-4 hidden md:block">
            Welcome to{" "}
            <span className="text-blue font-extrabold">PowerPro Academy.</span>
          </h1>
          <h4 className="font-bold text-2xl py-4">
            Empower Your Skills with Our Comprehensive Courses.
          </h4>
          <p className="welcome-msg ">
            Enhance your skills with practical, high-quality courses from expert
            instructors.
            <br /> Advance your career or explore new interests with PowerPro
            Academy.
          </p>
          <div className="flex justify-center md:block">
            <a
              className="start-btn mt-5"
              href="https://forms.office.com/pages/responsepage.aspx?id=EeE0QF5AFEWcUOAwYgqu_WbD0_OTVQ5GkKF2vVltsHxUQ1hSWFFCVEZHOFNFV0pSUDNFVk9PRUg1Ty4u"
              target="blank"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="hero-img mt-10">
          <img src="https://empyreanit.com.au/wp-content/uploads/2023/11/Power-platform.png" />
        </div>
      </div>
      <div className="container mx-auto mt-10">
        <h1 className="text-center font-bold text-2xl">Why Choose Us?</h1>
        <div className="choose-us-container md:flex px-6 py-8  mt-6 items-center  space-x-4 ">
          <div className="choose-us-item flex items-center justify-around  space-x-10 md:space-x-6 p-6">
            <FaChalkboardTeacher className="icons size-20" />
            <h3 className="font-bold">
              Expert Instructors
              <br />
              Get personalized guidance and support throughout your learning
              journey.
            </h3>
          </div>
          <div className="choose-us-item flex items-center justify-around space-x-6 p-6">
            <GrPersonalComputer className="icons size-20" />
            <h3 className="font-bold">
              Flexible Learning:
              <br />
              Fit learning into your busy schedule with flexible deadlines.
            </h3>
          </div>
          <div className="choose-us-item flex items-center justify-around space-x-6 p-6 ">
            <IoBookSharp className="icons size-20" />
            <h3 className="font-bold">
              Comprehensive Resources
              <br />
              Enjoy interactive tutorials, hands-on exercises, and real-world
              examples.
            </h3>
          </div>
          <div className="choose-us-item flex items-center justify-around space-x-6 p-6">
            <LiaCertificateSolid className="icons size-20" />
            <h3 className="font-bold">
              Certification:
              <br />
              Earn certificates to showcase your new skills and enhance your
              resume.
            </h3>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10">
        <h1 className="text-center font-bold text-2xl">Our Courses</h1>
        <div className="courses-container md:flex items-center justify-between">
        <div className="course-card">
          <img src="https://1000logos.net/wp-content/uploads/2022/08/Microsoft-SharePoint-Logo.png" className="md:w-60 md:h-64"/>
          <h1 className="text-center">Microsoft SharePoint</h1>
        </div>
        <div>
          <img src="https://images.squarespace-cdn.com/content/v1/62460a56418af8236d4f3fee/e00b4d15-e244-4d5c-976e-01aa54763133/powerautomate-small%406x.png" className="md:w-60"/>
          <h1 className="text-center">Microsoft Power Automate</h1>
        </div>
        <div>
          <img src="https://play-lh.googleusercontent.com/hLl_pWy-rbQgEpBukZrRNvX8K0-Eh5j9IXQ0IK24nvPzLncmJrYgpohQk0BpQrJYg2M" className="md:w-60"/>
          <h1  className="text-center">Microsoft Power Apps</h1>
        </div>
        <div>
          <img src="https://i.pinimg.com/originals/7a/f2/1e/7af21eaf89a449831a1e12d640b54fae.png" className="md:w-60 md:h-64"/>
          <h1 className="text-center">Microsoft Power BI</h1>
        </div>
        </div>
        
      </div>
      <div className="container mx-auto mt-10">
        <h1 className="text-center font-bold text-2xl">What Our Students Have To Say</h1>
        <div className="testimonials_container md:flex flex-wrap justify-around mt-6 items-center  space-x-4">
            <div className="testimonial-card bg-lightYellow p-10 rounded-lg mt-6">
              <div className="flex items-center space-y-4 space-x-4">
              <FaQuoteLeft className="size-12"/> 
            <h1 className="text-xl font-bold">Anwar Ismail</h1>
              </div>
            <p className="mt-5">This class was really terrific. I have already done a little<br/> work with Power BI, but I learned a ton. They tailored it to all levels.<br/> Honestly, probably the best online class I have ever had.</p>
            </div>
            <div className="testimonial-card bg-lightBlue p-10 rounded-lg  mt-6">
              <div className="flex items-center space-y-4 space-x-4 ">
              <FaQuoteLeft className="size-12"/> 
            <h1 className="text-xl font-bold">Anwar Ismail</h1>
              </div>
            <p className="mt-5">This class was really terrific. I have already done a little<br/> work with Power BI, but I learned a ton. They tailored it to all levels.<br/> Honestly, probably the best online class I have ever had.</p>
            </div>
            <div className="testimonial-card bg-lightred p-10 rounded-lg  mt-6">
              <div className="flex items-center space-y-4 space-x-4">
              <FaQuoteLeft className="size-12"/> 
            <h1 className="text-xl font-bold">Anwar Ismail</h1>
              </div>
            <p className="mt-5">This class was really terrific. I have already done a little<br/> work with Power BI, but I learned a ton. They tailored it to all levels.<br/> Honestly, probably the best online class I have ever had.</p>
            </div>
            <div className="testimonial-card bg-lightgreen p-10 rounded-lg  mt-6">
              <div className="flex items-center space-y-4 space-x-4">
              <FaQuoteLeft className="size-12"/> 
            <h1 className="text-xl font-bold">Anwar Ismail</h1>
              </div>
            <p className="mt-5">This class was really terrific. I have already done a little<br/> work with Power BI, but I learned a ton. They tailored it to all levels.<br/> Honestly, probably the best online class I have ever had.</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;

{
  /* <section className="hero-section">
      <div>
        <h1>
          Welcome to <span>PowerPro Academy</span>
        </h1>
        <h4>Empower Your Skills with Our Comprehensive Courses</h4>
        <p className="welcome-msg">
          PowerPro Academy offer a diverse range of courses designed to enhance{" "}
          <br />
          your skills and boost your career. Our expert instructors are
          dedicated <br />
          to providing high-quality education that is accessible and practical.
          <br /> Whether you're looking to improve your professional skills or
          explore new interests,
          <br /> we have the right course for <span>you.</span>
        </p>
        <a className="start-btn" href="https://forms.office.com/pages/responsepage.aspx?id=EeE0QF5AFEWcUOAwYgqu_WbD0_OTVQ5GkKF2vVltsHxUQ1hSWFFCVEZHOFNFV0pSUDNFVk9PRUg1Ty4u" target="blank">Get Started</a>
      </div>
      <div>
        <img src="https://empyreanit.com.au/wp-content/uploads/2023/11/Power-platform.png" />
      </div>
    </section>
    <section className="choose-us-section">
      <h1>Why Choose Us?</h1>
      <div className="choose-us-container">
      <div className="choose-us-item">
      <FaChalkboardTeacher className="icons"/>
      <h3>Expert Instructors<br/>
      Get personalized guidance and support throughout your learning journey.
</h3>
      </div>
      <div className="choose-us-item">
      <GrPersonalComputer className="icons"/>
      <h3>Flexible Learning:<br/>
      Fit learning into your busy schedule with flexible deadlines.
</h3>
      </div>
      <div  className="choose-us-item">
        <IoBookSharp className="icons"/>
        <h3>Comprehensive Resources<br/>
        Enjoy interactive tutorials, hands-on exercises, and real-world examples.</h3>
      </div>
      <div  className="choose-us-item">
      <LiaCertificateSolid className="icons"/>
      <h3>Certification:<br/>
Earn certificates to showcase your new skills and enhance your resume.</h3>
      <h3>

      </h3>
      </div>
      </div>
      <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
      
    </section> */
}
