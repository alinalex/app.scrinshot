import React from 'react'
import { Helmet } from 'react-helmet'

const Dashboard = () => {
  return (
    <div>
      <Helmet title="Screenshot: Dashboard" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h5 className="text-black mt-4">
                <strong>Subscribe</strong>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
