import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'
const FirstStep = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div class="form-row d-flex justify-content-end">
                    <div className="col-8 ">
                        <div className="row ">
                            <div className="col-7 text-right">
                                <h5>AGENCY CUSTOMER ID:</h5>
                            </div>
                            <div className="col-5">
                                <input
                                type="text"
                                name="AGENCY"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col text-center">
                        <h3>COMMERCIAL GENERAL LIABILITY SECTION</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                            <label htmlFor="AGENCY">AGENCY</label>
                            <input
                                id="AGENCY"
                                onChange={handleBlur}
                                type="text"
                                name="AGENCY"
                                class="form-control mb-2"
                            />
                    </div>
                    <div className="col-md-4">
                            <label htmlFor="CARRIER">CARRIER</label>
                            <input
                                id="CARRIER"
                                type="text"
                                onChange={handleBlur}
                                name="CARRIER"
                                class="form-control mb-2"
                            />
                    </div>
                    <div className="col-md-2">
                    <label htmlFor="NAIC CODE">NAIC CODE</label>
                            <input
                                id="NAIC CODE"
                                type="text"
                                onChange={handleBlur}
                                name="NAIC CODE"
                                class="form-control mb-2"
                            />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                            <label htmlFor="NAIC CODE">POLICY NUMBER</label>
                            <input
                                id="POLICY NUMBER"
                                type="text"
                                onChange={handleBlur}
                                name="POLICY NUMBER"
                                class="form-control mb-2"
                            />
                    </div>
                    <div className="col-md-2">
                            <label htmlFor="EFFECTIVE DATE">EFFECTIVE DATE</label>
                            <input
                                id="EFFECTIVE DATE"
                                type="date"
                                onChange={handleBlur}
                                name="EFFECTIVE DATE"
                                class="form-control mb-2"
                            />
                    </div>
                    <div className="col-md-6">
                            <label htmlFor="APPLICANT">APPLICANT / FIRST NAMED INSURED</label>
                            <input
                                id="APPLICANT"
                                type="text"
                                onChange={handleBlur}
                                name="APPLICANT"
                                class="form-control mb-2"
                            />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5>
                        IMPORTANT - If CLAIMS MADE is checked in the COVERAGE / LIMITS section below, this is an application for a claims-made policy. Read all provisions of the policy carefully.
                        </h5>
                    </div>
                </div>
                <button onClick={()=>setStep(2)}  className="btn btn-success ml-auto" style={{width: "100px", marginTop: "20px"}} >Next</button>
            </form>
        </div>
    );
};

export default FirstStep;