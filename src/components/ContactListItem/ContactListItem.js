import PropTypes from 'prop-types';

export const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li>
      {name}: {number}{' '}
      <button type="button" id={id} onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
