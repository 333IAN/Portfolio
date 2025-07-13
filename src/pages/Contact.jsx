import React, {useState} from 'react';
import axios from 'axios';
import '../App.css';

const Contact = () => {
    const [formData, setFormData]= useState({
        name:'',
        email:'',
        message:'',
    });
    const handleChange = (e) =>{
        setFormData((prev) => ({
            ...prev,
            [e.target.name]:e.target.value,
        }));
        };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res= await axios.post('http://localhost:5000/contact', formData);
            alert('Message sent successfully!');
        } catch (error) {
            alert('Something went wrong. Please try again.');
        }
    };
    return (
        <section>
            <h1><strong>Chat with me 😃📥</strong></h1>
            <form onSubmit={handleSubmit}>
                <input 
                  type="text"
                  name="name"
                  placeholder="Your Names"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input 
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  ></textarea>
                  <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;