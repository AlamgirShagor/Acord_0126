import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const ClaimsMade = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col">
                        <h5>CLAIMS MADE (Explain all "Yes" responses)</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>EXPLAIN ALL "YES" RESPONSES</h6>
                    </div>
                    <div className="col-1">
                        <h6>Y / N</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="">1. PROPOSED RETROACTIVE DATE:</label>
                    </div>
                    <div className="col-4">
                            <input
                                type="text"
                                name="PROPOSED"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="">2. ENTRY DATE INTO UNINTERRUPTED CLAIMS MADE COVERAGE:</label>
                    </div>
                    <div className="col-5">
                            <input
                                type="text"
                                name="PROPOSED"
                                class="form-control mb-2"
                                onChange={handleBlur}
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">3. HAS ANY PRODUCT, WORK, ACCIDENT, OR LOCATION BEEN EXCLUDED, UNINSURED OR SELF-INSURED FROM ANY PREVIOUS COVERAGE?</label>
                        <textarea name="HAS ANY PRODUCT"  class="form-control mb-2" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input
                            type="text"
                            name="HAS ANY PRODUCT Y/M"
                            class="form-control mt-5"
                            onChange={handleBlur}
                            />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">4. WAS TAIL COVERAGE PURCHASED UNDER ANY PREVIOUS POLICY?</label>
                        <textarea name="WAS TAIL"  class="form-control mb-2" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input
                            type="text"
                            name="WAS TAIL Y/M"
                            class="form-control mt-5"
                            onChange={handleBlur}
                            />
                    </div>
                </div>
                <div class="d-flex mt-2 justify-content-between">
                    <button  className="btn btn-success" onClick={()=>setStep(3) } style={{width: "100px"}}>Back</button>
                    <button  className="btn btn-success" onClick={()=>setStep(5) } style={{width: "100px"}}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default ClaimsMade;