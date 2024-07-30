import React from "react";
import { GoGoal } from "react-icons/go";

import Resources from "./Resources";

function Sharepoint() {
  return (
    <>
      <div className="container mx-auto  my-24 flex items-center justify-between  md:flex-row flex-col-reverse ">
        <div>
          <h1 className="font-bold text-2xl py-4">Microsoft SharePoint</h1>
          <p>
            This course provides a comprehensive introduction to Microsoft
            SharePoint, teaching you
            <br /> how to effectively manage documents, collaborate with team
            members,
            <br /> and customize SharePoint sites to suit your organizational
            needs.
          </p>
          <a
            className="start-btn mt-5 mr-4"
            href="https://learn.microsoft.com/en-us/sharepoint/"
            target="blank"
          >
            Learn More
          </a>
          <a
            className="start-btn mt-5"
            href="https://forms.office.com/pages/responsepage.aspx?id=EeE0QF5AFEWcUOAwYgqu_WbD0_OTVQ5GkKF2vVltsHxUQ1hSWFFCVEZHOFNFV0pSUDNFVk9PRUg1Ty4u"
            target="blank"
          >
            Register Now
          </a>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeBOaUMTRRY1oVmBraVayGfQ4kS5_h-rw6PA&s"
            className="h-72 rounded-lg"
          />
        </div>
      </div>

      <div className="container mx-auto my-64">
        <h1 className="font-bold text-2xl py-4 mt-10 text-center">
          Objectives
        </h1>
        <div className="md:flex items-center justify-around">
          <div>
            <div className="flex items-center space-x-4 mt-3">
              <GoGoal className="size-8" />
              <h1 className="font-bold">
                Understand SharePoint architecture and components.
              </h1>
            </div>
            <div className="flex items-center space-x-4 mt-3">
              <GoGoal className="size-8" />
              <h1 className="font-bold">
                Create and manage SharePoint sites and subsites.
              </h1>
            </div>
            <div className="flex items-center space-x-4  mt-3">
              <GoGoal className="size-8" />
              <h1 className="font-bold">
                Organize and share documents using libraries and lists.
              </h1>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-4  mt-3">
              <GoGoal className="size-8" />
              <h1 className="font-bold">
                Implement version control and permissions.
              </h1>
            </div>
            <div className="flex items-center space-x-4  mt-3">
              <GoGoal className="size-8" />
              <h1 className="font-bold">
                Utilize collaboration tools such as shared workspaces and
                calendars.
              </h1>
            </div>
            <div className="flex items-center space-x-4  mt-3">
              <GoGoal className="size-8" />
              <h1 className="font-bold">
                Automate workflows with Power Automate integration.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-24">
        <h1 className="font-bold text-2xl py-4 mt-10 text-center">
          Key Modules
        </h1>
        <div className="px-4 py-14 bg-white shadow-lg rounded-lg module-card">
          <h1 className="font-bold text-xl pb-6 text-center">Duration:12 Weeks</h1>
          <ul className="space-y-4">
            <li className="font-bold pb-4  border-b border-gray-200">
              Introduction to SharePoint
            </li>
            <li className="font-bold pb-4 border-b border-gray-300">
              Overview of SharePoint and its features
            </li>
            <li className="font-bold pb-4 border-b border-gray-300">
              Navigating the SharePoint interface
            </li>
            <li className="font-bold pb-4 border-b border-gray-300">
              Creating and Managing Sites
            </li>
            <li className="font-bold pb-4 border-b border-gray-300">
              Setting up SharePoint sites and subsites
            </li>
            <li className="font-bold pb-4 border-b border-gray-300">
              Customizing site templates and layouts
            </li>
            <li className="font-bold pb-4 border-b border-gray-300">
              Document Management
            </li>
            <li className="font-bold pb-4 border-b border-gray-300">
              Uploading, organizing, and sharing documents
            </li>
          </ul>
        </div>
      </div>

      <Resources/>

      
    </>
  );
}

export default Sharepoint;

// Uploading, organizing, and sharing documents.
// Using libraries and lists for document management.
// Collaboration Tools
// Real-time co-authoring and editing.
// Creating and managing shared workspaces and calendars.
// Advanced Features
// Automating workflows with Power Automate.
// Integrating SharePoint with other Microsoft 365 applications.

// Benefits of Learning SharePoint
// Enhanced Collaboration:
// Streamline teamwork with centralized document sharing and real-time editing.
// Foster communication through integrated tools like Microsoft Teams.
// Improved Productivity:
// Automate repetitive tasks and processes.
// Efficiently manage documents and resources.
// Career Advancement:
// Gain a valuable skill set in high demand across various industries.
// Enhance your resume and professional profile with SharePoint expertise.

// Course Resources
// Interactive Tutorials:
// Step-by-step guides and video tutorials.
// Hands-on exercises to reinforce learning.
// Labs:
// Hands-on exercises to practice and reinforce learning.
// Supportive Community:
// Access to a community forum for discussing topics and sharing insights.
// Instructor support for questions and guidance.
//

// Duration: 6 weeks
// Format: Online, self-paced
// Certificate: Yes, upon completion
// Learn More-Link to microsoft sharepoint page
