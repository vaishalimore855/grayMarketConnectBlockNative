import React from 'react'
import { Link } from 'react-router-dom'
const Calcutate = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p>Calcutate Earnings</p>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="panel">
              <div className="p-4">
                <div className="row mb-4">
                  <div className="col-md-6">
                    <p className="mb-2">Amount ($)</p>
                    <form className="row mb-4">
                      <div className="col-12">
                        <input className="form-control text-secondary" type="text" value="100" aria-label="default input example" />
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6">
                    <p className="mb-2">Average Daily Interest Rate</p>
                    <form className="row">
                      <div className="col-12">
                        <input className="form-control text-secondary" type="text" value="0.00%" aria-label="default input example" />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label for="customRange2" className="form-label">Held for Peroid</label>
                  </div>
                  <div className="col-md-10 mb-4">
                    <input type="range" className="form-range" min="0" max="52" step="1" id="customRange2" />
                  </div>
                  <div className="col-md-2 mb-4">
                    <h4 className="fw-normal mb-0">2 Months</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p className="mb-2">Percent to Reinvest (%)</p>
                  </div>
                  <div className="col-md-6">
                    <form className="row mb-4">
                      <div className="col-12">
                        <input className="form-control text-secondary" type="text" value="100" aria-label="default input example" />
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6">
                    <form className="row">
                      <div className="col-12 col-md-4">
                        <select id="inputState" className="form-select text-center text-secondary">
                          <option selected>Daily</option>
                          <option>...</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="bg-secondary bg-opacity-10 p-4 rounded-bottom-4">
                <div className="row">

                  <div className="col-md-2 ms-auto mb-4">
                    <p>Projected Return</p>
                    <h4 className="fw-normal mb-0">$-5.00</h4>
                  </div>
                  <div className="col-md-10 mt-2 mt-md-0">
                    <p>Projected Value</p>
                    <h4 className="fw-normal mb-0">$95.00</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    

    </>
  )
}

export default Calcutate
