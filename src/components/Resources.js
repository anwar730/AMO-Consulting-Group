import React from 'react'
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { LiaCertificateSolid } from "react-icons/lia";

function Resources() {
  return (
    <div className="container mx-auto my-24">
        <h1 className="font-bold text-2xl py-4 mt-10 text-center">
          Course Resources
        </h1>
        <div className="card-container md:flex items-center justify-around space-y-4">
          <div className=" resource-card flex flex-col items-center space-y-4">
            <FaChalkboardTeacher className="size-8" />
            <div>
              <h1 className="font-bold text-2xl"> Interactive Tutorials:</h1>
              <p>Step-by-step guides and video tutorials.</p>
              <p>Hands-on exercises to reinforce learning.</p>
              <p>Real-world scenarios to apply new skills.</p>
            </div>
          </div>
          <div className=" resource-card flex flex-col items-center space-y-4 ">
            <FaFileCode className="size-8" />
            <div>
              <h1 className="font-bold text-2xl"> Labs:</h1>
              <p>
                Hands-on exercises to practice <br />
                and reinforce learning.
              </p>
              <p>Real-world scenarios to apply new skills.</p>
            </div>
          </div>
          <div className="resource-card flex flex-col items-center space-y-4">
            <HiUserGroup className="size-8" />
            <div>
              <h1 className="font-bold text-2xl">Supportive Community:</h1>
              <p>
                Access to a community forum for discussing
                <br /> topics and sharing insights.
              </p>
              <p>Instructor support for questions and guidance.</p>
            </div>
          </div>
          <div className="resource-card flex flex-col items-center space-y-4">
            <LiaCertificateSolid className="size-8" />
            <div>
              <h1 className="font-bold text-2xl">Certification:</h1>
              <p> Earn a certificate upon successful completion.</p>
              <p> Showcase your SharePoint skills to potential <br/>employers.</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Resources
