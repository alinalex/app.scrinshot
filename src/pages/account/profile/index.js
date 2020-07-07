import React from 'react'
import { Helmet } from 'react-helmet'
import PersonalInformation from './personalInformation'
// import ProfilePhoto from './profilePhoto'
import ProfileDetails from './profileDetails'

const Profile = () => {
  return (
    <div>
      <Helmet title="Account: Profile" />
      <div className="row">
        <PersonalInformation />
        {/* <ProfilePhoto /> */}
        <ProfileDetails />
      </div>
    </div>
  )
}

export default Profile
