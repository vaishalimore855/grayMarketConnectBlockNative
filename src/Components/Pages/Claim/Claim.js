import React from 'react'
import { Link } from 'react-router-dom'
const Claim = () => {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <p>Claim</p>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-8 mb-4 mb-md-0 mt-md-2">
                        <div className="panel p-4">
                            <div className="row mb-2">
                                <div className="col-10 col-md-auto mb-2 mb-md-0">
                                    <div className="row">
                                        <div className="col-auto mb-3 px-2">
                                            <input type="radio" className="btn-check" name="claim" id="claim-bnb" autocomplete="off" />
                                            <label className="btn btn-outline-secondary" for="claim-bnb">
                                                <div className="hstack gap-2">
                                                    <div><img src="images/icon-bnb.svg" height="24" alt="icon-bnb" /></div>
                                                    <div className="mt-1">BNB</div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="col-auto mb-3 px-2">
                                            <input type="radio" className="btn-check" name="claim" id="claim-busd" autocomplete="off" />
                                            <label className="btn btn-outline-secondary" for="claim-busd">
                                                <div className="hstack gap-2">
                                                    <div><img src="images/icon-busd.svg" height="24" alt="icon-busd" /></div>
                                                    <div className="mt-1">BUSD</div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="col-auto mb-3 px-2">
                                            <input type="radio" className="btn-check" name="claim" id="claim-matic" autocomplete="off" />
                                            <label className="btn btn-outline-secondary" for="claim-matic">
                                                <div className="hstack gap-2">
                                                    <div><img src="images/icon-matic.svg" height="24" alt="icon-matic" /></div>
                                                    <div className="mt-1">MATIC</div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="col-auto mb-3 px-2">
                                            <input type="radio" className="btn-check" name="claim" id="claim-usdc" autocomplete="off" />
                                            <label className="btn btn-outline-secondary" for="claim-usdc">
                                                <div className="hstack gap-2">
                                                    <div><img src="images/icon-usdc.svg" height="24" alt="icon-usdc" /></div>
                                                    <div className="mt-1">USDC</div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 col-md-auto ms-md-auto">
                                    <span className="text-muted">0 BNB</span>
                                </div>
                            </div>
                            <form className="row g-3">
                                <div className="col-12 mb-2">
                                    <input type="text" className="form-control" id="inputAmount" placeholder="0.00" />
                                </div>
                                <div className="d-grid gap-2 col-6 col-md-2 mx-auto">
                                    <Link href="#" className="btn btn-secondary pt-2">Claim</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4 mt-md-2">
                        <div className="panel p-4">
                            <p>REWARDS</p>
                            <div className="row mb-2">
                                <div className="col-6">Unclaimed Rewards:</div>
                                <div className="col-6 text-end fw-semibold">0.0000 BNB</div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-6">Deposited Capital:</div>
                                <div className="col-6 text-end fw-semibold">0.0000 BNB</div>
                            </div>
                            <div className="row">
                                <div className="col-6">TOTAL VALUE:</div>
                                <div className="col-6 text-end fw-semibold">0.0000 BNB</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Claim
