import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("x14g7EOVwwfyEmUuN"); // Replace with your public key
  }, []);

  // Clear status message after 5 seconds
  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status.message]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Monil Shah', // Your name
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        'service_309pt3c', // Replace with your EmailJS service ID
        'template_4awovbp', // Replace with your EmailJS template ID
        templateParams
      );

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: `Message sent successfully! ✨ Thank you for reaching out, ${formData.name.split(' ')[0]}!`
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        form.current.reset();
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content-box">
        <h1>Get In Touch</h1>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-item">
              <i className="fas fa-envelope"></i>
              <div className="contact-info-content">
                <h3>Email</h3>
                <p>monilshah149@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div className="contact-info-content">
                <h3>Location</h3>
                <p>Ahmedabad, Gujarat, India</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <i className="fas fa-phone"></i>
              <div className="contact-info-content">
                <h3>Phone</h3>
                <p>+91 9913140919</p>
              </div>
            </div>

            <div className="social-links-contact">
              <a href="https://github.com/monilshah1409" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="www.linkedin.com/in/monil-shah-943a10258" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            {status.message && (
              <div className={`form-status ${status.type}`}>
                <i className={`fas ${status.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                <span>{status.message}</span>
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name">
                <i className="fas fa-user"></i> Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <i className="fas fa-envelope"></i> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">
                <i className="fas fa-heading"></i> Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Enter subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <i className="fas fa-comment-alt"></i> Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message"
                rows="5"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="contact-btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
