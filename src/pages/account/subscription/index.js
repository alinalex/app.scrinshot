import React from 'react'
import { Helmet } from 'react-helmet'

const Subscription = () => {
  return (
    <div>
      <Helmet title="Account: Subscription" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h5 className="text-black mt-4 mb-3">
                <strong>Subscribe</strong>
              </h5>
              <div className="row">
                <div className="col-lg-12">
                  <h6>
                    <span className="text-muted">
                      You are not subscribed to a plan. You are currently on a free trial.
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription
