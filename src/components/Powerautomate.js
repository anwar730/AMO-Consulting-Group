import React from 'react'
import { GoGoal } from "react-icons/go";

import Resources from "./Resources";

function Powerautomate() {
  return (
    <>
      <div className="container mx-auto  my-24 flex items-center justify-between  md:flex-row flex-col-reverse ">
        <div>
          <h1 className="font-bold text-2xl py-4">Microsoft Power Automate</h1>
          <p>
          Learn how to create automated workflows using Microsoft Power Automate
            <br /> to streamline your business processes, reduce manual tasks, and improve efficiency.

             

          </p>
          <a
            className="start-btn mt-5 mr-4"
            href="https://learn.microsoft.com/en-us/power-automate/"
            target="blank"
          >
            Learn More
          </a>
          <a
            className="start-btn mt-5"
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=EeE0QF5AFEWcUOAwYgqu_WbD0_OTVQ5GkKF2vVltsHxURTNWV1VDVkRVRE9RNExZTktDWlZNWE4zTS4u"
            target="blank"
          >
            Register Now
          </a>
        </div>
        <div>
          <img
            src="https://sharepointinterface.com/wp-content/uploads/2023/01/PALogo.png"
            className="h-72 rounded-lg"
          />
        </div>
      </div>

      <div className="container mx-auto my-40">
        <h1 className="font-bold text-2xl py-4 my-10 text-center">
          Objectives
        </h1>
        <div className="md:flex items-center justify-around">
          <div>
            <div className="flex items-center space-x-4 mt-3">
              <GoGoal className="size-8" />
              <h1 className="font-bold">
              Understand the basics of Power Automate and its applications.
              </h1>
            </div>
            <div className="flex items-center space-x-4 mt-3">
              <GoGoal className="size-8" />
              <h1 className="font-bold">
              Create automated workflows from templates or scratch.
              </h1>
            </div>
            <div className="flex items-center space-x-4  mt-3">
              <GoGoal className="size-8" />
              <h1 className="font-bold">
              Connect Power Automate with various services,<br/> including Microsoft 365, Dynamics 365, and third-party applications.
              </h1>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-4  mt-3">
              <GoGoal className="size-8" />
              <h1 className="font-bold">
              Use triggers, actions, and conditions to build sophisticated workflows.
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
              Monitor and manage workflows to ensure optimal performance.

              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-40">
        <h1 className="font-bold text-2xl py-4 my-10 text-center">
          Key Modules
        </h1>
        <div className="px-4 py-14 bg-white shadow-lg rounded-lg module-card">
          <h1 className="font-bold text-xl pb-6 text-center">Duration:4 Weeks</h1>
          <ul className="space-y-4">
            <li className="font-bold pb-4  border-b border-gray-200">
            Introduction to Power Automate
            </li>
            <li className="font-bold pb-4 border-b border-gray-300">
              Overview of Power Automate and its features
            </li>
            <li className="font-bold pb-4 border-b border-gray-300">
            Creating Workflows
            </li>
            <li className="font-bold pb-4 border-b border-gray-300">
            Advanced Flow Techniques
            </li>
            <li className="font-bold pb-4 border-b border-gray-300">
            Integration with Microsoft 365
            </li>
            <li className="font-bold pb-4 border-b border-gray-300">
            Best Practices and Use Cases
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
  )
}

export default Powerautomate
