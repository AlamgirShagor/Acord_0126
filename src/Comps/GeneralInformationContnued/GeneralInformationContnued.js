import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const GeneralInformationContnued = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h5>GENERAL INFORMATION (continued)</h5>
                    </div>
                    <div className="col-md-6">
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
                        <label htmlFor="">16. HAS APPLICANT BEEN ACTIVE IN OR IS CURRENTLY ACTIVE IN JOINT VENTURES?</label>
                        <textarea name="HAS APPLICAN" id="" class="form-control"  onChange={handleBlur} cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control mt-3" name=" HAS APPLICANT Y/N"  onChange={handleBlur} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">17. DO YOU LEASE EMPLOYEES TO OR FROM OTHER EMPLOYERS?</label>
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-7 mt-4">
                                    <label htmlFor="">LEASE TO/label</label>
                                        <input type="text" className="form-control my-2" name=" LEASE TO"  onChange={handleBlur} />
                                        <input type="text" className="form-control my-2" name=" LEASE TO2"  onChange={handleBlur} />
                                    </div>
                                    <div className="col-5">
                                    <label htmlFor="">WORKERS COMPENSATION COVERAGE CARRIED (Y/N)</label>
                                        <input type="text" className="form-control my-2" name="WORKERS COMPENSATION"  onChange={handleBlur} />
                                        <input type="text" className="form-control my-2" name="WORKERS COMPENSATION"  onChange={handleBlur} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-7 mt-4">
                                    <label htmlFor="">LEASE TO/label</label>
                                        <input type="text" className="form-control my-2" name=" LEASE TO"  onChange={handleBlur} />
                                        <input type="text" className="form-control my-2" name=" LEASE TO2"  onChange={handleBlur} />
                                    </div>
                                    <div className="col-5">
                                    <label htmlFor="">WORKERS COMPENSATION COVERAGE CARRIED (Y/N)</label>
                                        <input type="text" className="form-control my-2" name="WORKERS COMPENSATION"  onChange={handleBlur} />
                                        <input type="text" className="form-control my-2" name="WORKERS COMPENSATION"  onChange={handleBlur} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control mt-3" name=" HAS APPLICANT Y/N"  onChange={handleBlur} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">18. IS THERE A LABOR INTERCHANGE WITH ANY OTHER BUSINESS OR SUBSIDIARIES?</label>
                        <textarea name="IS THERE A " id="" class="form-control"  onChange={handleBlur} cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control mt-3" name="IS THERE A  Y/N"  onChange={handleBlur} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">19. ARE DAY CARE FACILITIES OPERATED OR CONTROLLED?</label>
                        <textarea name="ARE DAY CARE" id="" class="form-control"  onChange={handleBlur} cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control mt-3" name="ARE DAY CARE Y/N"  onChange={handleBlur} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">20. HAVE ANY CRIMES OCCURRED OR BEEN ATTEMPTED ON YOUR PREMISES WITHIN THE LAST THREE (3) YEARS?</label>
                        <textarea name="HAVE ANY CRIMES" id="" class="form-control"  onChange={handleBlur} cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control mt-3" name="HAVE ANY CRIMES Y/N"  onChange={handleBlur} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">21. IS THERE A FORMAL, WRITTEN SAFETY AND SECURITY POLICY IN EFFECT?</label>
                        <textarea name="IS THERE A" id="" class="form-control"  onChange={handleBlur} cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control mt-3" name="IS THERE A Y/N"  onChange={handleBlur} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">22. DOES THE BUSINESSES' PROMOTIONAL LITERATURE MAKE ANY REPRESENTATIONS ABOUT THE SAFETY OR SECURITY OF THE PREMISES?</label>
                        <textarea name="DOES THE BUSINESSES" id="" class="form-control"  onChange={handleBlur} cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control mt-3" name="DOES THE BUSINESSES A Y/N"  onChange={handleBlur} />
                    </div>
                </div>
                <div class="d-flex mt-2 justify-content-between">
                    <button  className="btn btn-success" onClick={()=>setStep(9) } style={{width: "100px"}}>Back</button>
                    <button  className="btn btn-success" onClick={()=>setStep(11) } style={{width: "100px"}}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default GeneralInformationContnued;