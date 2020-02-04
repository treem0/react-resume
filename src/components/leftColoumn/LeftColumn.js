import React, { Component } from 'react';
import PropTypes from 'prop-types';

const LeftColumn = ({ summary, }) => {
  <>
    <div>
      <h2>Summary</h2>
      <p>{summary}</p>
    </div>
    <div>
      <h2>Tech Skills</h2>
    </div>
  </>;
};

LeftColumn.propTypes = {
    
};

export default LeftColumn;
