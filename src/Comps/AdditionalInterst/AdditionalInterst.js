import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const AdditionalInterst = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row d-flex justify-content-end">
                    <div className="col-6 text-right">
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
                    <div className="col-md-6">
                        <h5>ADDITIONAL INTEREST / CERTIFICATE RECIPIENT</h5>
                    </div>
                    <div className="col-md-6">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" onChange={handleBlur} name="COMMERCIAL GENERAL LIABILITY" class="custom-control-input" value="COMMERCIAL GENERAL LIABILITY" id="COMMERCIAL"/>
                            <label class="custom-control-label" for="COMMERCIAL"> <strong>ACORD 45 attached for additional names</strong> </label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <h6 style={{fontSize: "17px"}}>INTEREST</h6>

                        <div class="custom-control custom-checkbox my-2">
                            <input type="checkbox" onChange={handleBlur} name="ADDITIONAL INSURED" class="custom-control-input" value="ADDITIONAL INSURED" id="ADDITIONAL INSURED"/>
                            <label class="custom-control-label" for="ADDITIONAL INSURED"> ADDITIONAL INSURED</label>
                        </div>

                        <div class="custom-control custom-checkbox my-2">
                            <input type="checkbox" onChange={handleBlur} name="EMPLOYEE AS LESSOR" class="custom-control-input" value="EMPLOYEE AS LESSOR" id="EMPLOYEE AS LESSOR"/>
                            <label class="custom-control-label" for="EMPLOYEE AS LESSOR">EMPLOYEE AS LESSOR</label>
                        </div>

                        <div class="custom-control custom-checkbox my-2">
                            <input type="checkbox" onChange={handleBlur} name="LENDER'S" class="custom-control-input" value="LENDER'S LOSS PAYABLE" id="LENDER'S"/>
                            <label class="custom-control-label" for="LENDER'S">LENDER'S LOSS PAYABLE</label>
                        </div>
                        <div class="custom-control custom-checkbox my-2">
                            <input type="checkbox" onChange={handleBlur} name="LIENHOLDER" class="custom-control-input" value="LIENHOLDER" id="LIENHOLDER"/>
                            <label class="custom-control-label" for="LIENHOLDER">LIENHOLDER</label>
                        </div>
                        <div class="custom-control custom-checkbox my-2">
                            <input type="checkbox" onChange={handleBlur} name="LOSS PAYEE" class="custom-control-input" value="LOSS PAYEE" id="LOSS PAYEE"/>
                            <label class="custom-control-label" for="LOSS PAYEE">LOSS PAYEE</label>
                        </div>
                        <div class="custom-control custom-checkbox my-2">
                            <input type="checkbox" onChange={handleBlur} name="MORTGAGEE" class="custom-control-input" value="MORTGAGEE" id="MORTGAGEE"/>
                            <label class="custom-control-label" for="MORTGAGEE">MORTGAGEE</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-6">
                            <h6 style={{fontSize: "17px"}}>NAME AND ADDRESS</h6>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                <div className="col">
                                    <h6 style={{fontSize: "15px", marginTop: "10px"}}>RANK:</h6>
                                </div>
                                <div className="col">
                                <div class="custom-control custom-checkbox my-2">
                                    <input type="checkbox" onChange={handleBlur} name="EVIDENCE" class="custom-control-input" value="EVIDENCE" id="EVIDENCE"/>
                                    <label class="custom-control-label" for="EVIDENCE">EVIDENCE</label>
                                </div>
                                </div>
                                <div className="col">
                                <div class="custom-control custom-checkbox my-2">
                                    <input type="checkbox" onChange={handleBlur} name="CERTIFICATE" class="custom-control-input" value="CERTIFICATE" id="CERTIFICATE"/>
                                    <label class="custom-control-label" for="CERTIFICATE">CERTIFICATE</label>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                                <div className="row">
                                    <div className="col">
                                        <textarea name="NAME AND ADDRESS" id=""  class="form-control"  cols="30" rows="4"></textarea>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <label htmlFor="">REFERENCE / LOAN #:</label>
                                        <input type="text" name="REFERENCE" class="form-control" id=""/>
                                    </div>
                                </div>
                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <h6>INTEREST IN ITEM NUMBER</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="">LOCATION:</label>
                                <input type="text" name="LOCATION" class="form-control" id=""/>

                                <label htmlFor="">ITEM CLASS:</label>
                                <input type="text" name="ITEM CLASS" class="form-control" id=""/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="">BUILDING:</label>
                                <input type="text" name="BUILDING" class="form-control" id=""/>

                                <label htmlFor="">ITEM:</label>
                                <input type="text" name="ITEM" class="form-control" id=""/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <label htmlFor="">ITEM DESCRIPTION:</label>
                            <input type="text" name="ITEM DESCRIPTION" class="form-control" id=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex mt-2 justify-content-between">
                    <button  className="btn btn-success" onClick={()=>setStep(7) } style={{width: "100px"}}>Back</button>
                    <button  className="btn btn-success" onClick={()=>setStep(9) } style={{width: "100px"}}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default AdditionalInterst;