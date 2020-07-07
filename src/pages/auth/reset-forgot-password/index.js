import React from 'react'
import { Helmet } from 'react-helmet'
import ResetForgotPassword from 'components/cleanui/system/Auth/ResetForgotPassword'

const SystemResetForgotPassword = () => {
  return (
    <div>
      <Helmet title="Reset Password" />
      <ResetForgotPassword />
    </div>
  )
}

export default SystemResetForgotPassword
