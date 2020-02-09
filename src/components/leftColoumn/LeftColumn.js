import React from 'react';
import { summary, techSkills, education } from '../../../resume.json';
import styles from './leftColumn.css';

const LeftColumn = () => {
  const educationElements = education.map((edu, i) => (
    <li key={i}>
      <h3>{edu.school}</h3>
      <h4>{edu.degree}</h4>
      <p>{edu.dateRange}</p>
    </li>
  ));

  return (
    <section className={styles.leftColumn}>
      <div>
        <h2>Summary</h2>
        <p>{summary}</p>
      </div>
      <div>
        <h2>Tech Skills</h2>
        <p>Languages: {techSkills.languages}</p>
        <p>Back End: {techSkills.backEnd}</p>
        <p>Front End: {techSkills.frontEnd}</p>
        <p>Databases: {techSkills.databases}</p>
        <p>Tools: {techSkills.tools}</p>
        <p>Dev Practices: {techSkills.devPractices}</p>
        <p>Tests: {techSkills.test}</p>
      </div>
      <div>
        <h2>Education</h2>
        <ul>
          {educationElements}
        </ul>
      </div>
    </section>
  );
};

export default LeftColumn;
