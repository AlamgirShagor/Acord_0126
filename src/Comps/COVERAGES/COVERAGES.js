import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const COVERAGES = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col-md-4">
                        <h5>COVERAGES</h5>
                    </div>
                    <div className="col-md-8">
                        <h5>LIMITS</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div class="custom-control custom-checkbox my-3">
                            <input type="checkbox" onChange={handleBlur} name="COMMERCIAL GENERAL LIABILITY" class="custom-control-input" value="COMMERCIAL GENERAL LIABILITY" id="COMMERCIAL"/>
                            <label class="custom-control-label" for="COMMERCIAL"> <strong>COMMERCIAL GENERAL LIABILITY</strong> </label>
                        </div>
                        <div className="row ml-2">
                            <div className="col-6">
                                <div class="custom-control custom-checkbox my-2">
                                    <input onChange={handleBlur} type="checkbox" name="CLAIMS MADE" class="custom-control-input" value="CLAIMS MADE" id="CLAIMS MADE"/>
                                    <label class="custom-control-label" for="CLAIMS MADE">CLAIMS MADE</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div class="custom-control custom-checkbox my-2">
                                    <input onChange={handleBlur} type="checkbox" name="OCCURRENCE" class="custom-control-input" value="OCCURRENCE" id="OCCURRENCE"/>
                                    <label class="custom-control-label" for="OCCURRENCE">OCCURRENCE</label>
                                </div>
                            </div>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="OWNER'S & CONTRACTOR'S PROTECTIVE" class="custom-control-input" value="OWNER'S & CONTRACTOR'S PROTECTIVE" id="OWNER"/>
                            <label class="custom-control-label" for="OWNER"> <strong>OWNER'S & CONTRACTOR'S PROTECTIVE</strong> </label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="OWNER'S & CONTRACTOR'S PROTECTIVE" class=" mt-1 custom-control-input" value="OWNER'S" id="OWNER'S"/>
                            <label class="custom-control-label" for="OWNER'S">
                                <input
                                    onChange={handleBlur}
                                    type="text"
                                    name="OWNER'S"
                                    class="form-control mb-2"
                                    />
                            </label>
                        </div>
                            <div className="row">
                                <div className="col">
                                    <h6>DEDUCTIBLES</h6>
                                </div>
                            </div>
                        <div className="row">
                            <div className="col-8">
                                <div className="row">
                                        <div className="col-7">
                                        <div class="custom-control custom-checkbox my-2">
                                            <input onChange={handleBlur} type="checkbox" name="PROPERTY DAMAGE" class="custom-control-input" value="PROPERTY DAMAGE" id="PROPERTY DAMAGE"/>
                                            <label class="custom-control-label" style={{fontSize: "14px"}} for="PROPERTY DAMAGE">PROPERTY DAMAGE</label>
                                        </div>
                                        <div class="custom-control custom-checkbox my-3">
                                            <input onChange={handleBlur} type="checkbox" name="BODILY INJURY" class="custom-control-input" value="BODILY INJURY" id="BODILY INJURY"/>
                                            <label class="custom-control-label" for="BODILY INJURY">BODILY INJURY</label>
                                        </div>
                                        <div class="custom-control custom-checkbox my-2">
                                            <input onChange={handleBlur} type="checkbox" name="DEDUCTIBLES other" class="custom-control-input" value="DEDUCTIBLES other" id="DEDUCTIBLES other"/>
                                            <label class="custom-control-label" for="DEDUCTIBLES other">
                                            <input
                                                onChange={handleBlur}
                                                type="text"
                                                name="DEDUCTIBLES other"
                                                class="form-control mb-2"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div class="input-group mb-1">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">$</span>
                                        </div>
                                        <input onChange={handleBlur} type="text" class="form-control" aria-label="GENERAL" aria-describedby="basic-addon1"/>
                                        </div>

                                        <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                        <input onChange={handleBlur} type="text" class="form-control" aria-label="GENERAL" aria-describedby="basic-addon1"/>
                                    </div>

                                    <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                        <input onChange={handleBlur} type="text" class="form-control" aria-label="GENERAL" aria-describedby="basic-addon1"/>
                                         </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                        <div class="custom-control custom-checkbox my-2">
                                            <input onChange={handleBlur} type="checkbox" name="PER CLAIM" class="custom-control-input" value="PER CLAIM" id="PER CLAIM"/>
                                            <label class="custom-control-label" style={{fontSize: "14px"}} for="PER CLAIM">PER CLAIM</label>
                                        </div>
                                        <div class="custom-control custom-checkbox my-2">
                                            <input onChange={handleBlur} type="checkbox" name="PER OCCURRENCE" class="custom-control-input" value="PER OCCURRENCE" id="PER OCCURRENCE"/>
                                            <label class="custom-control-label" style={{fontSize: "14px"}} for="PER OCCURRENCE">PER OCCURRENCE</label>
                                        </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col">
                                <h6 className="mt-2">GENERAL AGGREGATE</h6>
                            </div>
                            <div className="col">
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input onChange={handleBlur} type="text" class="form-control" aria-label="GENERAL" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <h6>LIMIT APPLIES PER:</h6>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                <div className="col">
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="POLICY" class="custom-control-input" value="POLICY" id="POLICY"/>
                                    <label class="custom-control-label" for="POLICY">POLICY</label>
                                </div>
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="PROJECT" class="custom-control-input" value="PROJECT" id="PROJECT"/>
                                    <label class="custom-control-label" for="PROJECT">PROJECT</label>
                                </div>
                                </div>
                                <div className="col">
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="LOCATION" class="custom-control-input" value="LOCATION" id="LOCATION"/>
                                    <label class="custom-control-label" for="POLICY">LOCATION</label>
                                </div>
                                <div class="custom-control custom-checkbox my-3">
                                    <input onChange={handleBlur} type="checkbox" name="OTHER" class="custom-control-input" value="OTHER" id="OTHER"/>
                                    <label class="custom-control-label" for="OTHER">OTHER</label>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                                <div className="col-8">
                                    <span>PRODUCTS & COMPLETED OPERATIONS AGGREGATE</span>
                                </div>
                                <div className="col-4">
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input onChange={handleBlur} type="text" class="form-control" aria-label="GENERAL" aria-describedby="basic-addon1"/>
                                </div>
                                </div>
                        </div>
                        <div className="row">
                                <div className="col-8">
                                    <span>PERSONAL & ADVERTISING INJURY</span>
                                </div>
                                <div className="col-4">
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input onChange={handleBlur} type="text" name="PERSONAL" class="form-control" aria-label="PERSONAL" aria-describedby="basic-addon1"/>
                                </div>
                                </div>
                        </div>
                        <div className="row">
                                <div className="col-8">
                                    <span>EACH OCCURRENCE</span>
                                </div>
                                <div className="col-4">
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input onChange={handleBlur} type="text" name="EACH OCCURRENCE" class="form-control" aria-label="PERSONAL" aria-describedby="basic-addon1"/>
                                </div>
                                </div>
                        </div>
                        <div className="row">
                                <div className="col-8">
                                    <span>DAMAGE TO RENTED PREMISES (each occurrence)</span>
                                </div>
                                <div className="col-4">
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input onChange={handleBlur} type="text" name="DAMAGE TO RENTED PREMISES" class="form-control" aria-label="PERSONAL" aria-describedby="basic-addon1"/>
                                </div>
                                </div>
                        </div>
                        <div className="row">
                                <div className="col-8">
                                    <span>MEDICAL EXPENSE (Any one person)</span>
                                </div>
                                <div className="col-4">
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input onChange={handleBlur} type="text" name="MEDICAL EXPENSE" class="form-control" aria-label="PERSONAL" aria-describedby="basic-addon1"/>
                                </div>
                                </div>
                        </div>
                        <div className="row">
                                <div className="col-8">
                                    <span>EMPLOYEE BENEFITS</span>
                                </div>
                                <div className="col-4">
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input onChange={handleBlur} type="text" name="EMPLOYEE BENEFITS" class="form-control" aria-label="PERSONAL" aria-describedby="basic-addon1"/>
                                </div>
                                </div>
                        </div>
                        <div className="row">
                                <div className="col-8">
                                <input
                                    type="text"
                                    name="other"
                                    class="form-control mb-2"
                                    onChange={handleBlur}
                                />

                                </div>
                                <div className="col-4">
                                <div class="input-group mb-1">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">$</span>
                                    </div>
                                    <input onChange={handleBlur} type="text" name="other" class="form-control" aria-label="PERSONAL" aria-describedby="basic-addon1"/>
                                </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row">
                            <h6 className="text-center">PREMIUMS</h6>
                        </div>
                        <div className="row">
                            <label htmlFor="PREMISES/OPERATIONS">PREMISES/OPERATIONS</label>
                            <input
                                onChange={handleBlur}
                                id="PREMISES/OPERATIONS"
                                type="text"
                                name="PREMISES/OPERATIONS"
                                class="form-control mb-2"
                            />

                            <label htmlFor="PREMISES/OPERATIONS">PRODUCTS</label>
                            <input
                                onChange={handleBlur}
                                id="PRODUCTS"
                                type="text"
                                name="PRODUCTS"
                                class="form-control mb-2"
                            />
                            <label htmlFor="OTHER">OTHER</label>
                            <input
                                onChange={handleBlur}
                                id="OTHER"
                                type="text"
                                name="OTHER"
                                class="form-control mb-2"
                            />
                            <label htmlFor="OTHER">OTTOTALHER</label>
                            <input
                                onChange={handleBlur}
                                id="TOTAL"
                                type="text"
                                name="TOTAL"
                                class="form-control mb-2"
                            />
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                        <div className="col">
                            <label htmlFor="OTHER">OTHER COVERAGES, RESTRICTIONS AND/OR ENDORSEMENTS (For hired/non-owned auto coverages attach the applicable state Business Auto Section, ACORD 137)</label>
                            <textarea cols="30" rows="4"
                                onChange={handleBlur}
                                id="OTHER COVERAGES"
                                type="text"
                                name="OTHER COVERAGES"
                                class="form-control mb-2"></textarea>
                        </div>
                    </div>
                <div className="row">
                        <div className="col">
                        <label htmlFor="">APPLICABLE ONLY IN WISCONSIN: IF NON-OWNED ONLY AUTO COVERAGE IS TO BE PROVIDED UNDER THE POLICY:</label>
                        </div>
                </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                            <div className="col-6 mt-2"><h6>1. UM / UIM COVERAGE</h6></div>
                                <div className="col-3">
                                    <div class="custom-control custom-checkbox my-2">
                                        <input onChange={handleBlur} type="checkbox" name="IS" class="custom-control-input" value="IS" id="IS"/>
                                        <label class="custom-control-label" style={{fontSize: "14px"}} for="IS">IS</label>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div class="custom-control custom-checkbox my-2">
                                        <input onChange={handleBlur} type="checkbox" name="IS NOT AVAILABLE." class="custom-control-input" value="IS NOT AVAILABLE." id="IS NOT"/>
                                        <label class="custom-control-label" style={{fontSize: "14px"}} for="IS NOT">IS NOT AVAILABLE.</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                            <div className="col-6 mt-2"><h6>2. MEDICAL PAYMENTS COVERAGE</h6></div>
                            <div className="col-3">
                                <div class="custom-control custom-checkbox my-2">
                                    <input onChange={handleBlur} type="checkbox" name="2IS" class="custom-control-input" value="IS" id="2IS"/>
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="2IS">IS</label>
                                </div>
                            </div>
                            <div className="col-3">
                                <div class="custom-control custom-checkbox my-2">
                                    <input onChange={handleBlur} type="checkbox" name="IS NOT AVAILABLE." class="custom-control-input" value="IS NOT AVAILABLE." id="2IS NOT"/>
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="2IS NOT">IS NOT AVAILABLE.</label>
                                </div>
                            </div>
                            </div>

                        </div>
                    </div>
                <div class="d-flex justify-content-between">
                    <button  className="btn btn-success" onClick={()=>setStep(1) } style={{width: "100px"}}>Back</button>
                    <button  className="btn btn-success" onClick={()=>setStep(3) } style={{width: "100px"}}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default COVERAGES;