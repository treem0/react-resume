import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ name, title, mobile, email, city, github, linkedin }) => (
  <>
    <h1>{name}</h1>
    <h2>{title}</h2>
    <p>{mobile}</p>
    <p>{email}</p>
    <p>{city}</p>
    <p>{github}</p>
    <p>{linkedin}</p>
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
