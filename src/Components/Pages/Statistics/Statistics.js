import React from 'react'
import { Link } from 'react-router-dom'

const Statistics = () => {
    return (

        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <p>Statistics</p>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-md-8 mt-md-2 mb-4 mb-md-0">
                    <div className="panel p-4">
                        <p>Fund Returns</p>
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-auto mb-2 mb-md-0">
                                <div className="row">
                                    <div className="col-auto mb-3 px-2">
                                        <input type="radio" className="btn-check" name="fundr" id="fundr-all" checked autocomplete="off" />
                                        <label className="btn btn-outline-secondary" for="fundr-all">
                                            <div className="hstack gap-2">
                                                <div className="mt-1">ALL</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="col-auto mb-3 px-2">
                                        <input type="radio" className="btn-check" name="fundr" id="fundr-bnb" autocomplete="off" />
                                        <label className="btn btn-outline-secondary" HTfor="fundr-bnb">
                                            <div className="hstack gap-2">
                                                <div><img src="images/icon-bnb.svg" height="24" alt="icon-bnb" /></div>
                                                <div className="mt-1">BNB</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="col-auto mb-3 px-2">
                                        <input type="radio" className="btn-check" name="fundr" id="fundr-busd" autocomplete="off" />
                                        <label className="btn btn-outline-secondary" for="fundr-busd">
                                            <div className="hstack gap-2">
                                                <div><img src="images/icon-busd.svg" height="24" alt="icon-busd" /></div>
                                                <div className="mt-1">BUSD</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="col-auto mb-3 px-2">
                                        <input type="radio" className="btn-check" name="fundr" id="fundr-matic" autocomplete="off" />
                                        <label className="btn btn-outline-secondary" for="fundr-matic">
                                            <div className="hstack gap-2">
                                                <div><img src="images/icon-matic.svg" height="24" alt="icon-matic" /></div>
                                                <div className="mt-1">MATIC</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="col-auto mb-3 px-2">
                                        <input type="radio" className="btn-check" name="fundr" id="fundr-usdc" autocomplete="off" />
                                        <label className="btn btn-outline-secondary" for="fundr-usdc">
                                            <div className="hstack gap-2">
                                                <div><img src="images/icon-usdc.svg" height="24" alt="icon-usdc" /></div>
                                                <div className="mt-1">USDC</div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="fundreturnschart" style={{ height: 310 }}></div>
                    </div>
                </div>

                <div className="col-md-4 mt-md-2">
                    <div className="panel p-4">
                        <div className="row mb-2">
                            <div className="col-6">Average Daily Yield:</div>
                            <div className="col-6 text-end fw-semibold">1.18%</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-6">Contributions:</div>
                            <div className="col-6 text-end fw-semibold">$2,115,984</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-6">Investors:</div>
                            <div className="col-6 text-end fw-semibold">60</div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-6">Returns:</div>
                            <div className="col-6 text-end fw-semibold">$400.31</div>
                        </div>
                        <p>P&L HISTORY</p>
                        <div className="row mb-2">
                            <div className="col-6">Wed, Jan 11, 2023:</div>
                            <div className="col-6 text-end fw-semibold">1.62%</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-6">Tue, Jan 10, 2023:</div>
                            <div className="col-6 text-end fw-semibold">1.07%</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-6">Mon, Jan 9, 2023:</div>
                            <div className="col-6 text-end fw-semibold">1.28%</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-6">Sun, Jan 8, 2023:</div>
                            <div className="col-6 text-end fw-semibold">2.21%</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-6">Sat, Jan 7, 2023:</div>
                            <div className="col-6 text-end fw-semibold">1.28%</div>
                        </div>
                        <div className="row">
                            <div className="col-6">Fri, Jan 6, 2023:</div>
                            <div className="col-6 text-end fw-semibold">1.75%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {/* <p>Statistics</p> */}
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-md-4 mb-4">
                    <div className="panel p-4">
                        <p>Contract Balance(s)</p>
                        <h4 className="fw-normal mb-0">$1,343,248.17</h4>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="panel p-4">
                        <p>Total Deposits</p>
                        <h4 className="fw-normal mb-0">$2,478,845.28</h4>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="panel p-4">
                        <p>Total Capital Withdrawn</p>
                        <h4 className="fw-normal text-secondary mb-0">$0.00</h4>
                    </div>
                </div>
                <div className="col-md-4 mb-4 mb-md-0 mt-md-2">
                    <div className="panel p-4">
                        <p>Total Rewards Withdrawn</p>
                        <h4 className="fw-normal text-secondary mb-0">$0.00</h4>
                    </div>
                </div>
                <div className="col-md-4 mb-4 mb-md-0 mt-md-2">
                    <div className="panel p-4">
                        <p>All Claimable Rewards</p>
                        <h4 className="fw-normal text-secondary mb-0">$0.00</h4>
                    </div>
                </div>
                <div className="col-md-4 mt-md-2">
                    <div className="panel p-4">
                        <p>Capital + Rewards of Deposits</p>
                        <h4 className="fw-normal text-secondary mb-0">$0.00</h4>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Statistics
