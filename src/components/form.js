

import {react, useState } from "react"
import SignUpInfo from "./signUpinfo.js"
import PersonalInfo from "./personalinfo.js"
import Other from "./otherinfo.js"





function Form (){
  const [page, setPage]= useState(0)

  const formTitles =["Signup", "Personal Information", "Health history"]

  const displayPage =()=>{
    if (page === 0){
      return(
      <SignUpInfo/>
    )} else if(page===1){
      return(
      <PersonalInfo/>
    )}else {
      return (
      <Other/>
    )}
  }
  return(
    <div className="form bg-gray-100">
      <div className="progress-bar"></div>
      <div className="form-container">
      <div className="header">
        
      </div>
      <div className="body">{displayPage()}</div>
      {/* <div className="footer flex gap-8 bg-transparent">
        <button 
         disabled={page == 0}
        onClick={()=>{
          setPage((currpage)=> currpage-1)
        }} className="py-3 px-8 bg-green-500 text-green-100 font-bold rounded ">prev</button>
        <button
         disabled={page == formTitles.length - 1}
         onClick={()=>{
          setPage((currpage)=> currpage+1)
        }} className="py-3 px-8 bg-green-500 text-green-100 font-bold rounded">next</button>
      </div> */}
      </div>
      
    </div>
    
  )
}

export default Form