import React from 'react'
import { Link, useParams, Redirect } from 'react-router-dom'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import _ from 'lodash'
import { deleteScreenshot } from 'actions/screenshot'

const mapStateToProps = ({ screenshots, auth }) => ({ screenshots, loading: auth.loading })

const getScreenshot = ({ screenshots, deleteScreenshot, loading }) => {
  const { id } = useParams()
  const screenshotItem = _.find(screenshots, '_id', id)

  if (screenshotItem === undefined) return <Redirect to="/auth/404" />

  const onDeleteScreenshot = () => {
    deleteScreenshot(id)
  }

  return (
    <div>
      <Helmet title={`Screenhots: ${screenshotItem.title}`} />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h5 className="text-black mt-4">
                <strong>{screenshotItem.url}</strong>
              </h5>
              <h5 className="text-black mt-4">
                <strong>{screenshotItem.title}</strong>
              </h5>
            </div>
          </div>
          <Link to={`/screenshots/${screenshotItem._id}/edit`}>
            <Button style={{ width: 150 }} type="default" className="mr-3">
              Edit Screenshot
            </Button>
          </Link>
          <Button
            style={{ width: 150 }}
            type="danger"
            onClick={onDeleteScreenshot}
            className="mr-3"
            loading={loading}
          >
            Delete Screenshot
          </Button>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, { deleteScreenshot })(getScreenshot)
