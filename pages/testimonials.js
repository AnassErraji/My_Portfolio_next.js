import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        // Récupération des témoignages depuis le localStorage
        const savedTestimonials = JSON.parse(localStorage.getItem('testimonials')) || [];
        setTestimonials(savedTestimonials);
    }, []);

    const handleEdit = (index) => {
        const newName = prompt("Entrez le nouveau nom:", testimonials[index].name);
        const newTestimonial = prompt("Entrez le nouveau témoignage:", testimonials[index].testimonial);

        if (newName && newTestimonial) {
            const updatedTestimonials = testimonials.map((testimonial, i) => 
                i === index ? { name: newName, testimonial: newTestimonial } : testimonial
            );
            setTestimonials(updatedTestimonials);
            localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
        }
    };

    const handleDelete = (index) => {
        const updatedTestimonials = testimonials.filter((_, i) => i !== index);
        setTestimonials(updatedTestimonials);
        localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
    };

    return (
        <div className="testimonials-container">
            <h1>Liste des témoignages</h1>
            {testimonials.length > 0 ? (
                <ul className="testimonials-list">
                    {testimonials.map((testimonial, index) => (
                        <li key={index} className="testimonial-item">
                            <p><strong>Nom:</strong> {testimonial.name}</p>
                            <p><strong>Témoignage:</strong> {testimonial.testimonial}</p>
                            <button onClick={() => handleEdit(index)} className="testimonial-btn-edit">Modifier</button>
                            <button onClick={() => handleDelete(index)} className="testimonial-btn-delete">Supprimer</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Aucun témoignage disponible.</p>
            )}
        </div>
    );
};

export default Testimonials;
