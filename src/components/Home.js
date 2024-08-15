import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { IoBookSharp } from "react-icons/io5";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import sharepoint from "../components/image/icons8-sharepoint-144.png";
import powerapps from "../components/image/icons8-power-apps-144.png";
import powerbi from "../components/image/icons8-power-bi-2021-144.png";
import powerautomate from "../components/image/icons8-microsoft-power-automate-2020-144.png";

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
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=EeE0QF5AFEWcUOAwYgqu_WbD0_OTVQ5GkKF2vVltsHxURTNWV1VDVkRVRE9RNExZTktDWlZNWE4zTS4u"
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
     
      <div className="container mx-auto my-40">
      <h1 className="text-center font-bold text-2xl">Services Offered: </h1>
      <div className="choose-us-container  md:flex flex-wrap justify-around mt-6 items-center space-y-6">
        <div className="testimonial-card p-10 rounded-lg flex flex-col items-center space-y-4">
        <FaChalkboardTeacher className="icons size-20 items-center" />
        <div>
        <h3 className="font-bold">On Demand Trainning:</h3>
        <p>We provides immediate access to a wide variety of courses
        <br/>
         that you can take at your own pace.<br/>
        Designed to fit into your busy schedule.
        </p>
        
        </div>
        </div>
        
        
        <div className="testimonial-card p-10 rounded-lg flex flex-col items-center space-y-4">
        <GrPersonalComputer className="icons size-20" />
        <div>
        <h3 className="font-bold">Recurring Training:</h3>
        <p>Ideal for businesses and individuals seeking continuous<br/>
        improvement and mastery over time, providing consistent<br/>
        refreshers and updates on key topics.</p>
        </div>
        
        
        </div>
        <div className="testimonial-card p-10 rounded-lg flex flex-col items-center space-y-4">
        <IoBookSharp className="icons size-20" />
        <div>
        <h3 className="font-bold">Pre-Recorded Trainings:</h3>
        <p>With structured lessons and comprehensive materials,you<br/>
           can revisit and review topics as needed,<br/>
           ensuring thorough understanding and retention.</p>
        </div>
        </div>
        <div className="testimonial-card p-10 rounded-lg flex flex-col items-center space-y-4">
        <LiaCertificateSolid className="icons size-20" />
        <div>
        <h3 className="font-bold">1 on 1 Training:</h3>
        <p>With 1 on 1 Training, you receive personalized<br/>
           attention and tailored instruction from our expert trainers.<br/>
           Perfect for those who want to focus on specific areas of interest</p>
        </div>
        </div>
      </div>

      </div>
      <div className="container mx-auto my-40">
        <h1 className="text-center font-bold text-2xl">Our Courses</h1>
        <div className="courses-container flex flex-col mt-12 md:flex-row items-center justify-between mt-12">
        <div className="flex flex-col space-y-4 items-center">
          <img src={sharepoint}/>
          <Link to="/courses/sharepoint" className="font-bold">Microsoft SharePoint</Link>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <img src={powerautomate}/>
          <Link to="/courses/powerautomate" className="font-bold">Microsoft Power Automate</Link>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <img src={powerapps}/>
          <Link to="/courses/powerapps" className="font-bold" >Microsoft Power Apps</Link>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <img src={powerbi} />
          <Link to="/courses/powerbi"  className="font-bold">Microsoft Power BI</Link>
        </div>
        </div>
        
      </div>
      <div className="container mx-auto my-40">
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
