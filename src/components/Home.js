import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { IoBookSharp } from "react-icons/io5";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaQuoteLeft } from "react-icons/fa";
import '../App.css'
import { Link } from "react-router-dom";
import sharepoint from "../components/image/icons8-sharepoint-96.png";
import powerplatform from "../components/image/Power-platform.png"
import powerapps from "../components/image/icons8-microsoft-power-apps-96.png";
import powerbi from "../components/image/icons8-power-bi-2021-96.png";
import powerautomate from "../components/image/icons8-microsoft-power-automate-2020-96.png";
import Powerbi from "./Powerbi";

function Home() {
  return (
    <>
      <div className="container mx-auto p-6 mt-4 flex items-center justify-between  md:flex-row flex-col-reverse ">
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
          <img src={powerplatform} />
        </div>
      </div>
     
      <div className="container mx-auto my-40 flex flex-col md:items-center p-6">
      <h1 className="text-center font-bold text-2xl pb-8">Services Offered: </h1>
      <div className="choose-us-container mt-6 ">
        <div className="testimonial-card p-10 rounded-lg flex flex-col items-center space-y-4">
        <FaChalkboardTeacher className="icons size-20 items-center" />
        <div className="space-y-2">
        <h3 className="font-bold">On Demand Training:</h3>
        <p>We provides immediate access to a wide variety of courses
         that you can take at your own pace.
        Designed to fit into your busy schedule.
        </p>
        
        </div>
        </div>
        
        
        <div className="testimonial-card p-10 rounded-lg flex flex-col items-center space-y-4">
        <GrPersonalComputer className="icons size-20" />
        <div  className="space-y-2">
        <h3 className="font-bold">Recurring Training:</h3>
        <p>Ideal for businesses and individuals seeking continuous
        improvement and mastery over time, providing consistent
        refreshers and updates on key topics.</p>
        </div>
        
        
        </div>
        <div className="testimonial-card p-10 rounded-lg flex flex-col items-center space-y-4">
        <IoBookSharp className="icons size-20" />
        <div className="space-y-2">
        <h3 className="font-bold ">Pre-Recorded Trainings:</h3>
        <p>With structured lessons and comprehensive materials,you
           can revisit and review topics as needed,
           ensuring thorough understanding and retention.</p>
        </div>
        </div>
        <div className="testimonial-card p-10 rounded-lg flex flex-col items-center space-y-4">
        <LiaCertificateSolid className="icons size-20" />
        <div className="space-y-2">
        <h3 className="font-bold">Certification:</h3>
        <p>Earn certificates to showcase your new skills and  
           enhance your resume.Demonstrate your proficiency
           in specific areas, showcasing your commitment to professional growth.</p>
        </div>
        </div>
      </div>

      </div>
      <section id="services" className="container relative mx-auto p-4 pb-36 mt-32">
  <div className='flex flex-col items-center'>
    <h2 className="text-center font-semibold text-primary text-dark sm:text-1xl">
      What We Offer
    </h2>
    
  </div>

  <div
    id="about-sub"
    className="container mt-8 flex flex-col md:mt-28 md:items-center md:space-x-8 md:justify-around mx-auto space-y-12 md:flex-row md:space-y-0"
  >
    <div>
       <div className="max-w-lg bg-white border border-gray-200 mb-8 rounded-lg shadow dark:bg-white w-full">

      <Link to="/courses/sharepoint">
        <img id="card-img" className="rounded-t-lg" src={sharepoint} alt="Microsoft SharePoint" loading="lazy" />
      </Link>
      <div className="p-5" id="cards">
        <Link to="/courses/sharepoint">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Microsoft SharePoint</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">
          Learn how to create, manage, and customize SharePoint sites to enhance collaboration within your organization.
        </p>
        <Link to="/courses/sharepoint" id="card-button" className="inline-flex items-center py-2 text-sm font-bold text-center text-black focus:outline-none">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </Link>
      </div>
    </div> 

     <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-white w-full">

      <Link to="/courses/powerautomate">
        <img id="card-img" className="rounded-t-lg" src={powerautomate} alt="Microsoft Power Automate" loading="lazy" />
      </Link>
      <div className="p-5" id="cards">
        <Link to="/courses/powerautomate">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Microsoft Power Automate</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">
          Automate workflows and processes across different apps and services for increased productivity.
        </p>
        <Link to="/courses/powerautomate" id="card-button" className="inline-flex items-center py-2 text-sm font-bold text-center text-black focus:outline-none">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </Link>
      </div>
    </div> 
    </div>
    <div>
    <div className="max-w-lg bg-white border mb-8 border-gray-200 rounded-lg shadow dark:bg-white w-full">

      <Link to="/courses/powerapps">
        <img id="card-img" className="rounded-t-lg" src={powerapps} alt="Microsoft Power Apps" loading="lazy" />
      </Link>
      <div className="p-5" id="cards">
        <Link to="/courses/powerapps">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Microsoft Power Apps</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">
          Create custom apps with no-code or low-code solutions to solve business challenges.
        </p>
        <Link to="/courses/powerapps" id="card-button" className="inline-flex items-center py-2 text-sm font-bold text-center text-black focus:outline-none">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </Link>
      </div>
    </div>

    <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-white w-full">

      <Link to="/courses/powerbi">
        <img id="card-img" className="rounded-t-lg" src={powerbi} alt="Microsoft Power BI" loading="lazy" />
      </Link>
      <div className="p-5" id="cards">
        <Link to="/courses/powerbi">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Microsoft Power BI</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">
          Visualize your data and share insights with powerful reporting and analytics tools.
        </p>
        <Link to="/courses/powerbi" id="card-button" className="inline-flex items-center py-2 text-sm font-bold text-center text-black focus:outline-none">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </Link>
      </div>
    </div>
    </div>

    
  </div>
</section>

      <div className="testimonial_parent container p-6 mx-auto my-40">
        <h1 className="text-center font-bold text-2xl">Testimonials:</h1>
        <div className="testimonials_container md:flex flex-wrap justify-around mt-6 items-center  space-x-4">
            <div className="testimonial-card bg-lightYellow p-10 rounded-lg mt-6">
              <div className="flex items-center space-y-4 space-x-4">
              <FaQuoteLeft className="size-12"/> 
            <h1 className="text-xl font-bold"> Shelly S. - Power BI attendee</h1>
              </div>
            <p className="mt-5">TThis class was really terrific. I have already done a little<br/>work with Power BI, but I learned a ton. They tailored it<br/> to all levels. Honestly, probably the best online class I<br/>have ever had.</p>
            </div>
            <div className="testimonial-card bg-lightBlue p-10 rounded-lg  mt-6">
              <div className="flex items-center space-y-4 space-x-4 ">
              <FaQuoteLeft className="size-12"/> 
            <h1 className="text-xl font-bold">Gene M. - Virtual Conference attendee</h1>
              </div>
            <p className="mt-5">Overall, I love the virtual conference that was put together. The<br/> speakers prove they are experts in their related subjects. I learned<br/> many things; from fine-tuning my skills to stuff I never would have<br/>considered or thought of.</p>
            </div>
            <div className="testimonial-card bg-lightred p-10 rounded-lg  mt-6">
              <div className="flex items-center space-y-4 space-x-4">
              <FaQuoteLeft className="size-12"/> 
            <h1 className="text-xl font-bold">Perry C. - Power Apps student</h1>
              </div>
            <p className="mt-5">The instructor for this course was so easy to follow and understand. I<br/> found the content to be well organized and well-focused on the<br/> point. It should be used as a model for other courses. I watched <br/>every minute of it, and I am a 20-year veteran of Power Apps.</p>
            </div>
            <div className="testimonial-card bg-lightgreen p-10 rounded-lg  mt-6">
              <div className="flex items-center space-y-4 space-x-4">
              <FaQuoteLeft className="size-12"/> 
            <h1 className="text-xl font-bold">David H. - Power Automate student</h1>
              </div>
            <p className="mt-5">Excellent course and great instructor. Helped me<br/>understand the more advanced concepts. The examples<br/>can be applied at work immediately which is key to<br/>showing management the value of these courses.</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
