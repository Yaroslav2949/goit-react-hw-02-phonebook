import React from 'react';
import PropTypes from 'prop-types'; // типізація
import css from './ContactItem.module.css';

export const ContactItem = ({ number, name, onDeleteContact }) => {
  return (
    <>
      <span className={css.name}> {name}:</span>
      <span className={css.number}>{number}</span>
      <button className={css.button} type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,

  onDeleteContact: PropTypes.func.isRequired,
};
