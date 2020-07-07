import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Select } from 'antd'
import { updateProfileDetails } from 'actions/user'

const { Option } = Select

const mapStateToProps = ({ timezone, auth }) => ({
  loading: auth.loading,
  user: auth.user,
  timezone: timezone.timezone,
})

const ProfileDetails = ({ timezone, user, loading, updateProfileDetails }) => {
  const onFinish = ({ timezone }) => {
    updateProfileDetails({ timezone })
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
              initialValues={{ timezone: user.timezone }}
            >
              <h5 className="text-black mt-4 mb-3">
                <strong>Profile Details</strong>
              </h5>
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="mb-4">
                    <Form.Item
                      name="timezone"
                      rules={[{ required: true, message: 'Please select your timezone' }]}
                      style={{ width: 300 }}
                    >
                      <Select>
                        {timezone.map((option) => (
                          <Option key={option.value} value={option.value}>
                            {option.text}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>
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

export default connect(mapStateToProps, { updateProfileDetails })(ProfileDetails)
