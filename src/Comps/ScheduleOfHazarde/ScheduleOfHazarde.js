import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const ScheduleOfHazarde = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row mb-2">
                    <h5>SCHEDULE OF HAZARDS (ACORD 211, Schedule of Hazards, may be attached if more space is required)</h5>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                        <div className="col">
                            <label htmlFor="LOC">LOC #</label>
                            <input
                                id="LOC"
                                type="text"
                                onChange={handleBlur}
                                name="LOC"
                                class="form-control mb-2 mt-4"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="HAZ">HAZ #</label>
                            <input
                                id="HAZ"
                                type="text"
                                onChange={handleBlur}
                                name="HAZ"
                                class="form-control mb-2 mt-4"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="CLASS CODE">CLASS CODE</label>
                            <input
                                id="CLASS CODE"
                                type="text"
                                onChange={handleBlur}
                                name="CLASS CODE"
                                class="form-control mb-2"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="PREMIUM BASIS">PREMIUM BASIS</label>
                            <input
                                id="PREMIUM BASIS"
                                type="text"
                                onChange={handleBlur}
                                name="PREMIUM BASIS"
                                class="form-control mb-2"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="EXPOSURE">EXPOSURE</label>
                            <input
                                id="EXPOSURE"
                                type="text"
                                onChange={handleBlur}
                                name="EXPOSURE"
                                class="form-control mb-2 mt-4"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="EXPOSURE">EXPOSURE</label>
                            <input
                                id="EXPOSURE"
                                type="text"
                                onChange={handleBlur}
                                name="EXPOSURE"
                                class="form-control mb-2 mt-4"
                            />
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-6 d-flex justify-content-center">
                                <label htmlFor="">RATE</label>
                            </div>
                            <div className="col-6 d-flex justify-content-center">PREMIUM</div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="PREM / OPS">PREM / OPS</label>
                                <input
                                id="PREM / OPS"
                                type="text"
                                onChange={handleBlur}
                                name="PREM / OPS"
                                class="form-control mb-2"
                            />
                            </div>
                            <div className="col-3">
                            <label htmlFor="PRODUCTS">PRODUCTS</label>
                                <input
                                id="PRODUCTS"
                                type="text"
                                onChange={handleBlur}
                                name="PRODUCTS"
                                class="form-control mb-2 "
                            />
                            </div>
                            
                            <div className="col-3">
                                <label htmlFor="PREM / OPS">PREM / OPS</label>
                                <input
                                id="PREM / OPS"
                                type="text"
                                onChange={handleBlur}
                                name="PREM / OPS"
                                class="form-control mb-2"
                            />
                            </div>
                            <div className="col-3">
                            <label htmlFor="PRODUCTS">PRODUCTS</label>
                                <input
                                id="PRODUCTS"
                                type="text"
                                onChange={handleBlur}
                                name="PRODUCTS"
                                class="form-control mb-2"
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <label htmlFor="CLASSIFICATION">CLASSIFICATION DESCRIPTION</label>
                    <textarea name="CLASSIFICATION" id="CLASSIFICATION" class="form-control mb-2" cols="30" rows="4"></textarea>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                        <div className="col">
                            <label htmlFor="LOC">LOC #</label>
                            <input
                                id="LOC"
                                type="text"
                                onChange={handleBlur}
                                name="LOC"
                                class="form-control mb-2 mt-4"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="HAZ">HAZ #</label>
                            <input
                                id="HAZ"
                                type="text"
                                onChange={handleBlur}
                                name="HAZ"
                                class="form-control mb-2 mt-4"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="CLASS CODE">CLASS CODE</label>
                            <input
                                id="CLASS CODE"
                                type="text"
                                onChange={handleBlur}
                                name="CLASS CODE"
                                class="form-control mb-2"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="PREMIUM BASIS">PREMIUM BASIS</label>
                            <input
                                id="PREMIUM BASIS"
                                type="text"
                                onChange={handleBlur}
                                name="PREMIUM BASIS"
                                class="form-control mb-2"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="EXPOSURE">EXPOSURE</label>
                            <input
                                id="EXPOSURE"
                                type="text"
                                onChange={handleBlur}
                                name="EXPOSURE"
                                class="form-control mb-2 mt-4"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="EXPOSURE">EXPOSURE</label>
                            <input
                                id="EXPOSURE"
                                type="text"
                                onChange={handleBlur}
                                name="EXPOSURE"
                                class="form-control mb-2 mt-4"
                            />
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-6 d-flex justify-content-center">
                                <label htmlFor="">RATE</label>
                            </div>
                            <div className="col-6 d-flex justify-content-center">PREMIUM</div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="PREM / OPS">PREM / OPS</label>
                                <input
                                id="PREM / OPS"
                                type="text"
                                onChange={handleBlur}
                                name="PREM / OPS"
                                class="form-control mb-2"
                            />
                            </div>
                            <div className="col-3">
                            <label htmlFor="PRODUCTS">PRODUCTS</label>
                                <input
                                id="PRODUCTS"
                                type="text"
                                onChange={handleBlur}
                                name="PRODUCTS"
                                class="form-control mb-2 "
                            />
                            </div>
                            
                            <div className="col-3">
                                <label htmlFor="PREM / OPS">PREM / OPS</label>
                                <input
                                id="PREM / OPS"
                                type="text"
                                onChange={handleBlur}
                                name="PREM / OPS"
                                class="form-control mb-2"
                            />
                            </div>
                            <div className="col-3">
                            <label htmlFor="PRODUCTS">PRODUCTS</label>
                                <input
                                id="PRODUCTS"
                                type="text"
                                onChange={handleBlur}
                                name="PRODUCTS"
                                class="form-control mb-2"
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <label htmlFor="CLASSIFICATION">CLASSIFICATION DESCRIPTION</label>
                    <textarea name="CLASSIFICATION" id="CLASSIFICATION" class="form-control mb-2" cols="30" rows="4"></textarea>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                        <div className="col">
                            <label htmlFor="LOC">LOC #</label>
                            <input
                                id="LOC"
                                type="text"
                                onChange={handleBlur}
                                name="LOC"
                                class="form-control mb-2 mt-4"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="HAZ">HAZ #</label>
                            <input
                                id="HAZ"
                                type="text"
                                onChange={handleBlur}
                                name="HAZ"
                                class="form-control mb-2 mt-4"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="CLASS CODE">CLASS CODE</label>
                            <input
                                id="CLASS CODE"
                                type="text"
                                onChange={handleBlur}
                                name="CLASS CODE"
                                class="form-control mb-2"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="PREMIUM BASIS">PREMIUM BASIS</label>
                            <input
                                id="PREMIUM BASIS"
                                type="text"
                                onChange={handleBlur}
                                name="PREMIUM BASIS"
                                class="form-control mb-2"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="EXPOSURE">EXPOSURE</label>
                            <input
                                id="EXPOSURE"
                                type="text"
                                onChange={handleBlur}
                                name="EXPOSURE"
                                class="form-control mb-2 mt-4"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="EXPOSURE">EXPOSURE</label>
                            <input
                                id="EXPOSURE"
                                type="text"
                                onChange={handleBlur}
                                name="EXPOSURE"
                                class="form-control mb-2 mt-4"
                            />
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-6 d-flex justify-content-center">
                                <label htmlFor="">RATE</label>
                            </div>
                            <div className="col-6 d-flex justify-content-center">PREMIUM</div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="PREM / OPS">PREM / OPS</label>
                                <input
                                id="PREM / OPS"
                                type="text"
                                onChange={handleBlur}
                                name="PREM / OPS"
                                class="form-control mb-2"
                            />
                            </div>
                            <div className="col-3">
                            <label htmlFor="PRODUCTS">PRODUCTS</label>
                                <input
                                id="PRODUCTS"
                                type="text"
                                onChange={handleBlur}
                                name="PRODUCTS"
                                class="form-control mb-2 "
                            />
                            </div>
                            
                            <div className="col-3">
                                <label htmlFor="PREM / OPS">PREM / OPS</label>
                                <input
                                id="PREM / OPS"
                                type="text"
                                onChange={handleBlur}
                                name="PREM / OPS"
                                class="form-control mb-2"
                            />
                            </div>
                            <div className="col-3">
                            <label htmlFor="PRODUCTS">PRODUCTS</label>
                                <input
                                id="PRODUCTS"
                                type="text"
                                onChange={handleBlur}
                                name="PRODUCTS"
                                class="form-control mb-2"
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <label htmlFor="CLASSIFICATION">CLASSIFICATION DESCRIPTION</label>
                    <textarea name="CLASSIFICATION" id="CLASSIFICATION" class="form-control mb-2" cols="30" rows="4"></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h6>RATING AND PREMIUM BASIS</h6>
                        <span>(S) GROSS SALES - PER $1,000/SALES</span>
                    </div>
                    <div className="col">
                        <span>(P) PAYROLL - PER $1,000/PAY</span>
                        <br/>
                        <span>(A) AREA - PER 1,000/SQ FT</span>
                    </div>
                    <div className="col">
                        <span>(C) TOTAL COST - PER $1,000/COST</span>
                        <br/>
                        <span>(M) ADMISSIONS - PER 1,000/ADM</span>
                    </div>
                    <div className="col">
                        <span>(U) UNIT - PER UNIT</span>
                        <br/>
                        <span>(T) OTHER</span>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <button  className="btn btn-success" onClick={()=>setStep(2) } style={{width: "100px"}}>Back</button>
                    <button  className="btn btn-success" onClick={()=>setStep(4) } style={{width: "100px"}}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default ScheduleOfHazarde;