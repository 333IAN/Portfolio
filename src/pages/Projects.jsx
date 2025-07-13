import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../App.css';

const Projects = () => (
    <section>
        <h1><strong>Projects</strong></h1>
        <ProjectCard title= "Wamunyiri Website" description="Employs various techs for modern UI with animated design. A website that focuses on responsiveness and interactivity" image="" tech="Python 3.8+ Flask SQLAlchemy HTML5 CSS3 JavaScriptES6+" link="" />
        <ProjectCard title= "024GLOBALCONNECT" description="A fully functional website for the AATI Company." image="" tech="React + Vite Tailwind CSS DjangoRest" link="" />
        <ProjectCard title= "Weather Application" description="Aweather app that gives real time weather data" image="" tech="Next.js TypeScript Tailwind CSS" link=""/>
        <ProjectCard title ="Euro 2024 Final Line Ups" description="A creative python library that draws a full pitch and its contents" image="" tech="Python 3" link=""/>
        <ProjectCard title ="Web Application" description="An application that employs LAMP Stack to give functionalties to Judges,Participants and Scores" image="" tech="LAMP" link=""/>
        <ProjectCard title ="Product Filter" description="An application that gives customers ability to search,rate and order products." image="" tech="HTML5 CSS3 JavaScript Bootstrap" link="" />
    </section>
);

export default Projects;