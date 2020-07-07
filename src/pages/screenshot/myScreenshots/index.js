import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import style from './style.module.scss'

const mapStateToProps = ({ screenshots }) => ({ screenshots })

const MyScreenshots = ({ screenshots }) => {
  const assetSrc = (unprocessedSrc) => {
    return unprocessedSrc.substring(
      unprocessedSrc.lastIndexOf('resources') - 1,
      unprocessedSrc.length,
    )
  }

  return (
    <div>
      <Helmet title="Screenhots: My Screenshots" />
      <div className="row">
        <div className="col-lg-12">
          <h5 className="text-black mb-4">
            <strong>My Screenshots</strong>
          </h5>
          <div className="mb-4">
            <Link to="/screenshots/add">
              <Button style={{ width: 150 }} type="primary" className="mr-3">
                Add Screenshot
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        {screenshots.map((screenshot) => (
          <div className="col-lg-4" key={screenshot._id}>
            <Link to={`/screenshots/${screenshot._id}`}>
              <div className="card">
                <div className="card-body">
                  <h5 className="text-black mt-3">
                    <strong>{screenshot.title}</strong>
                  </h5>
                  <p className="mt-2 mb-2">
                    URL: <strong>{screenshot.url}</strong>
                  </p>
                  <p className="mt-2 mb-2">
                    Status: <strong>{screenshot.status ? 'Running' : 'Paused'}</strong>
                  </p>
                  {screenshot.error.length > 0 && (
                    <p className="mt-2 mb-4">
                      Error: <strong>{screenshot.error}</strong>
                    </p>
                  )}
                  <div
                    className={`${style.screenshotTaste} rounded overflow-hidden position-relative`}
                  >
                    <img
                      src={
                        screenshot.images.length > 0
                          ? assetSrc(screenshot.images[0].path)
                          : '/resources/images/skeleton.png'
                      }
                      alt="screenshot"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(MyScreenshots)
