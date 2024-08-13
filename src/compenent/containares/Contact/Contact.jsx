import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    enregitrer();
    // Ajoutez ici la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
  };

  const enregitrer = () => {
    const { name, email, message } = formData;
    if (name !== '' && email !== '' && message !== '') {
      alert("Merci pour votre message. Nous vous répondrons dès que possible.");
      setFormData({ name: '', email: '', message: '' });

    } else {
      alert("Veuillez remplir tous les champs.");
    }
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Contactez-nous</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Nom</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button type="submit" className="submit-btn">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
