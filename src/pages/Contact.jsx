import React, { useState } from 'react';
import './Contact.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError({ ...error, [name]: value.trim() === '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:justinmiller617@gmail.com">justinmiller617@gmail.com</a></p>
        <p>Phone: <a href="tel:5155570405">515-557-0405</a></p>
        <p>GitHub: <a href="https://github.com/JPMill" target="_blank" rel="noopener noreferrer">github.com/JPMill</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/justin-miller-05047b293/" target="_blank" rel="noopener noreferrer">/in/justin-miller-05047b293/</a></p>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        {error.name && <p>Name is required</p>}
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        {error.email && <p>Valid email is required</p>}
        <label htmlFor="message">message</label>
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        {error.message && <p>Message is required</p>}
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;