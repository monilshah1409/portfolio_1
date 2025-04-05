import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_2m8z0rk',
      'template_qxdf2wp',
      form.current,
      'pX_2hasGmGcuvjFXB'
    ).then(
      (result) => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        setSubmitStatus('error');
      }
    ).finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-content-box">
        <h1>Contact Me</h1>
        <div className="contact-info">
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/monil-shah-943a10258" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            {/* Add other social links here */}
          </div>
          <p>Feel free to reach out!</p>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {submitStatus === 'success' && (
            <div className="success-message">Message sent successfully!</div>
          )}
          {submitStatus === 'error' && (
            <div className="error-message">Failed to send message. Please try again.</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;