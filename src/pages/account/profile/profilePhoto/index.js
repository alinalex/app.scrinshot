import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { message, Button, Upload, Form } from 'antd'

const mapStateToProps = ({ auth }) => ({ user: auth.user })

const ProfilePhoto = ({ user }) => {
  const uploadProps = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    name: 'file',
  }

  const handleProfilePhotoChange = (info) => {
    console.log(info)
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  }

  return (
    <Fragment>
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <Form hideRequiredMark layout="vertical" className="login-form">
              <h5 className="text-black mt-4 mb-3">
                <strong>Profile Photo</strong>
              </h5>
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="kit__utils__avatar kit__utils__avatar--size64 mb-3">
                    <img src={user.profilePhoto} alt="Profile" />
                  </div>
                  <div className="mb-4">
                    <Upload onChange={handleProfilePhotoChange} {...uploadProps}>
                      <Button style={{ width: 300 }}>
                        <i className="fe fe-upload mr-2" /> Click to Upload
                      </Button>
                    </Upload>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <Button style={{ width: 150 }} type="primary" htmlType="submit" className="mr-3">
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

export default connect(mapStateToProps)(ProfilePhoto)
