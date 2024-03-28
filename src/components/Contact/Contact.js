import React from "react";
import { Col, Container, Form } from "react-bootstrap";
import "./Contact.css";
import { emailServiceAPI } from "../../global/constants";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { name, email, phone, message } = contact;
  const [validated, setValidated] = useState(false);
  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setLoading(false);
    }
    setValidated(true);

    if (form.checkValidity() === true) {
      onSaveContact();
      clearForm();
      setValidated(false);
    }
  };

  const onSaveContact = async () => {
    try {
      const res = await axios.post(`${emailServiceAPI}/email-service`, {
        contact,
        reqFrom: "residence",
      });
      toast.success(res.data.msg);
      clearForm();
      setValidated(false);
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data.msg);
      setLoading(false);
    }
  };

  const clearForm = () => {
    setContact({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <Container id='contact-us'>
      <div className='row py-5'>
        <h1 className='contact_head my-3 '>CONTACT US</h1>
        <div className='col-lg-11 col-md-10 col-sm-12 mx-auto'>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className='row '
          >
            {/* input section start */}
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <Form.Group className='mb-4' controlId='fullName'>
                <Form.Control
                  type='text'
                  placeholder='Full Name'
                  name='name'
                  value={name}
                  required
                  onChange={onChange}
                  className='name-box text-white rounded-0 form-control'
                />
                <Form.Control.Feedback type='invalid'>
                  Please provide a name
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className='mb-4' controlId='email'>
                <Form.Control
                  type='email'
                  placeholder='Email'
                  value={email}
                  name='email'
                  required
                  onChange={onChange}
                  className='email-box text-white rounded-0 form-control'
                />
                <Form.Control.Feedback type='invalid'>
                  Please provide a valid email
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className='phone' controlId='phone'>
                <Form.Control
                  type='phone'
                  minLength={11}
                  maxLength={11}
                  name='phone'
                  onChange={onChange}
                  value={phone}
                  required
                  placeholder='Phone e.g. 080 123 4569'
                  className='email-box text-white rounded-0 form-control'
                />
                <Form.Control.Feedback type='invalid'>
                  Please provide a valid phone
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            {/* input section end */}
            {/* input message start */}
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <Form.Group controlId='message'>
                <Form.Control
                  as='textarea'
                  rows={5}
                  placeholder='Type message'
                  required
                  name='message'
                  value={message}
                  onChange={onChange}
                  className='message-box text-white rounded-0 w-100 form-select mb-3 mt-sm-4 mt-md-4 mt-lg-0'
                />
                <Form.Control.Feedback type='invalid'>
                  Please enter a message
                </Form.Control.Feedback>
              </Form.Group>

              <button className='send-message'>
                {loading ? (
                  <div className='spinner-border' size='sm' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
            {/* input message end */}
          </Form>
        </div>
      </div>
    </Container>
  );
}
export default Contact;
