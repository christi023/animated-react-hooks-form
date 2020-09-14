import React from 'react';
//custom hook
import useForm from '../hook/useForm';
import validate from './Validate';
// style
import './Form.css';

export default function FormSignUp(submitForm) {
  //custom hook
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate);
  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form">
        <h1>Get Started with us! Create your account by filling out the information below.</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="info@example.com"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            placeholder="Enter password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="password2"
            name="password2"
            className="form-input"
            placeholder="Enter password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.username}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Sign Up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#">Click</a>
        </span>
      </form>
    </div>
  );
}
