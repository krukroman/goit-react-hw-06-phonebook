import { connect } from 'react-redux';
import contactsActions from 'redux/contacts/contacts-actions';
import PropTypes from 'prop-types';
import s from './ContactsFilter.module.scss';

function Filter({ value, onChange, contactsCount }) {
  return (
    <div className={s.container}>
      <label className={s.label}>
        Filter by name
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={`Contacts: ${contactsCount}`}
        />
      </label>
    </div>
  );
}
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
  contactsCount: state.contacts.items.length,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
