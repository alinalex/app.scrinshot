import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Input, Button, Form } from 'antd'
import { updatePassword, deleteAccount } from 'actions/user'

const mapStateToProps = ({ auth }) => ({ loading: auth.loading })

const Security = ({ updatePassword, deleteAccount, loading }) => {
  const [form] = Form.useForm()

  const onFinish = ({ currentPassword, password, confirmPassword }) => {
    updatePassword({ currentPassword, password, confirmPassword })
    form.resetFields()
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <Helmet title="Account: Security" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <Form
                hideRequiredMark
                layout="vertical"
                className="login-form"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                form={form}
              >
                <h5 className="text-black mt-4">
                  <strong>Update Password</strong>
                </h5>
                <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <Form.Item
                      name="currentPassword"
                      label="Current Password"
                      style={{ width: 300 }}
                      rules={[{ required: true, message: 'Please fill in your current password' }]}
                    >
                      <Input.Password placeholder="Current password" />
                    </Form.Item>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <Form.Item
                      name="password"
                      label="Password"
                      style={{ width: 300 }}
                      rules={[{ required: true, message: 'Please fill in your password' }]}
                    >
                      <Input.Password placeholder="Password" />
                    </Form.Item>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <Form.Item
                      name="confirmPassword"
                      label="Confirm Password"
                      style={{ width: 300 }}
                      rules={[{ required: true, message: 'Please fill in your password' }]}
                    >
                      <Input.Password placeholder="Confirm Password" />
                    </Form.Item>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <Button
                      style={{ width: 150 }}
                      type="primary"
                      htmlType="submit"
                      className="mr-3"
                      loading={loading}
                    >
                      Update
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <Form layout="vertical" className="login-form">
                <h5 className="text-black mt-4 mb-3">
                  <strong>Delete Account</strong>
                </h5>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-4">
                      <h6>
                        <span className="text-muted">
                          Warning! Clicking the button below will delete your account and all
                          associated data (URLs, screenshots, settings, and more). Once deleted, it
                          cannot be restored.
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <Button
                      onClick={deleteAccount}
                      style={{ width: 150 }}
                      type="danger"
                      className="mr-3"
                    >
                      Delete Account
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, { updatePassword, deleteAccount })(Security)
