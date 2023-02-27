import React, { useState } from 'react'

function MultiStepForm() {
const [step, setStep] = useState(1);

const handleNext = () => {
  setStep(step + 1);
};

const handlePrev = () => {
  setStep(step - 1);
};

const renderStepOne = () => {
return (
<fieldset>
<legend>Step 1</legend>  
<label>
  Name:
  <input type="text" />
  </label>
  <button onClick={handleNext}>Next</button>
</fieldset>
);
};

const renderStepTwo = () => {
return (
<fieldset>
<legend>Step 2</legend>  
<label>
  Email:
  <input type="email" />
  </label>
  <button onClick={handlePrev}>Back</button>
  <button onClick={handleNext}>Next</button>
</fieldset>
);
};

const renderStepThree = () => {
return (
<fieldset>
<legend>Step 3</legend>  
<label>
 Password:
  <input type="password" />
  </label>
  <button onClick={handlePrev}>Back</button>
  <button>Submit</button>
</fieldset>
);
};

const renderProgressBar = () => {
  return(
    <div className="progress-bar">
      <div
      className="progress"
      style={{width: `${(step -1) * 50}%`}}
      />
      </div>
  );
};

  return (
    <div className="multi-step-form">
      {step === 1 && renderStepOne()}
      {step === 2 && renderStepTwo()}
      {step === 3 && renderStepThree()}
      {renderProgressBar()}
    </div>
  );
};
export default MultiStepForm;