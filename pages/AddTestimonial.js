import React, { useState } from 'react';


const AddTestimonial = () => {
  const [name, setName] = useState('');
  const [testimonial, setTestimonial] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Name:', name);
      console.log('Testimonial:', testimonial);

      // Récupération des testimonials existants
      let testimonials = JSON.parse(localStorage.getItem('testimonials')) || [];

      // Ajout du nouveau testimonial
      testimonials.push({ name, testimonial });

      // Stockage des testimonials dans le localStorage
      localStorage.setItem('testimonials', JSON.stringify(testimonials));

      setSuccessMessage('Témoignage soumis avec succès !');
      setName('');
      setTestimonial('');
  };

    return (
        <div className="new-testimonial-container">
            <h1>Formulaire d'avis client</h1>
            <form onSubmit={handleSubmit}>
                <div className="new-testimonial-form-group">
                    <label htmlFor="name">Nom:</label>
                    <input
                        type="text"
                        id="name"
                        className="new-testimonial-form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="new-testimonial-form-group">
                    <label htmlFor="testimonial">Témoignage:</label>
                    <textarea
                        id="testimonial"
                        className="new-testimonial-form-control"
                        rows="5"
                        value={testimonial}
                        onChange={(e) => setTestimonial(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="new-testimonial-btn-submit">Soumettre</button>
            </form>
            {successMessage && <p className="new-testimonial-success-message">{successMessage}</p>}
        </div>
    );
};

export default AddTestimonial;
