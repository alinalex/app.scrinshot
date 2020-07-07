import React from 'react'
import { connect } from 'react-redux'
import { Input, Button, Form, Radio } from 'antd'
import { Helmet } from 'react-helmet'
import { addScreenshot } from 'actions/screenshot'

const mapStateToProps = ({ auth }) => ({ loading: auth.loading })

const Create = ({ loading, addScreenshot }) => {
  const onFinish = ({ url, title, frequency }) => {
    addScreenshot({ url, title, frequency })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <Helmet title="Screenshots: Add Screenshot" />
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
                initialValues={{ frequency: 'daily' }}
              >
                <h5 className="text-black mt-4">
                  <strong>Add Screenshot</strong>
                </h5>
                <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <Form.Item
                      name="url"
                      label="Website URL"
                      rules={[{ required: true, message: 'Please fill in the website URL' }]}
                    >
                      <Input placeholder="The URL of the website" />
                    </Form.Item>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <Form.Item
                      name="title"
                      label="Title"
                      rules={[
                        { required: true, message: 'Please fill in the title of your website' },
                      ]}
                    >
                      <Input placeholder="Your custom title for this website" />
                    </Form.Item>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <Form.Item
                      name="frequency"
                      label="Frequency"
                      rules={[
                        {
                          required: true,
                          message: 'Please choose a frequency for your screenshot',
                        },
                      ]}
                    >
                      <Radio.Group>
                        <Radio value="daily">Every day</Radio>
                        <br />
                        <Radio value="weekly">Every week</Radio>
                        <br />
                        <Radio value="monthly">Every month</Radio>
                      </Radio.Group>
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
                      Add Screenshot
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

export default connect(mapStateToProps, { addScreenshot })(Create)
