import React from 'react';
import'../App.css';
import AnimatedText from '../components/AnimatedText';


const Home = () => (
    <section className="home-section">
        <div>
            <h1 className="main-heading"><AnimatedText text="Welcome to Ian Isavwa's Portfolio!" /></h1>
            <p className="sub-heading">I am a Software Engineer. Specialized in Backend(Django Rest), Frontend(React, Tailwind).</p>
            <p className="sub-heading">Find projects done by me on my Github account.</p>
        </div>
    </section>
);

export default Home;