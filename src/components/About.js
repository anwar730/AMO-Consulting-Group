import React from "react";
import mision from "../components/image/mision.png";
import vision from "../components/image/vision.png";
import values from "../components/image/values.png";
function About() {
  return (
    <>
      <h1 className="font-bold text-2xl py-4 my-10 text-center">About Us</h1>

      <div className="container mx-auto p-4  md:flex items-center justify-around">
      <div>
        <img
          src={mision}
          alt="mission image"
          className="h-80 rounded-lg"
        />
        </div>
        <div>
          <h1 className="font-bold text-2xl py-4 mt-10 ">Our Mission</h1>
          <p>
            Our mission is to provide accessible, comprehensive, and practical
            training that
            <br />
            enables learners to harness the full potential of the Microsoft
            Power Platform.
            <br />
            We aim to equip our students with the knowledge and skills necessary
            to
            <br />
            drive innovation,enhance productivity, and achieve their
            professional goals.
          </p>
        </div>
        
        
      </div>
      <div className="container mx-auto my-40 p-4 md:flex-row items-center justify-around flex flex-col-reverse ">
     
        <div>
          <h1 className="font-bold text-2xl py-4 mt-10 ">Our Vision</h1>
          <p>
            Our vision is to become the leading global provider of Microsoft
            Power Platform education,
            <br />
            fostering a community of skilled professionals who are capable of
            leveraging technology
            <br />
            to create innovative solutions and drive positive change in their
            organizations. <br />
            We strive to continuously evolve and adapt our offerings to meet the
            dynamic needs
            <br />
            of the tech industry,ensuring our learners are always at the cutting
            edge of their fields.
          </p>
        </div>
        <div>
        <img
          src={vision}
          alt="vision image"
          className="h-80 rounded-lg"
        />
        </div>
       
        
      </div>
      <div className="container mx-auto my-40 p-4 md:flex items-center justify-around">
      <div>
        <img
          src={values}
          alt="vision image"
          className="h-80 rounded-lg"
        />
        </div>
        <div>
          <h1 className="font-bold text-2xl py-4 mt-10 ">Our Values</h1>
          <p>
            We are committed to delivering high-quality education that is both
            engaging and effective.
            <br />
            Our courses are designed to provide a deep understanding of the
            Microsoft Power Platform.
            <br />
            We strive to stay at the forefront of technological advancements and
            continuously
            <br />
            update our courses to reflect the latest developments in the
            Microsoft Power Platform.
            <br />
            We believe that education should be accessible to everyone. Our
            online platform ensures
            <br />
            that learners from all over the world can benefit from our courses,
            regardless of their location or schedule.
            <br />
          </p>
        </div>
        
        
      </div>
    </>
  );
}

export default About;

// Our Mission
// Our mission is to provide accessible, comprehensive, and practical training that enables learners to harness the full potential of the Microsoft Power Platform. We aim to equip our students with the knowledge and skills necessary to drive innovation, enhance productivity, and achieve their professional goals.

// Our Vision
// Our vision is to become the leading global provider of Microsoft Power Platform education, fostering a community of skilled professionals who are capable of leveraging technology to create innovative solutions and drive positive change in their organizations. We strive to continuously evolve and adapt our offerings to meet the dynamic needs of the tech industry, ensuring our learners are always at the cutting edge of their fields.

// Meet Our Team
// [Instructor Name]
// Position: Lead Instructor
// Bio: With over 15 years of experience in the industry, [Instructor Name] has a deep understanding of the Microsoft Power Platform and its applications. They are passionate about teaching and committed to helping students achieve their goals.
// [Instructor Name]
// Position: Senior Instructor
// Bio: [Instructor Name] specializes in Microsoft Power Automate and Power Apps, bringing hands-on experience and practical knowledge to the classroom. They have a background in software development and a keen interest in automation technologies.
// [Instructor Name]
// Position: Instructor
// Bio: An expert in data analysis and business intelligence, [Instructor Name] is dedicated to helping students master Power BI. They have worked on numerous data projects and enjoy sharing their insights and techniques with learners.

// Our Values
// Quality Education:
// We are committed to delivering high-quality education that is both engaging and effective. Our courses are designed to provide a deep understanding of the Microsoft Power Platform and its practical applications.
// Innovation:
// We strive to stay at the forefront of technological advancements and continuously update our courses to reflect the latest developments in the Microsoft Power Platform.
// Accessibility:
// We believe that education should be accessible to everyone. Our online platform ensures that learners from all over the world can benefit from our courses, regardless of their location or schedule.
// Community:
// We foster a sense of community among our learners, instructors, and industry experts. Collaboration and knowledge-sharing are at the heart of our learning experience.
