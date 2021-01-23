import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const EmployeeBenefits = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <h5>EMPLOYEE BENEFITS LIABILITY</h5>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-6">
                                <label>1. DEDUCTIBLE PER CLAIM</label>
                            </div>
                            <div className="col-6">
                            <input
                                id="DEDUCTIBLE"
                                type="text"
                                onChange={handleBlur}
                                name="DEDUCTIBLE"
                                class="form-control mb-2"
                            />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label>2. NUMBER OF EMPLOYEES:</label>
                            </div>
                            <div className="col-6">
                            <input
                                id="NUMBER"
                                type="text"
                                onChange={handleBlur}
                                name="NUMBER"
                                class="form-control mb-2"
                            />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-9">
                                <label>3. NUMBER OF EMPLOYEES COVERED BY EMPLOYEE BENEFITS PLANS:</label>
                            </div>
                            <div className="col-3">
                            <input
                                id="NUMBER"
                                type="text"
                                onChange={handleBlur}
                                name="NUMBER"
                                class="form-control mb-2"
                            />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-7">
                                <label>4. RETROACTIVE DATE:</label>
                            </div>
                            <div className="col-5">
                            <input
                                id="RETROACTIVE"
                                type="date"
                                onChange={handleBlur}
                                name="RETROACTIVE"
                                class="form-control mb-2"
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex mt-2 justify-content-between">
                    <button  className="btn btn-success" onClick={()=>setStep(4) } style={{width: "100px"}}>Back</button>
                    <button  className="btn btn-success" onClick={()=>setStep(6) } style={{width: "100px"}}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default EmployeeBenefits;