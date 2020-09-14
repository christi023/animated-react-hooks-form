import React, { useState } from 'react';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';

// style
import './Form.css';

export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // function
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn"></span>
        <div className="form-content-left">
          <img src="img/img-2.svg" alt="spaceship" className="form-img" />
        </div>
        {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </>
  );
}
