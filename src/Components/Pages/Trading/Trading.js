import React from 'react'
import { Link } from 'react-router-dom'
// import Bnb from '../../web3/Bnb'

const Trading = (props) => {
    return (
        <div style={{ marginTop: "80px" }}>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-12">
                        <p>Trading Bot: Earn Daily Yield</p>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-3 mb-4 mb-md-0">
                        <div className="panel p-4">
                            <div className="hstack mb-3">
                                <div className="fs-5 fw-semibold">
                                    <div className="hstack gap-2">
                                        <div><img src="images\icon-bnb.svg" alt="icon.bnb" /></div>
                                        <div className="mt-1">BNB</div>
                                    </div>
                                </div>
                                <div className="ms-auto text-muted"><small>{props.matic}BNB</small></div>
                            </div>
                            <small className="text-muted">Network: Binance Smart Chain</small>
                            <input type="text" className="form-control mb-3 mt-1" id="inputAmount" placeholder="0.00" />
                            <div className="text-center">
                                <Link href="#" className="btn btn-secondary col-12 col-md-6 mx-auto pt-2">Stake</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4 mb-md-0">
                        <div className="panel p-4">
                            <div className="hstack mb-3">
                                <div className="fs-5 fw-semibold">
                                    <div className="hstack gap-2">
                                        <div><img src="images\icon-busd.svg" alt="icon-busd" /></div>
                                        <div className="mt-1"> BUSD</div>
                                    </div>
                                </div>
                                <div className="ms-auto text-muted"><small>789.43 BUSD</small></div>
                            </div>
                            <small className="text-muted">Network: Binance Smart Chain</small>
                            <div style={{ height: 63, lineHeight: 4 }}><small>Approve Wallet to Get Started</small></div>
                            <div className="text-center">
                                <Link href="#" className="btn btn-dark col-12 col-md-6 mx-auto pt-2">Approve</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4 mb-md-0">
                        <div className="panel p-4">
                            <div className="hstack mb-3">
                                <div className="fs-5 fw-semibold">
                                    <div className="hstack gap-2">
                                        <div><img src="images\icon-matic.svg" alt="icon-matic" /></div>
                                        <div className="mt-1"> MATIC</div>
                                    </div>
                                </div>
                                <div className="ms-auto text-muted"><small>{props.matic} MATIC</small></div>
                            </div>
                            <small className="text-muted">Network: Polygon</small>
                            <input type="text" className="form-control mb-3 mt-1" id="inputAmount" placeholder="0.00" />
                            <div className="text-center">
                                <Link href="#" className="btn btn-secondary col-12 col-md-6 mx-auto pt-2">Stake</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4 mb-md-0">
                        <div className="panel p-4">
                            <div className="hstack mb-3">
                                <div className="fs-5 fw-semibold">
                                    <div className="hstack gap-2">
                                        <div><img src="images/icon-usdc.svg" alt="icon-usdc" /></div>
                                        <div className="mt-1"> USDC</div>
                                    </div>
                                </div>
                                <div className="ms-auto text-muted"><small>927.23 USDC</small></div>
                            </div>
                            <small className="text-muted">Network: Polygon</small>
                            <div style={{ height: 63, lineHeight: 4 }}><small>Approve Wallet to Get Started</small></div>
                            <div className="text-center">
                                <Link href="#" className="btn btn-dark col-12 col-md-6 mx-auto pt-2">Approve</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Trading
