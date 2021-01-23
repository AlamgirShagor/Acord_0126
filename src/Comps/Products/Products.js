import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const Products = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div  style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col">
                        <h5>PRODUCTS / COMPLETED OPERATIONS</h5>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-3 d-flex justify-content-center">
                                <h6 style={{fontSize: "14px"}}>PRODUCTS</h6>
                            </div>
                            <div className="col-3 d-flex text-center justify-content-center">
                                <h6 style={{fontSize: "14px"}}>ANNUAL GROSS SALES</h6>
                            </div>
                            <div className="col-3 d-flex justify-content-center">
                                <h6 style={{fontSize: "14px"}}># OF UNITS</h6>
                            </div>
                            <div className="col-3 d-flex justify-content-center">
                                <h6 style={{fontSize: "14px"}}>MARKET TIME IN</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 d-flex justify-content-center">
                            <input
                                id=""
                                type="text"
                                onChange={handleBlur}
                                name=""
                                class="form-control mb-2"
                            />
                            </div>
                            <div className="col-3 d-flex text-center justify-content-center">
                            <input
                                id=""
                                type="text"
                                onChange={handleBlur}
                                name=""
                                class="form-control mb-2"
                            />
                            </div>
                            <div className="col-3 d-flex justify-content-center">
                                <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name=""
                                    class="form-control mb-2"
                                />
                            </div>
                            <div className="col-3 d-flex justify-content-center">
                                <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name=""
                                    class="form-control mb-2"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 d-flex justify-content-center">
                            <input
                                id=""
                                type="text"
                                onChange={handleBlur}
                                name=""
                                class="form-control mb-2"
                            />
                            </div>
                            <div className="col-3 d-flex text-center justify-content-center">
                            <input
                                id=""
                                type="text"
                                onChange={handleBlur}
                                name=""
                                class="form-control mb-2"
                            />
                            </div>
                            <div className="col-3 d-flex justify-content-center">
                                <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name=""
                                    class="form-control mb-2"
                                />
                            </div>
                            <div className="col-3 d-flex justify-content-center">
                                <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name=""
                                    class="form-control mb-2"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 d-flex justify-content-center">
                            <input
                                id=""
                                type="text"
                                onChange={handleBlur}
                                name=""
                                class="form-control mb-2"
                            />
                            </div>
                            <div className="col-3 d-flex text-center justify-content-center">
                            <input
                                id=""
                                type="text"
                                onChange={handleBlur}
                                name=""
                                class="form-control mb-2"
                            />
                            </div>
                            <div className="col-3 d-flex justify-content-center">
                                <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name=""
                                    class="form-control mb-2"
                                />
                            </div>
                            <div className="col-3 d-flex justify-content-center">
                                <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name=""
                                    class="form-control mb-2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-2 text-center d-flex justify-content-center">
                                <h6 style={{fontSize: "14px"}}>EXPECTED LIFE</h6>
                            </div>
                            <div className="col-5 d-flex justify-content-center">
                                <h6 style={{fontSize: "14px"}}>INTENDED USE</h6>
                            </div>
                            <div className="col-5 d-flex justify-content-center">
                                <h6 style={{fontSize: "14px"}}>PRINCIPAL COMPONENTS</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 d-flex justify-content-center">
                            <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name=""
                                    class="form-control mb-2"
                                />
                            </div>
                            <div className="col-5 d-flex justify-content-center">
                            <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name=""
                                    class="form-control mb-2"
                                />
                            </div>
                            <div className="col-5 d-flex justify-content-center">
                            <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name=""
                                    class="form-control mb-2"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 d-flex justify-content-center">
                            <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name=""
                                    class="form-control mb-2"
                                />
                            </div>
                            <div className="col-5 d-flex justify-content-center">
                            <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name=""
                                    class="form-control mb-2"
                                />
                            </div>
                            <div className="col-5 d-flex justify-content-center">
                            <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name=""
                                    class="form-control mb-2"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 d-flex justify-content-center">
                            <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name=""
                                    class="form-control mb-2"
                                />
                            </div>
                            <div className="col-5 d-flex justify-content-center">
                            <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name=""
                                    class="form-control mb-2"
                                />
                            </div>
                            <div className="col-5 d-flex justify-content-center">
                            <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name=""
                                    class="form-control mb-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>EXPLAIN ALL "YES" RESPONSES (For all past or present products or operations) PLEASE ATTACH LITERATURE, BROCHURES, LABELS, WARNINGS, ETC.</h6>
                    </div>
                    <div className="col-1">
                        <h6>Y / N</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">1. DOES APPLICANT INSTALL, SERVICE OR DEMONSTRATE PRODUCTS?</label>
                        <textarea name="DOES"  class="form-control mb-2" id="" cols="30" rows="3"></textarea> 
                    </div>
                    <div className="col-1 my-3">
                            <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name="DOES APPLICANT INSTALL Y/N"
                                    class="form-control mb-2"
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">2. FOREIGN PRODUCTS SOLD, DISTRIBUTED, USED AS COMPONENTS? (If "YES", attach ACORD 815)</label>
                        <textarea name="FOREIGN"  class="form-control mb-2" id="" cols="30" rows="3"></textarea> 
                    </div>
                    <div className="col-1 my-3">
                            <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name="FOREIGN PRODUCTS SOLD Y/N"
                                    class="form-control mb-2"
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">3. RESEARCH AND DEVELOPMENT CONDUCTED OR NEW PRODUCTS PLANNED?</label>
                        <textarea name="RESEARCH"  class="form-control mb-2" id="" cols="30" rows="3"></textarea> 
                    </div>
                    <div className="col-1 my-3">
                            <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name="RESEARCH AND DEVELOPMENT Y/N"
                                    class="form-control mb-2"
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">4. GUARANTEES, WARRANTIES, HOLD HARMLESS AGREEMENTS?</label>
                        <textarea name="GUARANTEES"  class="form-control mb-2" id="" cols="30" rows="3"></textarea> 
                    </div>
                    <div className="col-1 my-3">
                            <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name=" GUARANTEES Y/N"
                                    class="form-control mb-2"
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">5. PRODUCTS RELATED TO AIRCRAFT/SPACE INDUSTRY?</label>
                        <textarea name="PRODUCTS RELATED"  class="form-control mb-2" id="" cols="30" rows="3"></textarea> 
                    </div>
                    <div className="col-1 my-3">
                            <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name=" PRODUCTS RELATED Y/N"
                                    class="form-control mb-2"
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">6. PRODUCTS RECALLED, DISCONTINUED, CHANGED?</label>
                        <textarea name="PRODUCTS RECALLED,"  class="form-control mb-2" id="" cols="30" rows="3"></textarea> 
                    </div>
                    <div className="col-1 my-3">
                            <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name=" PRODUCTSY/N"
                                    class="form-control mb-2"
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">7. PRODUCTS OF OTHERS SOLD OR RE-PACKAGED UNDER APPLICANT LABEL?</label>
                        <textarea name="RODUCTS OF OTHERS"  class="form-control mb-2" id="" cols="30" rows="3"></textarea>    
                    </div>
                    <div className="col-1 my-3">
                            <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name=" PRODUCTS OF OTHERS Y/N"
                                    class="form-control mb-2"
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">8. PRODUCTS UNDER LABEL OF OTHERS?</label>
                        <textarea name="PRODUCTS UNDER"  class="form-control mb-2" id="" cols="30" rows="3"></textarea>     
                    </div>
                    <div className="col-1 my-3">
                            <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name=" PRODUCTS Y/N"
                                    class="form-control mb-2"
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">9. VENDORS COVERAGE REQUIRED?</label>
                        <textarea name="VENDORS COVERAGE"  class="form-control mb-2" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1 my-3">
                            <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name="VENDORS COVERAGE Y/N"
                                    class="form-control mb-2"
                                />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">10. DOES ANY NAMED INSURED SELL TO OTHER NAMED INSUREDS?</label>      
                            <textarea name="DOES ANY NAMED" class="form-control mb-2" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1 my-3">
                            <input
                                    id=""
                                    type="text"
                                    onChange={handleBlur}
                                    name="DOES ANY NAMED Y/N"
                                    class="form-control mb-2"
                                />
                    </div>
                </div>
                <div class="d-flex mt-2 justify-content-between">
                    <button  className="btn btn-success" onClick={()=>setStep(6) } style={{width: "100px"}}>Back</button>
                    <button  className="btn btn-success" onClick={()=>setStep(8) } style={{width: "100px"}}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default Products;