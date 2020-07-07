import React, { useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { activateUser } from 'actions/auth'

const mapStateToProps = ({ auth }) => ({
  auth,
})

const Activate = ({ auth: { isActivated }, activateUser }) => {
  const { id } = useParams()

  useEffect(() => {
    if (!isActivated) activateUser(id)
  }, [id, activateUser, isActivated])

  return <Redirect to="/screenshots/dashboard" />
}

export default connect(mapStateToProps, { activateUser })(Activate)
