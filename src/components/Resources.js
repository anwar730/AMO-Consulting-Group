import React from 'react'
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { LiaCertificateSolid } from "react-icons/lia";

function Resources() {
  return (
    <div className="container p-6 mx-auto my-40">
  <h1 className="text-center font-bold text-2xl pb-8">Course Resources</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="resource-card bg-white p-6 rounded-lg ">
      <FaChalkboardTeacher className="text-4xl mb-4 mx-auto" />
      <h2 className="font-bold text-xl mb-2 text-center">Interactive Tutorials:</h2>
      <p className="mb-2 text-center">Step-by-step guides and video tutorials.</p>
      <p className="mb-2 text-center">Hands-on exercises to reinforce learning.</p>
      <p className="text-center">Real-world scenarios to apply new skills.</p>
    </div>
    <div className="bg-white resource-card p-6 rounded-lg ">
      <FaFileCode className="text-4xl mb-4 mx-auto" />
      <h2 className="font-bold text-xl mb-2 text-center">Labs:</h2>
      <p className="mb-2 text-center">Hands-on exercises to practice and reinforce learning.</p>
      <p className="text-center">Real-world scenarios to apply new skills.</p>
    </div>
    <div className="bg-white resource-card p-6 rounded-lg ">
      <HiUserGroup className="text-4xl mb-4 mx-auto" />
      <h2 className="font-bold text-xl mb-2 text-center">Supportive Community:</h2>
      <p className="mb-2 text-center">Access to a community forum for discussing topics and sharing insights.</p>
      <p className="text-center">Instructor support for questions and guidance.</p>
    </div>
    <div className="resource-card bg-white p-6 rounded-lg ">
      <LiaCertificateSolid className="text-4xl mb-4 mx-auto" />
      <h2 className="font-bold text-xl mb-2 text-center">Certification:</h2>
      <p className="mb-2 text-center">Earn a certificate upon successful completion.</p>
      <p className="text-center">Showcase your SharePoint skills to potential employers.</p>
    </div>
  </div>
</div>

  )
}

export default Resources
