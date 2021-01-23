import React, { useContext } from 'react';
import {StepLabel,  Stepper, Step} from '@material-ui/core'
import FirstStep from '../FirstStep/FirstStep';
import COVERAGES from '../COVERAGES/COVERAGES';
import {multiStepContext} from '../StepContext/StepContext'
import ScheduleOfHazarde from '../ScheduleOfHazarde/ScheduleOfHazarde';
import ClaimsMade from '../ClaimsMade/ClaimsMade';
import EmployeeBenefits from '../EmployeeBenefits/EmployeeBenefits';
import Contractors from '../Contractors/Contractors';
import Products from '../Products/Products';
import AdditionalInterst from '../AdditionalInterst/AdditionalInterst';
import GeneralInformation from '../GeneralInformation/GeneralInformation';
import GeneralInformationContnued from '../GeneralInformationContnued/GeneralInformationContnued';
import Remarks from '../Remarks/Remarks';
import Signature from '../Signature/Signature';

const FormMin = () => {
    const {currentStep,setStep, finalData, setUserData, userData} = useContext(multiStepContext);
    const handleBlur = e =>{
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = e =>{

        console.log(userData);
        setUserData('')
        setStep(1)
    }
    function showStep(step){
        switch(step){
            case 1:
                return <FirstStep handleBlur={handleBlur}/>
            case 2:
                return <COVERAGES handleBlur={handleBlur}/>
            case 3:
                return <ScheduleOfHazarde handleBlur={handleBlur}/>
            case 4:
                return <ClaimsMade handleBlur={handleBlur}/>
            case 5:
                return <EmployeeBenefits handleBlur={handleBlur}/>
            case 6:
                return <Contractors handleBlur={handleBlur}/>
            case 7:
                return <Products handleBlur={handleBlur}/>
            case 8:
                return <AdditionalInterst  handleBlur={handleBlur}/>
            case 9:
                return <GeneralInformation handleBlur={handleBlur}/>
            case 10:
                return <GeneralInformationContnued  handleBlur={handleBlur}/>
            case 11: 
                return <Remarks handleBlur={handleBlur}/>
            case 12: 
                return <Signature handleSubmit={handleSubmit} handleBlur={handleBlur}/>
        }
    }
    return (
        <div>
            <Stepper style={{width: '100%'}} activeStep={currentStep - 1} orientation="horizontal">
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
            </Stepper>
            {showStep(currentStep)}
        </div>
    );
};

export default FormMin;