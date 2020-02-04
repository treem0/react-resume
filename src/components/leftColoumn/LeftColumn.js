import React from 'react';
import PropTypes from 'prop-types';

const LeftColumn = ({ summary, languages, backEnd, frontEnd, databases, tools, devPractices, tests }) => {
  <>
    <div>
      <h2>Summary</h2>
      <p>{summary}</p>
    </div>
    <div>
      <h2>Tech Skills</h2>
      <p>Languages: {languages}</p>
      <p>Back End: {backEnd}</p>
      <p>Front End: {frontEnd}</p>
      <p>Databases: {databases}</p>
      <p>Tools: {tools}</p>
      <p>Dev Practices: {devPractices}</p>
      <p>Tests: {tests}</p>
    </div>
    <div>
      <h2>Education</h2>
    </div>
  </>;
};

LeftColumn.propTypes = {
  summary: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  backEnd: PropTypes.array.isRequired,
  frontEnd: PropTypes.array.isRequired,
  databases: PropTypes.array.isRequired,
  tools: PropTypes.array.isRequired,
  devPractices: PropTypes.array.isRequired,
  tests: PropTypes.array.isRequired
};

export default LeftColumn;
