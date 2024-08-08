import React from 'react'
import { GoGoal } from "react-icons/go";

import Resources from "./Resources";

function Powerapps() {
  return (
    <>
      <div className="container mx-auto  my-24 flex items-center justify-between  md:flex-row flex-col-reverse ">
        <div>
          <h1 className="font-bold text-2xl py-4">Microsoft Power Apps</h1>
          <p>
          Gain the skills to build custom applications using Microsoft Power Apps. 
            <br />  This course covers everything from designing user interfaces to creating 
            <br /> data-driven applications and integrating them with other Microsoft services.

           

          </p>
          <a
            className="start-btn mt-5 mr-4"
            href="https://learn.microsoft.com/en-us/power-apps/"
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
            src="https://dynamics-chronicles.com/sites/default/files/styles/max_1300x1300/public/2022-07/59177e6a023a9286d0e583c849fb3bf4_0.jpg?itok=nE8zGQjB"
            className="h-96 rounded-lg"
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
              Understand the fundamentals of Power Apps.
              </h1>
            </div>
            <div className="flex items-center space-x-4 mt-3">
              <GoGoal className="size-8" />
              <h1 className="font-bold">
              Understand Power Apps role in the Power Platform.
              </h1>
            </div>
            <div className="flex items-center space-x-4  mt-3">
              <GoGoal className="size-8" />
              <h1 className="font-bold">
              Design user-friendly interfaces with Power Apps Studio.
              </h1>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-4  mt-3">
              <GoGoal className="size-8" />
              <h1 className="font-bold">
              Create and manage data connections using Microsoft Dataverse.
              </h1>
            </div>
            <div className="flex items-center space-x-4  mt-3">
              <GoGoal className="size-8" />
              <h1 className="font-bold">
              Develop data-driven applications with complex logic and formulas.
              </h1>
            </div>
            <div className="flex items-center space-x-4  mt-3">
              <GoGoal className="size-8" />
              <h1 className="font-bold">
              Integrate Power Apps with other Microsoft 365 and third-party services.
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
          <h1 className="font-bold text-xl pb-6 text-center">Duration:12 Weeks</h1>
          <ul className="space-y-4">
            <li className="font-bold pb-4  border-b border-gray-200">
            Introduction to Power Apps

            </li>
            <li className="font-bold pb-4 border-b border-gray-300">
            Designing User Interfaces

            </li>
            <li className="font-bold pb-4 border-b border-gray-300">
            Creating Data-Driven Apps
            </li>
            <li className="font-bold pb-4 border-b border-gray-300">
            Integration with Microsoft 365 and Dataverse

            </li>
            <li className="font-bold pb-4 border-b border-gray-300">
            Advanced Features and Customizations
            </li>
            
          </ul>
        </div>
      </div>

      <Resources/>

      
    </>
  )
}

export default Powerapps
