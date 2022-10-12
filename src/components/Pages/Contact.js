import React, { useState } from "react";
import FormInput from "../FormValidations/FormInput";
import "./Contact.css";

const Contact = () => {
  const [values, setValues] = useState({
    cname: "",
    email: "",
    info: "",
  });

  const inputs = [
    {
      id: 1,
      name: "cname",
      type: "text",
      placeholder: "Company name",
      errorMsg: "Company name cannot be empty",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your E-Mail",
      errorMsg: "Email is invalid",
      required: true,
    },
    {
      id: 3,
      name: "info",
      type: "textarea",
      placeholder: "Additional info",
      errorMsg: "",
      required: false,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-container">
      <h1 className="logo">AGENCY</h1>
      <p className="contact-text">Any idea? Any Project?</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
