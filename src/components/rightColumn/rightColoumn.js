import React, { Component } from 'react';
import { projects, workExperience } from '../../../resume.json';

const RightColumn = () => {
    const projectElements = projects.map((project, i) => (
        <li key={i}>
            <h3>{project.name}</h3>
            <p>{project.tech}</p>
            <p>{project.summary}</p>
        </li>
    ));
    const workExperienceElements = workExperience.map((work, i) => (
        <li key={i}>
            <h3>{work.company}</h3>
            <h5>{work.title}</h5>
            <p>{work.dateRange}</p>
            <p>{work.duties}</p>
        </li>
    ))

    return (
        <>
        <section>
        <h2>PROJECTS</h2>
        <ul>
            {projectElements}
        </ul>
        </section>
        <section>
            <ul>
                {workExperienceElements}
            </ul>
        </section>
        </>
    )
};

export default RightColumn;
