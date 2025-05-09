import PersonalInfromation from "@/Components/Settings/PersonalInfromation";
import Education from "@/Components/Settings/Education";
import Languages from "@/Components/Settings/Languages";
import Skills from "@/Components/Settings/Skills";
import SoftSkills from "@/Components/Settings/SoftSkills";
import WorkPreferences from "@/Components/Settings/WorkPreferences";
import ProfileEditor from "@/Components/Settings/ProfileImage";
import Experience from "@/Components/Settings/Experience";
import AdditionalInfo from "@/Components/Settings/AdditionalInfo";
import ForgetPassword from "@/Components/Common/ForgetPassword";
import { useState } from "react";



export default function Settings() {


  
  window.scrollTo({ top: 0, behavior: 'smooth', });


  // Forgot Password Modal
  const [forgotModal, setForgotModal] = useState(false);



  return (

    <>


      <main className="w-full h-auto pt-28 bg-slate-50/5">


        {/* User profile pic */}
        <ProfileEditor />


        {/* User Profile Form */}
        <div className="mx-auto md:max-w-7xl w-full  px-6 md:px-20 py-10 border mb-10" >


          <div className="space-y-12 container ">


            {/* Personal Information */}
            <PersonalInfromation />


            {/* Work Preferences */}
            <WorkPreferences />


            {/* Languages */}
            <Languages />


            {/* Education Form */}
            <Education />


            {/* Skills and Expertise */}
            <Skills />


            {/* Soft Skills */}
            <SoftSkills />



            {/* Experience */}
            <Experience />



            {/* Additional Information */}
            <AdditionalInfo />


            {/* Forget Password */}
            <div className="w-full flex justify-end">

              <a className="text-sm  hover:cursor-pointer text-blue-600 underline" onClick={() => setForgotModal(!forgotModal)}>Forget Password ?</a>

            </div>


            {/* Forget Password Modal */}
            <ForgetPassword isOpen={forgotModal} setIsOpen={setForgotModal} />

          </div>

        </div>


      </main >


    </>

  )

}
