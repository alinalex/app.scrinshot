import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Input, Button, Form, Alert, Spin } from 'antd'
import { reset, checkReset } from 'actions/auth'
import style from '../style.module.scss'

const mapStateToProps = ({ auth }) => ({
  isResetTokenValid: auth.isResetTokenValid,
  loading: auth.loading,
})

const ResetForgotPassword = ({ loading, isResetTokenValid, reset, checkReset }) => {
  const { id } = useParams()

  useEffect(() => {
    checkReset(id)
  }, [id, checkReset])

  const onFinish = ({ email, password, confirmPassword }) => {
    reset({ email, password, confirmPassword })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      {isResetTokenValid === null ? (
        <Spin tip="Loading...">
          <Alert message="Info" description="Validation in progress..." type="info" />
        </Spin>
      ) : isResetTokenValid === true ? (
        <div className={`card ${style.container}`}>
          <div className="text-dark font-size-24 mb-4">
            <strong>Reset Password</strong>
          </div>
          <Form
            layout="vertical"
            hideRequiredMark
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="mb-4"
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please fill in your e-mail address' }]}
            >
              <Input size="large" placeholder="Email Address" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please fill in your password' }]}
            >
              <Input.Password size="large" placeholder="Password" />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              rules={[{ required: true, message: 'Please fill in your password' }]}
            >
              <Input.Password size="large" placeholder="Confirm Password" />
            </Form.Item>
            <Button
              type="primary"
              loading={loading}
              htmlType="submit"
              size="large"
              className="text-center w-100"
            >
              <strong>Reset my password</strong>
            </Button>
          </Form>
          <Link to="/auth/login" className="kit__utils__link font-size-16">
            <i className="fe fe-arrow-left mr-1 align-middle" />
            Go to Sign in
          </Link>
        </div>
      ) : (
        <div>
          <div className="mb-3">
            <Alert
              message="Error"
              description="Forgot password token is invalid or has expired"
              type="error"
              showIcon
            />
          </div>
          <Link to="/auth/login" className="kit__utils__link font-size-16">
            <i className="fe fe-arrow-left mr-1 align-middle" />
            Go to Sign in
          </Link>
        </div>
      )}
    </div>
  )
}

export default connect(mapStateToProps, { reset, checkReset })(ResetForgotPassword)
