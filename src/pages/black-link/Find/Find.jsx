import React from 'react'
import './Find.css'
import ContactPage from '../../../Components/Contact/Contact'
import WhyIDPCounsellors from './WhyIDPCounsellors'
import IdpOfficeList from './IdpOfficelist'
import StudyAbroadPromo from '../../white-link/Student_Essentials/StudentEssFrom/StudyAdroadPromo'

import IDP from '../../../Components/IdpStudents/IDP'

const Find = () => {
  return (
    <div>
      <WhyIDPCounsellors />
      <IdpOfficeList />
    
      <IDP />
      <StudyAbroadPromo />
      <ContactPage />
    </div>
  )
}

export default Find
