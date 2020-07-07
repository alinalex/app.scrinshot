import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Input, Button, Form } from 'antd'
import { updatePersonalInfo } from 'actions/user'

const mapStateToProps = ({ auth }) => ({ user: auth.user, loading: auth.loading })

const PersonalInformation = ({ user, loading, updatePersonalInfo }) => {
  const onFinish = ({ name, email }) => {
    updatePersonalInfo({ name, email })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Fragment>
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <Form
              hideRequiredMark
              layout="vertical"
              className="login-form"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={{ name: user.name, email: user.email }}
            >
              <h5 className="text-black mt-4">
                <strong>Personal Information</strong>
              </h5>
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <Form.Item
                    name="name"
                    label="Name"
                    style={{ width: 300 }}
                    rules={[{ required: true, message: 'Please fill in your name' }]}
                  >
                    <Input placeholder="Name" />
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <Form.Item
                    name="email"
                    label="Email"
                    style={{ width: 300 }}
                    rules={[{ required: true, message: 'Please fill in your e-mail' }]}
                  >
                    <Input placeholder="Email" />
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
    </Fragment>
  )
}

export default connect(mapStateToProps, { updatePersonalInfo })(PersonalInformation)
