import React from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Input, Button, Form, Radio } from 'antd'
import { Helmet } from 'react-helmet'
import _ from 'lodash'
import { editScreenshot } from 'actions/screenshot'

const mapStateToProps = ({ auth, screenshots }) => ({
  loading: auth.loading,
  screenshots,
})

const EditScreenshot = ({ loading, editScreenshot, screenshots }) => {
  const { id } = useParams()
  const screenshotItem = _.find(screenshots, '_id', id)

  const onFinish = ({ url, title, frequency }) => {
    editScreenshot({ url, title, frequency }, screenshotItem._id)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <Helmet title="Screenshots: Edit Screenshot" />
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
                initialValues={{
                  frequency: screenshotItem.frequency,
                  url: screenshotItem.url,
                  title: screenshotItem.title,
                }}
              >
                <h5 className="text-black mt-4">
                  <strong>Edit Screenshot</strong>
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
                      Update Screenshot
                    </Button>
                    <Link to={`/screenshots/${screenshotItem._id}`}>
                      <Button
                        style={{ width: 150 }}
                        type="default"
                        htmlType="submit"
                        className="mr-3"
                      >
                        Cancel
                      </Button>
                    </Link>
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

export default connect(mapStateToProps, { editScreenshot })(EditScreenshot)
