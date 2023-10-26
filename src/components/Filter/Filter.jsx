import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ onChange, value }) => {
  return (
    <label>
      Find contacts by Name
      <br />
      <input
        className={css.input}
        type="text"
        value={value}
        // 
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
