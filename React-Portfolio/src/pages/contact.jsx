import React, { useState } from 'react';

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
    // Perform validation or send the form data
  };

  return (
    <section className="contact">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        {error.name && <p>Name is required</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        {error.email && <p>Valid email is required</p>}
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