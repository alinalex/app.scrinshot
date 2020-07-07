import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Input, Button, Form } from 'antd'
import { forgot } from 'actions/auth'
import style from '../style.module.scss'

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
})

const ForgotPassword = ({ forgot, loading }) => {
  const [form] = Form.useForm()

  const onFinish = ({ email }) => {
    forgot(email)
    form.resetFields()
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
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
          form={form}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please fill in your e-mail address' }]}
          >
            <Input size="large" placeholder="Email Address" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            size="large"
            className="text-center w-100"
          >
            <strong>Send password reset link</strong>
          </Button>
        </Form>
        <Link to="/auth/login" className="kit__utils__link font-size-16">
          <i className="fe fe-arrow-left mr-1 align-middle" />
          Go to Sign in
        </Link>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, { forgot })(ForgotPassword)
