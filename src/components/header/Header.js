import React from 'react';
import PropTypes from 'prop-types';
import { header } from '../../../resume.json';

const Header = () => (
  <>
    <h1>{header.name}</h1>
    <h2>{header.title}</h2>
    <p>{header.mobile}</p>
    <p>{header.email}</p>
    <p>{header.city}</p>
    <p>{header.github}</p>
    <p>{header.linkedin}</p>
  </>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired
};

export default Header;
