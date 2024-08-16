import React from 'react'

import { GoGoal } from "react-icons/go";
import powerbi from "../components/image/Power_BI_header.svg.png";
import Resources from "./Resources";

function Powerbi() {
  return (
    <>
      <div className="container p-6 mx-auto  my-24 flex items-center justify-between  md:flex-row flex-col-reverse ">
        <div>
          <h1 className="font-bold text-2xl py-4">Microsoft Power Bi</h1>
          <p>
          Master the art of data analysis and visualization with Microsoft Power BI.
            <br /> This course covers data collection, cleaning, and transformation,
            <br /> as well as creating compelling visual reports and dashboards.

              

          </p>
          <a
            className="start-btn mt-5 mr-4"
            href="https://learn.microsoft.com/en-us/power-bi/"
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
            src={powerbi}
            className="h-96 rounded-lg"
            alt="power-bi-image"
          />
        </div>
      </div>

      <div className="container p-6 mx-auto my-40">
        <h1 className="font-bold text-2xl py-4 my-10 text-center">
          Objectives
        </h1>
        <div className="md:flex items-center justify-around">
          <div>
            <div className="flex items-center space-x-4 mt-3">
              <GoGoal className="size-8" />
              <h1 className="font-bold">
              Understand the Power BI ecosystem and its components.

              </h1>
            </div>
            <div className="flex items-center space-x-4 mt-3">
              <GoGoal className="size-8" />
              <h1 className="font-bold">
              Collect, clean, and transform data from various sources.

              </h1>
            </div>
            <div className="flex items-center space-x-4  mt-3">
              <GoGoal className="size-8" />
              <h1 className="font-bold">
              Create interactive reports and dashboards using Power BI Desktop.

              </h1>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-4  mt-3">
              <GoGoal className="size-8" />
              <h1 className="font-bold">
              Use DAX (Data Analysis Expressions) to perform complex data calculations.

              </h1>
            </div>
            <div className="flex items-center space-x-4  mt-3">
              <GoGoal className="size-8" />
              <h1 className="font-bold">
              Share and collaborate on reports with Power BI Service.
              </h1>
            </div>
            <div className="flex items-center space-x-4  mt-3">
              <GoGoal className="size-8" />
              <h1 className="font-bold">
              Create interactive and visually compelling data visualizations.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-6 mx-auto my-40">
        <h1 className="font-bold text-2xl py-4 my-10 text-center">
          Key Modules
        </h1>
        <div className="px-4 py-14 bg-white shadow-lg rounded-lg module-card">
          <h1 className="font-bold text-xl pb-6 text-center">Duration:4 Weeks</h1>
          <ul className="space-y-4">
            <li className="font-bold pb-4  border-b border-gray-200">
            Introduction to Power BI

            </li>
            <li className="font-bold pb-4 border-b border-gray-300">
            Data Collection and Cleaning
            </li>
            <li className="font-bold pb-4 border-b border-gray-300">
            Data Visualization with Power BI

            </li>
            <li className="font-bold pb-4 border-b border-gray-300">
            DAX for Data Analysis

            </li>
            <li className="font-bold pb-4 border-b border-gray-300">
              Setting up SharePoint sites and subsites
            </li>
            <li className="font-bold pb-4 border-b border-gray-300">
            Sharing and Collaborating in Power BI
            </li>
            
          </ul>
        </div>
      </div>

      <Resources/>

      
    </>
  )
}

export default Powerbi
