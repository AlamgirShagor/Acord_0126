import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const Contractors = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col-6">
                        <h5>CONTRACTORS</h5>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                <h6>AGENCY CUSTOMER ID:</h6>
                            </div>
                            <div className="col-8">
                                <input
                                    type="text"
                                    onChange={handleBlur}
                                    name="AGENCY CUSTOMER ID"
                                    class="form-control mb-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>EXPLAIN ALL "YES" RESPONSES (For all past or present operations)</h6>
                    </div>
                    <div className="col-1">
                        <h6>Y / N</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">1. DOES APPLICANT DRAW PLANS, DESIGNS, OR SPECIFICATIONS FOR OTHERS?</label>
                        <textarea name="DOES APPLICANT" id="" class="form-control" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                                <input
                                    type="text"
                                    onChange={handleBlur}
                                    name="DOES APPLICANT y/n"
                                    class="form-control my-3"
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">2. DO ANY OPERATIONS INCLUDE BLASTING OR UTILIZE OR STORE EXPLOSIVE MATERIAL?</label>
                        <textarea name="DO ANY" id="" class="form-control" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                                <input
                                    type="text"
                                    onChange={handleBlur}
                                    name="DO ANY y/n"
                                    class="form-control my-3"
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">3. DO ANY OPERATIONS INCLUDE EXCAVATION, TUNNELING, UNDERGROUND WORK OR EARTH MOVING?</label>
                        <textarea name="DO ANY OPERATIONS" id="" class="form-control" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                                <input
                                    type="text"
                                    onChange={handleBlur}
                                    name="DO ANY OPERATIONS y/n"
                                    class="form-control my-3"
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">4. DO YOUR SUBCONTRACTORS CARRY COVERAGES OR LIMITS LESS THAN YOURS?</label>
                        <textarea name="DO YOUR SUBCONTRACTORS" id="" class="form-control" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                                <input
                                    type="text"
                                    onChange={handleBlur}
                                    name="DO YOUR SUBCONTRACTORS y/n"
                                    class="form-control my-3"
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">5. ARE SUBCONTRACTORS ALLOWED TO WORK WITHOUT PROVIDING YOU WITH A CERTIFICATE OF INSURANCE?</label>
                        <textarea name="ARE SUBCONTRACTORS" id="" class="form-control" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                                <input
                                    type="text"
                                    onChange={handleBlur}
                                    name="ARE SUBCONTRACTORS y/n"
                                    class="form-control my-3"
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">6. DOES APPLICANT LEASE EQUIPMENT TO OTHERS WITH OR WITHOUT OPERATORS?</label>
                        <textarea name="DOES APPLICANT" id="" class="form-control" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                                <input
                                    type="text"
                                    onChange={handleBlur}
                                    name="DOES APPLICANT y/n"
                                    class="form-control my-3"
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <h6 style={{paddingTop: "15px"}}>DESCRIBE THE TYPE OF WORK SUBCONTRACTED</h6>
                    </div>
                    <div className="col-8">
                        <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                    <h6 style={{fontSize: "14px", paddingTop: "15px"}}>$ PAID TO SUB-CONTRACTORS:</h6>
                                </div>
                                <div className="col">
                                <input
                                    type="text"
                                    onChange={handleBlur}
                                    name="AID TO SUB-CONTRACTORS"
                                    class="form-control my-3"
                                    />
                                    </div>
                                </div>
                                </div>

                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                    <h6 style={{fontSize: "14px", paddingTop: "15px"}}>% OF WORK SUBCONTRACTED:</h6>
                                </div>
                                <div className="col">
                                <input
                                    type="text"
                                    onChange={handleBlur}
                                    name="AID TO SUB-CONTRACTORS"
                                    class="form-control my-3"
                                    />
                                    </div>
                                </div>
                                </div>

                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                    <h6 style={{fontSize: "14px", paddingTop: "15px"}}># FULL- TIME STAFF:</h6>
                                </div>
                                <div className="col">
                                <input
                                    type="text"
                                    onChange={handleBlur}
                                    name="TIME STAFF"
                                    class="form-control my-3"
                                    />
                                    </div>
                                </div>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                    <h6 style={{fontSize: "14px", paddingTop: "15px"}}># PART-TIME STAFF:</h6>
                                </div>
                                <div className="col">
                                <input
                                    type="text"
                                    onChange={handleBlur}
                                    name="TIME STAFF"
                                    class="form-control my-3"
                                    />
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <textarea name="DESCRIBE" className="form-control " id="" cols="30" rows="4"></textarea>
                    </div>
                </div>
                <div class="d-flex mt-2 justify-content-between">
                    <button  className="btn btn-success" onClick={()=>setStep(5) } style={{width: "100px"}}>Back</button>
                    <button  className="btn btn-success" onClick={()=>setStep(7) } style={{width: "100px"}}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default Contractors;