import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'
const GeneralInformation = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                   <div className="col">
                   <h5>GENERAL INFORMATION</h5>
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
                        <label htmlFor="">1. ANY MEDICAL FACILITIES PROVIDED OR MEDICAL PROFESSIONALS EMPLOYED OR CONTRACTED?</label>
                        <textarea name="ANY MEDICAL FACILITIES" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ANY MEDICAL FACILITIES Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">2. ANY EXPOSURE TO RADIOACTIVE/NUCLEAR MATERIALS?</label>
                        <textarea name="ANY EXPOSURE TO" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ANY EXPOSURE TO Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">3. DO/HAVE PAST, PRESENT OR DISCONTINUED OPERATIONS INVOLVE(D) STORING, TREATING, DISCHARGING, APPLYING, DISPOSING, OR TRANSPORTING OF HAZARDOUS MATERIAL? (e.g. landfills, wastes, fuel tanks, etc)</label>
                        <textarea name="DO/HAVE PAST" onChange={handleBlur} onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="DO/HAVE PAST Y/S" onChange={handleBlur} onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">4. ANY OPERATIONS SOLD, ACQUIRED, OR DISCONTINUED IN LAST FIVE (5) YEARS?</label>
                        <textarea name="ANY OPERATIONS SOLD" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ANY OPERATIONS SOLD Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">5. DO YOU RENT OR LOAN EQUIPMENT TO OTHERS?</label>
                        <div className="row">
                            <div className="col-4">
                            <label htmlFor="">EQUIPMENT</label>
                                <input type="text" name="EQUIPMENT" onChange={handleBlur} className="form-control mt-2" />
                                <input type="text" name="EQUIPMENT2" onChange={handleBlur} className="form-control mt-2" />
                            </div>
                            <div className="col-4">
                            <label htmlFor="">TYPE OF EQUIPMENT</label>
                            <div className="row">
                                <div className="col">
                                <div class="custom-control custom-checkbox my-2">
                                <input type="checkbox" onChange={handleBlur} name="SMALL TOOLS" class="custom-control-input" value="SMALL TOOLS" id="SMALL TOOLS"/>
                                <label class="custom-control-label" for="SMALL TOOLS">SMALL TOOLS</label>
                                </div>
                                </div>
                                <div className="col">
                                <div class="custom-control custom-checkbox my-2">
                                <input type="checkbox" onChange={handleBlur} name="LARGE EQUIPMENT" class="custom-control-input" value="LARGE EQUIPMENT" id="LARGE EQUIPMENT"/>
                                <label class="custom-control-label" for="LARGE EQUIPMENT">LARGE EQUIPMENT</label>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                <div class="custom-control custom-checkbox my-2">
                                <input type="checkbox" onChange={handleBlur} name="SMALL TOOLS" class="custom-control-input" value="SMALL TOOLS" id="SMALL TOOLS"/>
                                <label class="custom-control-label" for="SMALL TOOLS">SMALL TOOLS</label>
                                </div>
                                </div>
                                <div className="col">
                                <div class="custom-control custom-checkbox my-2">
                                <input type="checkbox" onChange={handleBlur} name="LARGE EQUIPMENT" class="custom-control-input" value="LARGE EQUIPMENT" id="LARGE EQUIPMENT"/>
                                <label class="custom-control-label" for="LARGE EQUIPMENT">LARGE EQUIPMENT</label>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-4">
                                <label htmlFor="">INSTRUCTION GIVEN (Y/N)</label>
                                <input type="text" className="form-control my-2"  onChange={handleBlur} name="INSTRUCTION GIVEN (Y/N)" />
                                <input type="text" className="form-control my-2"  onChange={handleBlur} name="INSTRUCTION GIVEN (Y/N)2" />
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ANY OPERATIONS SOLD Y/S" className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">6. ANY WATERCRAFT, DOCKS, FLOATS OWNED, HIRED OR LEASED?</label>
                        <textarea name="ANY WATERCRAFT" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ANY WATERCRAFT Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">7. ANY PARKING FACILITIES OWNED/RENTED?</label>
                        <textarea name="7. ANY PARKING" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="7. ANY PARKING Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">8. IS A FEE CHARGED FOR PARKING?</label>
                        <textarea name="8. IS A FEE CHARGED " onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="8. IS A FEE CHARGED  Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">9. RECREATION FACILITIES PROVIDED?</label>
                        <textarea name="9. RECREATION" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="9. RECREATION  Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">10. ARE THERE ANY LODGING OPERATIONS INCLUDING APARTMENTS? (If "YES", answer the following):</label>
                        <div className="row">
                            <div className="col-2">
                                <label htmlFor=""># APTS</label>
                                <input type="text" className="form-control my-2 " onChange={handleBlur} name="ARE THERE ANY" />
                            </div>
                            <div className="col-3">
                                <label htmlFor="">TOTAL APT AREA</label>
                                <input type="text" className="form-control my-2 " onChange={handleBlur} name="TOTAL APT AREA" />
                            </div>
                            <div className="col-7">
                                <label htmlFor="">DESCRIBE OTHER LODGING OPERATIONS</label>
                                <input type="text" className="form-control my-2 " onChange={handleBlur} name="DESCRIBE OTHER" />
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <input type="text" name="9. RECREATION  Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">11. IS THERE A SWIMMING POOL ON PREMISES? (Check all that apply)</label>
                        <div className="row">
                            <div className="col">
                            <div class="custom-control custom-checkbox my-2">
                            <input type="checkbox" onChange={handleBlur} name="APPROVED FENCE" class="custom-control-input" value="APPROVED FENCE" id="APPROVED FENCE"/>
                            <label class="custom-control-label" for="EMPLOYEE AS LESSOR">APPROVED FENCE</label>
                            </div>
                            </div>
                            <div className="col">
                            <div class="custom-control custom-checkbox my-2">
                            <input type="checkbox" onChange={handleBlur} name="LIMITED ACCESS" class="custom-control-input" value="LIMITED ACCESS" id="LIMITED ACCESS"/>
                            <label class="custom-control-label" for="EMPLOYEE AS LESSOR">LIMITED ACCESS</label>
                            </div>
                            </div>
                            <div className="col">
                            <div class="custom-control custom-checkbox my-2">
                            <input type="checkbox" onChange={handleBlur} name="DIVING BOARD" class="custom-control-input" value="DIVING BOARD" id="DIVING BOARD"/>
                            <label class="custom-control-label" for="EMPLOYEE AS LESSOR">DIVING BOARD</label>
                            </div>
                            </div>
                            <div className="col">
                            <div class="custom-control custom-checkbox my-2">
                            <input type="checkbox" onChange={handleBlur} name="SLIDE" class="custom-control-input" value="SLIDE" id="SLIDE"/>
                            <label class="custom-control-label" for="SLIDE">SLIDE</label>
                            </div>
                            </div>
                            <div className="col">
                            <div class="custom-control custom-checkbox my-2">
                            <input type="checkbox" onChange={handleBlur} name="ABOVE GROUND" class="custom-control-input" value="ABOVE GROUND" id="ABOVE GROUND"/>
                            <label class="custom-control-label" for="ABOVE GROUND">ABOVE GROUND</label>
                            </div>
                            </div>
                            <div className="col">
                            <div class="custom-control custom-checkbox my-2">
                            <input type="checkbox" onChange={handleBlur} name="IN GROUND" class="custom-control-input" value="IN GROUND" id="IN GROUND"/>
                            <label class="custom-control-label" for="IN GROUND">IN GROUND</label>
                            </div>
                            </div>
                            <div className="col">
                            <div class="custom-control custom-checkbox my-2">
                            <input type="checkbox" onChange={handleBlur} name="LIFE GUARD" class="custom-control-input" value="LIFE GUARD" id="LIFE GUARD"/>
                            <label class="custom-control-label" for="IN GROUND">LIFE GUARD</label>
                            </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-1">
                        <input type="text" name="IS THERE A SWIMMING Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">12. ARE SOCIAL EVENTS SPONSORED?</label>
                        <textarea name="ARE SOCIAL" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ARE SOCIAL Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">13. ARE ATHLETIC TEAMS SPONSORED?</label>
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                <div className="col-5">
                                <label htmlFor="">TYPE OF SPORT</label>
                                <input type="text" name="TYPE OF SPORT" onChange={handleBlur} className="form-control mt-2" id=""/>
                            </div>
                            <div className="col-2">
                                <label htmlFor="">CONTACT TYPE OF SPORT SPORT (Y/N)</label>
                                <input type="text" name="CONTACT TYPE OF SPORT SPORT (Y/N)" onChange={handleBlur} className="form-control mt-2" id=""/>
                            </div>
                            <div className="col-5">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="">AGE GROUP</label>
                                        <div class="custom-control custom-checkbox my-2">
                                            <input type="checkbox" onChange={handleBlur} name="12 & UNDER" class="custom-control-input" value="12 & UNDER" id="12 & UNDER"/>
                                        <label class="custom-control-label" for="12 & UNDER">12 & UNDER</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                    <div class="custom-control custom-checkbox my-2">
                                            <input type="checkbox" onChange={handleBlur} name="13 - 18" class="custom-control-input" value="13 - 18" id="13 - 18"/>
                                        <label class="custom-control-label" for="13 - 18">13 - 18</label>
                                        </div>
                                        <div class="custom-control custom-checkbox my-2">
                                            <input type="checkbox" onChange={handleBlur} name="OVER 18" class="custom-control-input" value="OVER 18" id="OVER 18"/>
                                        <label class="custom-control-label" for="OVER 18">OVER 18</label>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="">EXTENT OF SPONSORSHIP:</label>
                                        <input type="text" name="EXTENT OF SPONSORSHIP Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                                    </div>
                                </div>
                            </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                <div className="col-5">
                                <label htmlFor="">TYPE OF SPORT</label>
                                <input type="text" name="TYPE OF SPORT" onChange={handleBlur} className="form-control mt-2" id=""/>
                            </div>
                            <div className="col-2">
                                <label htmlFor="">CONTACT TYPE OF SPORT SPORT (Y/N)</label>
                                <input type="text" name="CONTACT TYPE OF SPORT SPORT (Y/N)" onChange={handleBlur} className="form-control mt-2" id=""/>
                            </div>
                            <div className="col-5">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="">AGE GROUP</label>
                                        <div class="custom-control custom-checkbox my-2">
                                            <input type="checkbox" onChange={handleBlur} name="12 & UNDER" class="custom-control-input" value="12 & UNDER" id="12 & UNDER"/>
                                        <label class="custom-control-label" for="12 & UNDER">12 & UNDER</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                    <div class="custom-control custom-checkbox my-2">
                                            <input type="checkbox" onChange={handleBlur} name="13 - 18" class="custom-control-input" value="13 - 18" id="13 - 18"/>
                                        <label class="custom-control-label" for="13 - 18">13 - 18</label>
                                        </div>
                                        <div class="custom-control custom-checkbox my-2">
                                            <input type="checkbox" onChange={handleBlur} name="OVER 18" class="custom-control-input" value="OVER 18" id="OVER 18"/>
                                        <label class="custom-control-label" for="OVER 18">OVER 18</label>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="">EXTENT OF SPONSORSHIP:</label>
                                        <input type="text" name="EXTENT OF SPONSORSHIP Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                                    </div>
                                </div>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ARE ATHLETIC  Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">14. ANY STRUCTURAL ALTERATIONS CONTEMPLATED?</label>
                        <textarea name="NY STRUCTURA" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="NY STRUCTURA Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">15. ANY DEMOLITION EXPOSURE CONTEMPLATED?</label>
                        <textarea name="ANY DEMOLITION" onChange={handleBlur} className="form-control" id="" cols="30" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" name="ANY DEMOLITION Y/S" onChange={handleBlur} className="form-control mt-2" id=""/>
                    </div>
                </div>
                <div class="d-flex mt-2 justify-content-between">
                    <button  className="btn btn-success" onClick={()=>setStep(8) } style={{width: "100px"}}>Back</button>
                    <button  className="btn btn-success" onClick={()=>setStep(10) } style={{width: "100px"}}>Next</button>
                </div>
            </form>
        </div>
    );
};

export default GeneralInformation;