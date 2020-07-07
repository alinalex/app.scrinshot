import React from 'react'
import { connect } from 'react-redux'
import { Input, Button, Form, Select } from 'antd'
import { Link } from 'react-router-dom'
import { register } from 'actions/auth'
import style from '../style.module.scss'

const { Option } = Select

const mapStateToProps = ({ settings, timezone, auth }) => ({
  logo: settings.logo,
  timezone: timezone.timezone,
  loading: auth.loading,
})

const Register = ({ logo, timezone, register, loading }) => {
  const onFinish = ({ name, email, password, confirmPassword, timezone }) => {
    register({ name, email, password, confirmPassword, timezone })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <div className={`card ${style.container}`}>
        <div className="text-dark font-size-24 mb-4">
          <strong>Create your {logo} account</strong>
        </div>
        <Form
          layout="vertical"
          hideRequiredMark
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{ timezone: 'Europe/Bucharest' }}
          className="mb-4"
        >
          <Form.Item name="name" rules={[{ required: true, message: 'Please fill in your name' }]}>
            <Input size="large" placeholder="Full Name" />
          </Form.Item>
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
          <Form.Item
            name="timezone"
            rules={[{ required: true, message: 'Please select your timezone' }]}
          >
            <Select>
              {timezone.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.text}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Button
            type="primary"
            loading={loading}
            htmlType="submit"
            size="large"
            className="text-center w-100"
          >
            <strong>Sign up</strong>
          </Button>
        </Form>
        <div>
          <span className="mr-1">By signing up, you agree to the</span>
          <a href="#" onClick={(e) => e.preventDefault()} className="kit__utils__link">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" onClick={(e) => e.preventDefault()} className="kit__utils__link">
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="text-center pt-2 mb-auto">
        <span className="mr-2">Already have an account?</span>
        <Link to="/auth/login" className="kit__utils__link font-size-16">
          Sign in
        </Link>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, { register })(Register)
